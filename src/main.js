import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useMainStore } from "./stores/main";
import "./index.css";
import axios from "axios";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import Particles from "vue3-particles";


const app = createApp(App);

/* Init Pinia */
const pinia = createPinia();
app.use(pinia);
app.use(Particles);
app.use(autoAnimatePlugin)

const mainStore = useMainStore();
mainStore.fetch("planets")

axios.defaults.timeout = 300000;


/* Default title tag */
const defaultDocumentTitle = "space-app";
/* Set document title from route meta */
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle;
});
app.use(router).mount("#app");