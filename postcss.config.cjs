const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props')

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nesting'),
    postcssJitProps(OpenProps),
    require('cssnano'),
  ]
}
