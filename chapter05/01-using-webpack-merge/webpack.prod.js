// 設定をマージする関数
const { merge } = require('webpack-merge');
// JavaScritpt を圧縮するプラグイン
const TerserPlugin = require('terser-webpack-plugin');
// 共通設定
const commonConfig = require('./webpack.common.js');

// 本番用の設定と共通設定（commonConfig）をマージする
module.exports = merge(commonConfig, {
  // モード
  mode: 'production',
  optimization: {
    minimizer: [
      // JavaScritpt を圧縮する
      new TerserPlugin({
        // ライブラリのライセンスコメントなどを抽出した「xxx.LICENSE.txt」のようなファイルが出力されないようにする
        extractComments: false,
        // terser のオプション
        // 詳細は https://github.com/terser/terser#minify-options を参照
        terserOptions: {
          // console を削除する
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
