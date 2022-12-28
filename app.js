const { createApp } = Vue;

createApp({
  data() {
    return {
      items: [{ fluit: "りんご" }, { fluit: "バナナ" }, { fluit: "みかん" }],
    };
  },
}).mount("#app");
