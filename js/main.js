/**
 * アクティビティフィードのユーザ名をクリックした場合
 */
document.addEventListener("click", (event) => {
  const target = event.target;
  if (
    ["ScCoreLink-sc-16kq0mq-0", "tw-link"].every((e) =>
      target.classList.contains(e)
    )
  ) {
    // ユーザ名(ユーザID)からユーザIDのみを抽出する。ただし、ユーザ名のみの場合ユーザ名をユーザIDとして扱う
    const userName = target.textContent;
    const regex = /\(([^)]+)\)/;
    const match = userName.match(regex) ?? ["", userName];
    const userId = match[1];

    createButton(userId);
  }
});

/**
 * 自分のチャットのユーザ名をクリックした場合
 */
document.addEventListener("click", (event) => {
  const target = event.target;
  if (
    ["chat-author__display-name"].every((e) => target.classList.contains(e))
  ) {
    // ユーザ名に付与されてるカスタム属性からユーザIDを取得する
    const userName = target.getAttribute("data-a-user");
    const regex = /\(([^)]+)\)/;
    const match = userName.match(regex) ?? ["", userName];
    const userId = match[1];

    createButton(userId);
  }
});

/**
 * 自分のチャットのユーザIDをクリックした場合
 */
document.addEventListener("click", (event) => {
  const target = event.target;
  if (["chat-author__intl-login"].every((e) => target.classList.contains(e))) {
    // (ユーザID)からユーザIDのみを抽出する。
    const userName = target.textContent;
    const regex = /\(([^)]+)\)/;
    const match = userName.match(regex) ?? ["", userName];
    const userId = match[1];

    createButton(userId);
  }
});

/**
 *
 * @param {*} userId
 */
function createButton(userId) {
  chrome.storage.sync.get(["shoutOut", "so", "raid"], (items) => {
    if (JSON.stringify(items) === "{}") {
      // 初期値で動作
      items = {
        shoutOut: true,
        so: false,
        raid: true,
      };
    }
    const shoutOut = items.shoutOut;
    if (shoutOut) {
      // 空DIV挿入
      createEmptyDiv();

      // シャウトアウトボタンを生成する
      createShoutOut(userId);
    }

    const so = items.so;
    if (so) {
      // 空DIV挿入
      createEmptyDiv();

      // soボタンを生成する
      createSo(userId);
    }

    const raid = items.raid;
    if (raid) {
      // 空DIV挿入
      createEmptyDiv();

      // Raidボタンを生成する
      createRaid(userId);
    }
  });
}

/**
 * 空DIVを生成する
 */
function createEmptyDiv() {
  waitForElement(
    ".Layout-sc-1xcs6mc-0.gQGOcr",
    (elements) => {
      elements.forEach((element) => {
        const oyaWaku = document.createElement("div");
        oyaWaku.classList.add("Layout-sc-1xcs6mc-0", "gPVkpw");

        const koWaku01 = document.createElement("div");
        koWaku01.classList.add(
          "InjectLayout-sc-1i43xsx-0",
          "iDMNUO",
          "viewer-card-drag-cancel"
        );

        oyaWaku.appendChild(koWaku01);
        element.appendChild(oyaWaku);
      });
    },
    1000,
    2000
  );
}

/**
 * シャウトアウトボタンを生成する
 * @param {*} userId
 */
function createShoutOut(userId) {
  const shoutoutButton = document.createElement("button");
  shoutoutButton.textContent = "ShoutOut";
  shoutoutButton.classList.add(
    "ScCoreButton-sc-ocjdkq-0",
    "jgtOPo",
    "kJMgAB",
    "kaIUar"
  );
  shoutoutButton.addEventListener("click", () => {
    // クリップボードにシャウトアウトコマンドをコピーする
    navigator.clipboard.writeText(`/shoutout ${userId}`);
    const chat = document.querySelectorAll("[data-a-target='chat-input']")[0];
    chat.focus();
  });
  // シャウトアウトボタンをDOMに追加する適切な場所に挿入
  waitForElement(
    ".Layout-sc-1xcs6mc-0.gQGOcr",
    (elements) => {
      elements.forEach((element) => {
        const oyaWaku = document.createElement("div");
        oyaWaku.classList.add("Layout-sc-1xcs6mc-0");

        const koWaku01 = document.createElement("div");
        koWaku01.classList.add(
          "InjectLayout-sc-1i43xsx-0",
          "iDMNUO",
          "viewer-card-drag-cancel"
        );

        oyaWaku.appendChild(koWaku01);
        koWaku01.appendChild(shoutoutButton);
        element.appendChild(oyaWaku);
      });
    },
    1000,
    2000
  );
}

