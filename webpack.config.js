const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: './src/server/main.ts',
    context: __dirname,
    target: 'node',
    node: {
      __dirname: false
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'server-bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: [
      new WebpackShellPlugin({
        // run this command once webpack has finished building
        onBuildEnd: ['yarn run:dev']
      })
    ],
    watch: true,
    // excludes node_modules from build
    externals: [ nodeExternals() ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            'ts-loader',
          ]
        }
      ]
    }
  },
  {
    entry: './src/app/js/index.js',
    output: {
      path: path.resolve(__dirname, 'build/public'),
      filename: 'app-bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    watch: true,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  }
]