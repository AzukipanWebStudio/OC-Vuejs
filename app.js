const HomeComponent = {
  template: `<div class="demo-tab">Home component</div>`,
};

const AboutComponent = {
  template: `<div class="demo-tab">About component</div>`,
};

const ContactComponent = {
  template: `<div class="demo-tab">Contact component</div>`,
};

const { createApp } = Vue;

createApp({
  data: () => ({
    tabs: ["Home", "About", "Contact"],
    currentTab: "Home",
  }),
  computed: {
    currentTabComponent() {
      return "tab-" + this.currentTab.toLowerCase();
    },
  },
  components: {
    "tab-home": HomeComponent,
    "tab-about": AboutComponent,
    "tab-contact": ContactComponent,
  },
}).mount("#app");
