const { createApp } = Vue;

createApp({
  data: () => ({
    lastName: "",
    firstName: "",
  }),
  computed: {
    fullName: {
      get() {
        return this.lastName + " " + this.firstName;
      },
      set(newValue) {
        const name = newValue.split(" ");
        this.lastName = name[0];
        this.firstName = name[1];
      },
    },
  },
}).mount("#app");
