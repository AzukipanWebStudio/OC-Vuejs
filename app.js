const { createApp } = Vue;

createApp({
  data() {
    return {
      message1: "Hello Vue!",
    };
  },
}).mount("#app1");

createApp({
  data() {
    return {
      message2: "Hello Vue again!",
    };
  },
}).mount("#app2");