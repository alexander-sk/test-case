// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/reset.css";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/ua";
import App from "./App";
import { Base64 } from "js-base64"; // Поддерживает UTF-8

const cfg = JSON.parse(
  // Base64.encode
  Base64.decode(
    "eyJjb2RlIjoiUGVyc29uIiwiYXR0cmlidXRlcyI6W3sidGl0bGUiOiLQhtC8J9GPIiwiY29kZSI6ImZpcnN0TmFtZSIsInZhbGlkYXRpb24iOnsicmVxdWlyZWQiOnRydWV9fSx7InRpdGxlIjoi0J/RgNGW0LfQstC40YnQtSIsImNvZGUiOiJsYXN0TmFtZSIsInZhbGlkYXRpb24iOnsicmVxdWlyZWQiOnRydWV9fSx7InRpdGxlIjoi0JLRltC6IiwiY29kZSI6ImFnZSIsInR5cGUiOiJpbnQifSx7InRpdGxlIjoiRW1haWwiLCJjb2RlIjoiZW1haWwiLCJ2YWxpZGF0aW9uIjp7ImVtYWlsIjp0cnVlfX0seyJ0aXRsZSI6ItCS0LDQttC70LjQstGW0YHRgtGMIiwiY29kZSI6ImltcG9ydGFuY2UiLCJ0eXBlIjoiZW51bSIsImVudW1UeXBlIjoiSW1wb3J0YW5jZVZhbHVlIn0seyJ0aXRsZSI6ItCf0L7RgdCw0LTQsCIsImNvZGUiOiJqb2JQb3NpdGlvbiIsInR5cGUiOiJlbnVtIiwiZW51bVR5cGUiOiJKb2JQb3NpdGlvblZhbHVlIn0seyJ0aXRsZSI6ItCU0LDRgtCwINCy0LjRhdC+0LTRgyDQvdCwINGA0L7QsdC+0YLRgyIsImNvZGUiOiJzdGFydEpvYkF0IiwidHlwZSI6ImRhdGUifSx7InRpdGxlIjoi0KLQtdC70LXRhNC+0L0iLCJjb2RlIjoicGhvbmUiLCJtdWx0aXBsZSI6dHJ1ZSwidmFsaWRhdGlvbiI6eyJwYXR0ZXJuIjoiXlxcKzM4XFwoXFxkezN9XFwpKSBcXGR7M30tXFxkezJ9LVxcZHsyfSJ9fV19"
  )
);

const enums = JSON.parse(
  Base64.decode(
    "eyJJbXBvcnRhbmNlVmFsdWUiOlt7ImlkIjoxLCJ0aXRsZSI6ItCS0LDQttC70LjQstC+In0seyJpZCI6MiwidGl0bGUiOiLQndC+0YDQvNCw0LvRjNC90L4ifSx7ImlkIjozLCJ0aXRsZSI6ItCU0YPQttC1INCy0LDQttC70LjQstC+In1dLCJKb2JQb3NpdGlvblZhbHVlIjpbeyJpZCI6MSwidGl0bGUiOiLQkNCz0YDQsNGA0L3QuNC5INGB0LXQutGC0L7RgCJ9LHsiaWQiOjIsInRpdGxlIjoi0KLRgNCw0LrRgtC+0YDQuNGB0YIiLCJwYXJlbnRJZCI6MX0seyJpZCI6MywidGl0bGUiOiLQpNC10YDQvNC10YAiLCJwYXJlbnRJZCI6MX0seyJpZCI6NCwidGl0bGUiOiJJVCJ9LHsiaWQiOjUsInRpdGxlIjoi0J/RgNC+0LPRgNCw0LzRltGB0YIiLCJwYXJlbnRJZCI6NH0seyJpZCI6NiwidGl0bGUiOiLQnNC10L3QtdC00LbQvNC10L3RgiIsInBhcmVudElkIjo0fSx7ImlkIjo3LCJ0aXRsZSI6ItCf0YDQvtC00LbQtdC60YIg0LzQtdC90LXQtNC20LXRgCIsInBhcmVudElkIjo2fSx7ImlkIjo4LCJ0aXRsZSI6ItCe0YTRltGBINC80LXQvdC10LTQttC10YAiLCJwYXJlbnRJZCI6Nn1dfQ=="
  )
);

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    cfg: cfg,
    enums: enums
  },
  components: { App },
  template: '<App :cfg="cfg" :enums="enums"></App>'
});
