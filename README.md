# 『webpack 実践入門 第２版』

[『webpack 実践入門 第２版』](https://www.amazon.co.jp/dp/B091YYGGRM)のサンプルコード集です。

## 3. webpack を利用してみる

- [chapter03/getting-started-webpack](chapter03/getting-started-webpack): webpack を最小構成で利用しているサンプルコード

## 4. ローダー

- [chapter04/01-using-babel-loader](chapter04/01-using-babel-loader): babel-loader を利用して ES2015+ をトランスパイルするサンプルコード
- [chapter04/02-using-sass-loader-css-loader-style-loader](chapter04/02-using-sass-loader-css-loader-style-loader): sass-loader と css-loader と style-loader を利用して、Sass ファイルをバンドルするサンプルコード
- [chapter04/03-using-post-css-loader](chapter04/03-using-post-css-loader): post-css-loader と Autoprefixer を利用して、ベンダープレフィックスを追加した CSS を出力するサンプルコード

## 5. プラグイン

- [chapter05/01-using-webpack-merge](chapter05/01-using-webpack-merge): webpack-merge を利用して、webpack の設定ファイルを開発用と本番用で分割しているサンプルコード
- [chapter05/02-using-mini-css-extract-plugin](chapter05/02-using-mini-css-extract-plugin): mini-css-extract-plugin を利用して、バンドルされる CSS を別の CSS ファイルに抽出しているサンプルコード
- [chapter05/03-using-webpack-bundle-analyzer](chapter05/03-using-webpack-bundle-analyzer): webpack-bundle-analyzer を利用してバンドルに含まれているモジュールや、それぞれのモジュールのファイルサイズを出力するサンプルコード

## 6. webpack の様々な機能を理解して使いこなす

- [chapter06/01-using-multiple-entry-points](chapter06/01-using-multiple-entry-points):　複数のエントリーポイントからバンドルを出力するサンプルコード
- [chapter06/02-using-watch-mode](chapter06/02-using-watch-mode): watch モードを有効にし、ファイルの変更を検知して再ビルドするサンプルコード
- [chapter06/03-inline-a-file-using-asset-modules](chapter06/03-inline-a-file-using-asset-modules): Asset Modules を利用して、画像を DataURL に変換してバンドルするサンプルコード
- [chapter06/04-emit-a-file-using-asset-modules](chapter06/04-emit-a-file-using-asset-modules): Asset Modules を利用して、画像を出力するサンプルコード
- [chapter06/05-inline-and-emit-a-file-using-asset-modules](chapter06/05-inline-and-emit-a-file-using-asset-modules): Asset Modules を利用して、ファイルサイズが小さい画像だけをバンドルし、一定以上のファイルサイズの画像はバンドルせずに出力するサンプルコード
- [chapter06/06-using-cleanup](chapter06/06-using-cleanup): output.path に指定したディレクトリ内のファイルを削除してから、バンドルされたファイルを出力するサンプルコード
- [chapter06/07-using-webpack-dev-server](chapter06/07-using-webpack-dev-server): 開発用サーバーである webpack-dev-server のライブリロード機能を利用したサンプルコード
- [chapter06/08-using-source-map](chapter06/08-using-source-map): ソースマップを生成するサンプルコード

## 7. 最適化

- [chapter07/01-using-tree-shaking](chapter07/01-using-tree-shaking): Tree Shaking を利用して不要なコードを削除するサンプルコード
- [chapter07/02-using-split-chunks-plugin](chapter07/02-using-split-chunks-plugin): SplitChunksPlugin を利用して共通利用されているチャンクを分割したファイルを出力し、全体のファイルサイズを削減するサンプルコード
