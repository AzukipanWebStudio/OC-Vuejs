const { createApp } = Vue;

createApp({
  data: () => ({
    isActive: false,
    activeClass: "active",
    errorClass: "error",
    textUnderline: "text-underline",
  }),
}).mount("#app");
