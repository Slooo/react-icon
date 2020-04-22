const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/app.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'entities': path.resolve(__dirname, 'src/entities'),
      'types': path.resolve(__dirname, 'src/types'),
      'interfaces': path.resolve(__dirname, 'src/interfaces'),
      'components': path.resolve(__dirname, 'src/components'),
      'UI': path.resolve(__dirname, 'src/UI'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            }
          }
        ]
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
