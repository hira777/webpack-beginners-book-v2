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
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.scss$/,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, 'src/scss'),
        // 利用するローダー
        // sass-loader css-loader style-loader の順で実行される
        use: [
          // style-loader で変換した CSS のスタイルが記述された style タグを HTML に追加する
          'style-loader',
          // CSS をモジュールに変換する
          'css-loader',
          // Sass を CSS にコンパイルする
          'sass-loader',
        ],
      },
    ],
  },
};
