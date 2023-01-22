const { createApp } = Vue;

createApp({
  data: () => ({
    name: "",
    checkedFluits: [],
    picked: "",
    selected: "",
    message: "",
  }),
}).mount("#app");
