const { createApp } = Vue;

createApp({
  data: () => ({
    message: "Hello",
  }),
  computed: {
    countString: function () {
      const count = this.message.length;
      return count;
    },
  },
  methods: {
    countStringMethod: function () {
      const count = this.message.length;
      return count;
    },
  },
}).mount("#app");
