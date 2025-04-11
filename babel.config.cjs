// Configures Babel to transform modern JavaScript and JSX for testing and development
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs'
  ]
}; 