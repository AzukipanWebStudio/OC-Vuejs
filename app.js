const { createApp } = Vue;

createApp({
  data: () => ({
    lastName: "",
    firstName: "",
    // fullName: "",
  }),
  // watch: {
  //   lastName(value) {
  //     this.fullName = value + " " + this.firstName;
  //   },
  //   firstName(value) {
  //     this.fullName = this.lastName + " " + value;
  //   },
  // },
  computed: {
    fullName: function () {
      return (this.fullName = this.lastName + " " + this.firstName);
    },
  },
}).mount("#app");
