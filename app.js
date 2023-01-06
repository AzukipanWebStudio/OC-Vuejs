const MessageItem = {
  template: "<h1>Hello!</h1>",
};

const { createApp } = Vue;

createApp({
  components: {
    MessageItem,
  },
}).mount("#app");
