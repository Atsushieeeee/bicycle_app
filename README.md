# bicycle_app チャリトメ
## 近くの駐輪場検索アプリ　チャリトメとは
自転車を乗るのが好きで、いつも駐輪場を探すのが面倒だったのでボタン一つで探せるアプリを作りました。<br>
また、APIの勉強とAWSの勉強もしたかったのでシンプルながら色々と挑戦してみました。

## 使用言語
* Ruby 2.5.1

## 使用フレームワーク
* Rails 5.2.3

## 使用API
* Geocoding API / Maps JavaScript API / Places API 

## 使用インフラ
* AWS(EC2 / Route53 / Certificate Manager)

## アプリの使い方

![bicycle](https://user-images.githubusercontent.com/52344030/93353808-517a7d00-f877-11ea-9c9f-f1b5a09f4045.png)
<br>

現在地から探す を押すだけで現在位置を取得し周囲の駐輪場を探してくれます。

## こだわった点
* ボタン一つですぐに探せるように実装しました。

* すぐに探せるようにAWSのEC2サーバーを利用し速さにこだわりました。
