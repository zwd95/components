export default function install (Vue) {
  const files = require.context('./', false, /\.vue$/)

  files.keys().forEach(fileName => {
    const componentConfig = files(fileName)

    Vue.component(componentConfig.default.name, componentConfig.default || componentConfig)
  })
}