/**
 * SOボタンを生成する
 * @param {*} userId
 */
function createSo(userId) {
  const shoutoutButton = document.createElement("button");
  shoutoutButton.textContent = "!so";
  shoutoutButton.classList.add(
    "ScCoreButton-sc-ocjdkq-0",
    "jgtOPo",
    "kJMgAB",
    "kaIUar"
  );
  shoutoutButton.addEventListener("click", () => {
    // クリップボードにシャウトアウトコマンドをコピーする
    navigator.clipboard.writeText(`!so ${userId}`);
    const chat = document.querySelectorAll("[data-a-target='chat-input']")[0];
    chat.focus();
  });
  // シャウトアウトボタンをDOMに追加する適切な場所に挿入
  waitForElement(
    ".Layout-sc-1xcs6mc-0.gQGOcr",
    (elements) => {
      elements.forEach((element) => {
        const oyaWaku = document.createElement("div");
        oyaWaku.classList.add("Layout-sc-1xcs6mc-0");

        const koWaku01 = document.createElement("div");
        koWaku01.classList.add(
          "InjectLayout-sc-1i43xsx-0",
          "iDMNUO",
          "viewer-card-drag-cancel"
        );

        oyaWaku.appendChild(koWaku01);
        koWaku01.appendChild(shoutoutButton);
        element.appendChild(oyaWaku);
      });
    },
    1000,
    2000
  );
}

/**
 * Raidボタンを生成する
 * @param {*} userId
 */
function createRaid(userId) {
  const raidButton = document.createElement("button");
  raidButton.textContent = "RAID";
  raidButton.classList.add(
    "ScCoreButton-sc-ocjdkq-0",
    "jgtOPo",
    "kJMgAB",
    "kaIUar"
  );
  raidButton.addEventListener("click", () => {
    // クリップボードにシャウトアウトコマンドをコピーする
    navigator.clipboard.writeText(`/raid ${userId}`);
    const chat = document.querySelectorAll("[data-a-target='chat-input']")[0];
    chat.focus();
  });
  // シャウトアウトボタンをDOMに追加する適切な場所に挿入
  waitForElement(
    ".Layout-sc-1xcs6mc-0.gQGOcr",
    (elements) => {
      elements.forEach((element) => {
        const oyaWaku = document.createElement("div");
        oyaWaku.classList.add("Layout-sc-1xcs6mc-0");

        const koWaku01 = document.createElement("div");
        koWaku01.classList.add(
          "InjectLayout-sc-1i43xsx-0",
          "iDMNUO",
          "viewer-card-drag-cancel"
        );

        oyaWaku.appendChild(koWaku01);
        koWaku01.appendChild(raidButton);
        element.appendChild(oyaWaku);
      });
    },
    1000,
    2000
  );
}

/**
 * 要素が生成されるまで待つ
 * @param {*} selector
 * @param {*} callback
 * @param {*} intervalMs
 * @param {*} timeoutMs
 */
function waitForElement(selector, callback, intervalMs, timeoutMs) {
  const startTimeInMs = Date.now();
  findLoop();

  function findLoop() {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      callback(elements);
      return;
    } else {
      setTimeout(() => {
        const nowTimes = Date.now();
        if (timeoutMs && nowTimes - startTimeInMs > timeoutMs) {
          // console.log(nowTimes - startTimeInMs);
          return;
        }
        findLoop();
      }, intervalMs);
    }
  }
}
