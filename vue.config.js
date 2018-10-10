module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  baseUrl: process.env.PRODUCTION_BASE_URL,
  css: {
    extract: true
  },
  configureWebpack: {
    // No need for splitting
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devtool: 'source-map'
  },
  
}