// Node.js に組み込まれているモジュール。出力先などの指定をするために利用する。
const path = require('path');

module.exports = {
  // モード
  mode: 'development',
  // エントリーポイント
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    // __dirname + public のように書くと、OS によって
    // パスが異なってしまうことがあるので、必ず path モジュールを利用する。
    path: path.resolve(__dirname, 'public'),
    // 出力するファイル名
    filename: 'js/bundle.js',
  },
  // webpack-dev-server の設定
  devServer: {
    // サーバー起動時にブラウザを自動的に起動する
    open: true,
    // ポート番号
    port: 9000,
    // コンテンツのルートディレクトリ
    // ./public を指定しているので、http://localhost:9000/ を開くと ./public/index.html が開かれる
    contentBase: './public',
  },
};
