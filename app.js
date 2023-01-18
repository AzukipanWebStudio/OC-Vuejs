const { createApp } = Vue;

createApp({
  data: () => ({
    confirmation: {
      firstName: "Ichiro",
      lastName: "Tanaka",
      email: "test@example.com",
    },
  }),
}).mount("#app");
