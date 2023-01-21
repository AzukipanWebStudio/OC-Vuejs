const { createApp } = Vue;

createApp({
  data: () => ({
    counter: 0,
  }),
  methods: {
    countUp() {
      this.counter += 1;
    },
  },
}).mount("#app");
