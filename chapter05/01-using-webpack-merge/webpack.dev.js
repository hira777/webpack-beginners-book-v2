// 設定をマージする関数
const { merge } = require('webpack-merge');
// 共通設定
const commonConfig = require('./webpack.common.js');

// 開発用の設定と共通設定（commonConfig）をマージする
module.exports = merge(commonConfig, {
  // モード
  mode: 'development',
  // ソースマップ
  devtool: 'eval-cheap-module-source-map',
});
