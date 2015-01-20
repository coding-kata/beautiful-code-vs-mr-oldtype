# jQuery refactoring with E2E Tests

- [美しいプログラムを書く(業務用Webアプリケーション保守編) - TIM Labs](http://labs.timedia.co.jp/2012/07/beautiful-code-vs-mr-oldtype.html "美しいプログラムを書く(業務用Webアプリケーション保守編) - TIM Labs")

のリファクタリングを適応する

## 目的

特定のバージョンでの変更点を簡単に確認できるよう、 
「Aの列のラジオボタンを選ぶと同じ行より一つ下にあるBの列のラジオボタンを自動で選ぶ」 という補助を実装する

![img](http://gyazo.com/b7e1593ef11326f5d6bf788d25e1bd6d.gif)

## テスト方法

[testium](https://github.com/groupon-testium/testium "testium")を使ったE2Eテストで状態が壊れてないかをチェックしてリファクタリングを行う。

- `npm start` で[nodeapps/http-server](https://github.com/nodeapps/http-server "nodeapps/http-server")を使ったローカルサーバを立てる
- [Mocha](http://mochajs.org/ "Mocha") + [testium](https://github.com/groupon-testium/testium "testium") + [power-assert](https://github.com/twada/power-assert "power-assert") でテストケースを書く
- リファクタリングを開始する
- `npm test` でテストを動かし確認する

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT