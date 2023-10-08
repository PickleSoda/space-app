<script setup>
import Typewriter from "@btjspr/vue-typewriter";
import { ref } from "vue";


const questions = ref([
    {
        "question": "Imagine you are on a mission to Mars, and you need to generate oxygen for survival. Which of the following resources on Mars can be used to produce oxygen?",
        "options": ["Mars' soil", "Martian clouds", "Martian volcanoes", "Martian rivers"],
        "correctAnswer": "Mars' soil"
    },
    {
        "question": "You are an astronaut on a distant planet, and your communication system has failed. To send a signal back to Earth, which of these can you use?",
        "options": ["Laser beams", "Morse code", "Smoke signals", "Drum beats"],
        "correctAnswer": "Laser beams"
    },
    {
        "question": "On a mission to a distant star, your spacecraft encounters an asteroid field. What strategy can you use to safely navigate through it?",
        "options": ["Speed up to pass through quickly", "Maneuver erratically", "Use a deflector shield", "Launch a probe to clear the path"],
        "correctAnswer": "Use a deflector shield"
    },
    {
        "question": "You're exploring a distant moon, and you need to find water. Where might you look for potential water sources?",
        "options": ["Underground caves", "Volcanic craters", "High mountain peaks", "Desert plains"],
        "correctAnswer": "Underground caves"
    },
    {
        "question": "While on a mission to a distant asteroid, your spacecraft encounters a critical malfunction. How can you conserve resources and ensure your survival until rescue?",
        "options": ["Consume emergency rations immediately", "Eject non-essential equipment", "Vent excess air into space", "Attempt to repair the spacecraft"],
        "correctAnswer": "Eject non-essential equipment"
    }
]);

const result = ref('')
const resultCount = ref('')



function getRandomQuestions(questions) {
  // Shuffle the questions to randomize the order
  const shuffledQuestions = questions.slice().sort(() => Math.random() - 0.5);

  // Return the first three questions from the shuffled list
  return shuffledQuestions.slice(0, 3);
}
const someQuestions = getRandomQuestions(questions.value);

const submitQuiz = () => {
  const results = [];
  let count = 0;
  someQuestions.forEach((question, index) => {
    const result = {
      number: index + 1,
      isCorrect: question.answer === question.correctAnswer
    };
    question.answer === question.correctAnswer && count++
    results.push(result);
  });
  result.value = results;
  resultCount.value = count;
  console.log(result.value, results, resultCount.value)
};

</script>
<template>
    <div class="text-white w-full max-w-xl px-6 md:px-10 mx-auto">
        <Typewriter :speed="50" :delay="10" :loop="false" :textStyles="{ color: 'white', fontSize: '1.2em' }"
            :cursorStyles="{ width: '0px' }" class="pb-4">
            <h1>Phopper Quiz!</h1>
        </Typewriter>
        <div class="border border-white border-opacity-30 p-8 bg-black bg-opacity-20">

            <form @submit.prevent="submitQuiz">

                <div v-for="(question, index) in someQuestions" :key="index" class="pb-4">
                    <p class="md:text-base font-bold text-center pb-2">{{ question.question }}</p>
                    <label v-for="(option, optionIndex) in question.options" class="text-center w-full ml-4 text-sm md:text-base" :class="result.length ? question.answer && option == question.correctAnswer?'text-green-700':'text-red-700':''">
                        <input   type="radio" :name="'question-' + index" :value="option" v-model="question.answer">
                        {{ option }}
                        <br>
                    </label>
                </div>
                <!-- ... -->
        <!-- <div class="text-white p-2 border border-white w-fit mx-auto mt-2 cursor-pointer"> -->
            <div v-if="resultCount" class="pb-3 text-xl">
                        {{resultCount}}/3
            </div>

<div class="flex justify-between items-center">

    <button type="submit" class="border border-white  p-2 hover:bg-white hover:text-black text-center">Submit Quiz</button>
    
    <div class="ml-1 p-2 border border-white hover:bg-white hover:text-black cursor-pointer text-center">
        <router-link to="/">Return Home</router-link>
    </div>
</div>
            </form>
        </div>
    </div>
</template>

"
