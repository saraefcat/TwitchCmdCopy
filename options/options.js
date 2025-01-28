// Saves options to chrome.storage
const saveOptions = () => {
  const shoutOut = document.getElementById("shoutOut");
  const so = document.getElementById("so");
  const raid = document.getElementById("raid");

  chrome.storage.sync.set(
    {
      shoutOut: shoutOut.checked,
      so: so.checked,
      raid: raid.checked,
    },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById("status");

      const message = chrome.i18n.getMessage("optionSaveMessage");
      status.textContent = message;

      setTimeout(() => {
        status.textContent = "";
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(["shoutOut", "so", "raid"], (items) => {
    document.getElementById("shoutOut").checked = items.shoutOut || true;
    document.getElementById("so").checked = items.so || false;
    document.getElementById("raid").checked = items.raid || true;
  });
};

const i18nRun = () => {
  const title = chrome.i18n.getMessage("optionTile");
  const save = chrome.i18n.getMessage("optionSave");
  document.getElementById("title").innerHTML = title;
  document.getElementById("save").innerHTML = save;
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.addEventListener("DOMContentLoaded", i18nRun);
document.getElementById("save").addEventListener("click", saveOptions);
