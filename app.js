const MessageItem = {
  props: ["message"],
  template: "<h1>{{ message }}</h1>",
};

const { createApp } = Vue;

createApp({
  data: function () {
    return {
      items: [
        { id: 1, comment: "Hello Message" },
        { id: 2, comment: "Group Message" },
        { id: 3, comment: "Hello Vue" },
      ],
    };
  },
  components: {
    MessageItem,
  },
}).mount("#app");
