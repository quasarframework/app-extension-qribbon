/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendConf = function (conf) {
  // make sure qjumbotron boot file is registered
  conf.boot.push('~quasar-app-extension-qribbon/src/boot/qribbon.js')
  console.log(` App Extension (qribbon) Info: 'Adding qribbon boot reference to your quasar.conf.js'`)

  // make sure boot & component files transpile for SSR
  conf.build.transpileDependencies.push(/quasar-app-extension-qribbon[\\/]src/)

  // make sure qjumbotron css goes through webpack to avoid ssr issues
  conf.css.push('~quasar-app-extension-qribbon/src/component/ribbon.styl')
  console.log(` App Extension (qribbon) Info: 'Adding ribbon.styl css reference to your quasar.conf.js'`)
}

module.exports = function (api) {
  // quasar compatibility check
  api.compatibleWith('@quasar/app', '^1.0.0-beta.18')

  // register JSON api
  // api.registerDescribeApi('QRibbon', './component/QRibbon.json')

  // extend quasar.conf
  api.extendQuasarConf(extendConf)
}
