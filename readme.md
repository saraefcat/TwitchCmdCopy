# ![TwitchCmdCopy README](./images/icon/icon48.png) TwitchCmdCopy

Twitch配信者が配信マネージャでシャウトアウト、レイドのコマンドをユーザプロフィールからクリップボードへコピーができるツールです。

## Dependency

JavaScript(Vanilla JS)
Chrome Extensions Manifest Version V3

## Setup

* TwitchCmdCopyをダウンロードする。
* Chromeの拡張機能画面(`chrome://extensions/`)からデベロッパーモードをONにし`パッケージされていない拡張機能を読み込む`からTwitchCmdCopyフォルダを指定する。

## Usage

* 配信マネージャーのアクティビティフィードまたはチャットに表示されているユーザをクリックしユーザプロフィールを表示させる。
* ユーザプロフィールの`ShoutOut`,`!so`,`RAID`の何れかのボタンをクリックする。この時点でクリップボードに`コマンド 名半角スペース ユーザID`がコピーされる。
  * !soコマンドはnightbotなどで!soコマンドを作成している場合のみコマンドが実行される。
* チャットのメッセージボックスにコピーされたコマンドをペーストし送信する。

## License

This software is released under the MIT License, see LICENSE.

## Authors

SaraEF

## References

[chrome for developers](https://developer.chrome.com/docs/extensions)
