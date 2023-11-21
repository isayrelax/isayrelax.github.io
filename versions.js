const updateTypes = {
  "bug": "🐞",
  "modification": "👍",
  "feature": "⭐",
  "achievement": "🎉"
}

const versions = [
  {
    "date": "11.20.2023",  // use Date object eventually
    "versionNumber": "0.11.2.0",
    "updates": [
      {
        "updateType": updateTypes.bug,
        "text": "Fixed issue where time displayed an extra colon ':'."
      },
      {
        "updateType": updateTypes.feature,
        "text": "Eliminated horizontal scroll, along with additional white space on right of screen."
      },
      {
        "updateType": updateTypes.feature,
        "text": "A menu was added, where you can find the theme toggle button."
      }
    ]
  },
  {
    "date": "11.18.2023",  // use Date object eventually
    "versionNumber": "0.11.1.1",
    "updates": [
      {
        "updateType": updateTypes.achievement,
        "text": "You can now log that you've given drops. The entry is reset every day."
      },
      {
        "updateType": updateTypes.achievement,
        "text": "'Gave Drops' logger is now controlled by a checkbox instead of a button."
      }
    ]
  },
  {
    "date": "11.18.2023",  // use Date object eventually
    "versionNumber": "0.11.1.0",
    "updates": [
      {
        "updateType": updateTypes.achievement,
        "text": "You can now log that you've given drops. The entry is reset every day."
      },
    ]
  },
  {
    "date": "11.17.2023",  // use Date object eventually
    "versionNumber": "0.11.0.1",
    "updates": [
      {
        "updateType": updateTypes.bug,
        "text": "Fixed issue where excess padding and margin caused the time to be displayed in 2 lines."
      },
      {
        "updateType": updateTypes.bug,
        "text": "Fixed issue causing time to display the current 'seconds' as minutes when clicking 'Woke At' or 'Ate At'."
      },
      {
        "updateType": updateTypes.modification,
        "text": "'a.m.' and 'p.m.' is now displayed appropriately, as 'AM' and 'PM' in Safari when time is entered manually."
      },
      {
        "updateType": updateTypes.achievement,
        "text": "You will now receive version updates."
      },
    ]
  }
]

const latestVersionNumber = versions[0].versionNumber

let setVersion = () => {
  localStorage.setItem('versionNumber', latestVersionNumber);
}

const myModal = new bootstrap.Modal(document.getElementById('versionUpdateModal'))

if (localStorage.versionNumber != latestVersionNumber) {
  myModal.show();
}

let displayVersionUpdates = () => {
  const versionNumberSpan = document.getElementById('version-number');
  const versionUpdatesDiv = document.getElementById('version-updates');
  versionNumberSpan.innerHTML += latestVersionNumber
  for (update of versions[0].updates) {
    versionUpdatesDiv.innerHTML += `<div class="d-flex mb-2"><div class="d-flex me-2">${update.updateType}</div><div class="d-flex lh-sm"><small>${update.text}</small></div></div>`;
  }
}

displayVersionUpdates();
