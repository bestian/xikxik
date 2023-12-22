module.exports = {
  runtimeCompiler: true,
  css: { sourceMap: true },
  productionSourceMap: true,
  /* pwa: {
    workboxOptions: {
      exclude: [/\.gitkeep/]
    }
  }, */
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}
