module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    library: 'Gantt',
    libraryTarget: 'umd',
    filename: 'gantt.min.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  externals: {},
  devtool: 'source-map',
  devServer: {
    static: {
      directory: './',
    },
    compress: false,
    port: 7077,
  },
  performance: { hints: false }
};
