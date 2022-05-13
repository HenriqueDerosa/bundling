module.exports = {
  usedExports: true,
  runtimeChunk: "single",
  splitChunks: {
    cacheGroups: {
      vendor: {
        name: "vendor",
        test: /[\\/]node_modules[\\/]/,
        chunks: "all",
      },
      common: {
        name: "common",
        // gets 'src' except 'components/button'
        test: /[\\/]src[\\/](?!components\/button)[\\/]/,
        chunks: "all",
        minSize: 0,
      },
      buttonComponent: {
        name: "buttonComponent",
        test: /[\\/]src[\\/]components[\\/]Button[\\/]/,
        chunks: "all",
      },
    },
  },
};
