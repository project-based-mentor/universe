const { override, babelInclude, addBundleVisualizer } = require('customize-cra')
const path = require('path')

module.exports = override(
  process.env.BUNDLE_VISUALIZE && addBundleVisualizer(),
  babelInclude([
    path.resolve('src')
  ]),
)
