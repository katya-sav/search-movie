const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      emitError: true,
      failOnError: true,
    }),
    new HtmlWebpackPlugin({
      title: 'our project',
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
}
