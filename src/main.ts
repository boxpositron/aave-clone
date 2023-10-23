import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(...[faChevronLeft, faChevronRight, faGithub, faDiscord, faTwitter]);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
