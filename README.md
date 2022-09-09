# react_training003

React を利用して、ポケモン図鑑のサンプルアプリを作成しました。  
表示するデータは pokeAPI から取得しています。

## 開発環境

- Windows 11 (21H2)
- WSL2 Ubuntu20.04
- React 18.2
- Node.js 16.17.0
- vite 3.1.0

## ローカルでの動作の手順

node が利用できる環境に当リポジトリをクローンします  
下記コマンドで依存パッケージをインストールします

```bash
$ npm install
```

下記コマンドで vite のローカルサーバを起動します

```bash
$ npm run dev

> react_trainig002@0.0.0 dev
> vite


  VITE v3.1.0  ready in 466 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

ターミナルに表示された localhost の URL にアクセスすると、トップページが表示さます

## 大変だったこと

TypeScript の型定義を理解しつつ、Api のレスポンスにどう型をつけるかを試行錯誤しました。  
最終的には、any 型をほぼ使わないところまで設定をして、すべてのファイルで警告が出ないようにすることができました。
Promise のメソッドが返してくるオブジェクトや、どこにジェネリクスを書いたら希望の内容に型を設定できるのか、調べたり実験したりしながら取り組みました。  
pokeApi が返してくるポケモンの個別のデータが詳細すぎて、全部に型定義していたら時間かかってしまいそうなので、とりあえずこのアプリケーションで利用する項目だけ定義しておきました。  
型で定義したもの以外にも実際のオブジェクトには入っているけど、TypeScript 上では定義されていないプロパティにアクセスしようとするとエラーになる...ということで、  
想定してないプロパティの仕様に制約かけられることを実感しました。

## 参考資料

以下の教材をベースにソースコードを作成しました  
【React アプリ開発】3 種類の React アプリケーションを構築して、React の理解をさらに深めるステップアップ講座:  
https://www.udemy.com/course/react-trello-development
