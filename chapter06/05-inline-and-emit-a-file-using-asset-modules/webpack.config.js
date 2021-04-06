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
      {
        // Asset Modules の処理対象ファイル
        test: /\.(jpe?g|gif|png|svg)$/,
        // Asset Modules のタイプ
        // asset を指定することで、画像の出力を自動で振り分ける。
        // デフォルトの場合、画像サイズが 8KB 未満であれば、DataURL に変換してバンドルする。
        // 画像サイズが 8KB 以上であれば、画像を出力する。
        type: 'asset',
        // 今回は parser.dataUrlCondition.maxSize を指定しているので
        // 画像サイズが 4KB 未満であれば、DataURL に変換してバンドルする。
        // 画像サイズが 4KB 以上であれば、画像を出力する。
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4KB
          },
        },
        generator: {
          // 画像の出力先と出力するファイル名
          // [name] にはバンドル前のファイル名が入り、[ext] にはバンドル前のファイルの拡張子が入る
          // また、画像のデフォルトの出力先は output.path に指定したパス（このサンプルでは public）になる
          // そのため、このサンプルコードでは public/images に background.jpg などが出力される
          filename: 'images/[name][ext]',
          // 出力されるファイル（CSS など）に指定される画像のパス
          // 次のように指定すると、出力された CSS に記述されるパスは ./images/background.jpg のようになる
          publicPath: './',
        },
      },
    ],
  },
};
