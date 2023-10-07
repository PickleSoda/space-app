import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    userIp: null,
    deviceType: null,
    planets:[]
  }),
  actions: {
    fetch(sampleDataKey) {
      axios
        .get(`/data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            this[sampleDataKey] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    async fetchUserIp() {
      try {
        const response = await axios.get("https://api64.ipify.org?format=json");
        this.userIp = response.data.ip;
      } catch (error) {
        console.error("Error fetching user IP:", error);
        // Handle errors as needed
      }
    },
    },
    setDeviceType() {
      const platform = navigator.platform.toLowerCase();
      if (
        /(android|webos|iphone|ipad|ipod|blackberry|windows phone)/.test(
          platform
        )
      ) {
        this.deviceType = "mobile";
      } else if (/mac|win|linux/i.test(platform)) {
        this.deviceType = "desktop";
      } else if (/tablet|ipad/i.test(platform)) {
        this.deviceType = "tablet";
      } else {
        this.deviceType = "unknown";
      }
    },
  });