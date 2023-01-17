const { createApp } = Vue;

createApp({
  data: () => ({
    activeClass: "active",
    textUnderline: "text-underline",
  }),
}).mount("#app");
