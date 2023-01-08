const { createApp } = Vue;

createApp({
  data: () => ({
    m: 0,
    km: 0,
  }),
  watch: {
    km(newValue, oldValue) {
      console.log(newValue, oldValue);
      this.m = newValue * 1000;
    },
  },
}).mount("#app");
