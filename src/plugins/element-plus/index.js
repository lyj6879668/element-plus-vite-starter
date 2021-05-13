import {
  ElButton,
  ElLoading
} from "element-plus";

const components = [
  ElButton,
];

const plugins = [
  ElLoading,
]

export function useElementPlus(app) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
}
