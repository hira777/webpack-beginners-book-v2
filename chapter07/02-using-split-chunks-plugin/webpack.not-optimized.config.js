// Node.js に組み込まれているモジュール。出力先などの指定をするために利用する。
const path = require('path');
// JavaScritpt を圧縮するプラグイン
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // モード
  mode: 'production',
  // エントリーポイント
  entry: {
    app: './src/js/app.js',
    app2: './src/js/app2.js',
    app3: './src/js/app3.js',
  },
  // 出力の設定
  output: {
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    // `__dirname + public`のように書くと、OS によって
    // パスが異なってしまうことがあるので、必ず`path`モジュールを利用する。
    path: path.resolve(__dirname, 'public'),
    // 出力するファイル名
    // [name] には entry に指定した名前が入る
    // このサンプルでは、entry に app と app2 と app3 を指定しているため、
    // app.bundle.js と app2.bundle.js と app3.bundle.js が出力される
    filename: 'js/[name].bundle.js',
  },
  optimization: {
    minimizer: [
      // JavaScritpt を圧縮する
      new TerserPlugin({
        // ライブラリのライセンスコメントなどを抽出した「xxx.LICENSE.txt」のようなファイルが出力されないようにする
        extractComments: false,
      }),
    ],
  },
};
