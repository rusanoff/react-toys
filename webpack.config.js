const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DEV = process.env.NODE_ENV !== 'production';
const { loader: miniCssExtractPluginLoader } = MiniCssExtractPlugin;

const miniCssExtractPluginLoaderConfig = {
  loader: miniCssExtractPluginLoader,
  options: {
    hmr: DEV,
    reloadAll: true,
  },
};

const config = {
  bail: !DEV,
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    open: true,
  },
  devtool: DEV ? 'eval-source-map' : 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  mode: DEV ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        use: [
          'style-loader',
          miniCssExtractPluginLoaderConfig,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: path.resolve(__dirname, 'src', 'assets', 'fonts'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: `assets/img/[name]${DEV ? '' : '-[chunkhash:8]'}.[ext]`,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        exclude: path.resolve(__dirname, 'src', 'assets', 'img'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[folder]/[name].[ext]',
            },
          },
        ],
      },
    ],
    strictExportPresence: true,
  },
  output: {
    chunkFilename: DEV ? '[name].js' : 'js/[chunkhash:8].js',
    filename: DEV ? '[name].js' : 'js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: DEV ? '/' : './',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash:8].css',
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src', 'assets'),
      components: path.resolve(__dirname, 'src', 'app', 'components'),
      modules: path.resolve(__dirname, 'src', 'app', 'modules'),
      configs: path.resolve(__dirname, 'src', 'app', 'configs'),
    },
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    modules: [
      'node_modules',
    ],
  },
};

module.exports = config;
