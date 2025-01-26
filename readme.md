# ![TwitchCmdCopy README](./images/icon/icon48.png) TwitchCmdCopy

Twitch配信者が配信マネージャでシャウトアウト、レイドのコマンドをユーザプロフィールからクリップボードへコピーができるツールです。

## Dependency

* JavaScript(Vanilla JS)
* Chrome Extensions Manifest Version V3

## Setup

* 最新バージョンの[TwitchCmdCopy.zip](https://github.com/saraefcat/TwitchCmdCopy/releases) ダウンロードする。
![ダウンロード](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//download_item.png)

* ダウンロードしたTwitchCmdCopy.zipを好きな場所に解凍する。
  * お勧めは`C:\Users\ユーザ名\Documents\`の直下。
![インストール](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//install_Dir.png)

* Chromeの拡張機能画面(`chrome://extensions/`)を開く。
  * デベロッパーモードをONにする。
![デベロッパーモード](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//chrome-extensions-dev-on.png)
  * `パッケージされていない拡張機能を読み込む`からTwitchCmdCopyフォルダを指定する。
![拡張機能読み込み](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//chrome-extensions-load.png)
  * 正常に読み込めれると拡張機能が表示される。
![インストール後](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//chrome-extensions-run.png)

## Usage

* 配信マネージャーのアクティビティフィードまたはチャットに表示されているユーザをクリックしユーザプロフィールを表示させる。
  * アクティビティフィードの場合

  ![アクティビティフィード](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//use-activity.png)
  * チャットの場合

  ![チャット](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//use-chat.png)

* ユーザプロフィールの下部に元々表示されていた各種ボタンに新規に`ShoutOut`,`!so`,`RAID`のボタンが表示される。
  * ボタンをクリックすると`コマンド 名半角スペース ユーザID`がクリップボードにコピーされる。
![インストール](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//use-userProfile.png)
  * !soコマンドはnightbotなどで!soコマンドを作成している場合のみ有効なコマンドが発行される。デフォルトでは!soは非表示

* チャットのメッセージボックスにコピーされたコマンドをペースト(`Ctrl V`)し送信する。
![コマンド送信](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//use-shoutout.png)

* 拡張機能のオプションページにて使用するボタンの表示設定が可能。

  * Chromeの拡張機能画面(`chrome://extensions/`)を開き拡張機能の詳細ボタンを押す。
![コマンド送信](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//setting-options.png)
  * 詳細画面から`拡張機能のオプション`のボタンを押す。
![コマンド送信](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//setting-options-open.png)
  * 表示したいボタンを選択して最後にSaveボタンで保存する。
![コマンド送信](https://raw.githubusercontent.com/saraefcat/TwitchCmdCopy/orphan-doc//setting-options-save.png)


## License

This software is released under the MIT License, see LICENSE.

## Authors

SaraEF

## References

[chrome for developers](https://developer.chrome.com/docs/extensions)
