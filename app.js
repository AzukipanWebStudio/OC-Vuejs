const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello <span style='color:blue'>Vue</span>!",
    };
  },
}).mount("#app");
