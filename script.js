browserIsSafari = navigator.userAgent.includes("Safari");

let getTime = () => {
    let time = new Date().toLocaleTimeString().split("");
    time.splice(-8, 3);
    return time.join("");
}

let getDate = () => {
    return new Date().toString().split(" ").slice(0,3).join(" ");
}

let setWokeTime = (timeInput) => {
    let time = timeInput || getTime();
    localStorage.setItem('wokeTime', time);
    document.getElementById('button-1-div').innerHTML = time;
}

let setAteTime = (timeInput) => {
    let time = timeInput || getTime();
    localStorage.setItem('ateTime', time);
    document.getElementById('button-2-div').innerHTML = time;
}

let setGaveDrops = () => {
    let date = getDate();
    localStorage.setItem('gaveDrops', date);
    document.getElementById('button-3-div').innerHTML = date;
    document.getElementById('gaveDropsCheckbox').checked = true;
}

let clearGaveDrops = () => {
    let gaveDropsDiv = document.getElementById('button-3-div');
    gaveDropsDiv.innerHTML = "";
    localStorage.setItem('gaveDrops', "");
    document.getElementById('gaveDropsCheckbox').checked = false;
}

let toggleGaveDrops = () => {
    let gaveDropsChecked = Boolean(localStorage['gaveDrops']);
    gaveDropsChecked ? clearGaveDrops() : setGaveDrops();
}

let setGaveDropsCheckbox = () => {
    gaveDrops ?
    document.getElementById('gaveDropsCheckbox').checked = true :
    document.getElementById('gaveDropsCheckbox').checked = false;
}

let clearDropsDateIfNewDay = () => {
    let gaveDrops = localStorage['gaveDrops'];
    if (gaveDrops != getDate()) {
        clearGaveDrops();
    }
}

let loadTime = () => {
    // use this when renaming 'woke' and 'ate' buttons to generic names:
    // ex. 'button-1', 'button-2', 'button-3', generated incrementally by user
}

let editEntry = (editButtonId) => {
    let id = editButtonId.split("-")[1];
    let entryInput = document.getElementById(`button-${id}-div`);
    entryInput.innerHTML = `<input type="time" name="new-entry-${id}" id="new-entry-${id}">`;
    toggleEditButtons(id);
}

let isWokeAt = (id) => {
    // use this until refactoring
    let entryButton = document.getElementById(`button-${id}`);
    return entryButton.textContent.includes("Woke");
}

let cancelNewEntry = (cancelButtonId) => {
    let id = cancelButtonId.split("-")[1];
    toggleEditButtons(id);
    let buttonDiv = document.getElementById(`button-${id}-div`);
        // this is terrible, break this out and refactor when removing 'woke' and 'ate'
        isWokeAt(id) ?
        buttonDiv.innerHTML = localStorage.getItem('wokeTime') :
        buttonDiv.innerHTML = localStorage.getItem('ateTime');
}

let submitNewEntry = (submitButtonId) => {
    let am = browserIsSafari ? "AM" : "a.m.";
    let pm = browserIsSafari ? "PM" : "p.m.";
    let id = submitButtonId.split("-")[1];
    let timeEntry = document.getElementById(`new-entry-${id}`).value;
    let hrsAs24 = Number(timeEntry.split(":")[0]);
    let mins = timeEntry.split(":")[1];
    let amPm = hrsAs24 >= 12 ? "p.m." : "a.m.";
    let hrs = hrsAs24 > 12 ? (hrsAs24 - 12).toString() : hrsAs24.toString();
    let time = `${hrs}:${mins} ${amPm}`;
    isWokeAt(id) ? setWokeTime(time) : setAteTime(time);
    toggleEditButtons(id);
}

let toggleEditButtons = (id) => {
    let editButtonGroup = document.getElementById(`edit-button-group-${id}`);
    editButtonGroup.querySelectorAll('button').forEach(button => {
        button.hidden ? button.hidden = false : button.hidden = true;
    })
}

const NO_ENTRY_MESSAGE = "No Entry";

let wokeTime = localStorage['wokeTime'] ? localStorage['wokeTime'] : NO_ENTRY_MESSAGE;
let ateTime = localStorage['ateTime'] ? localStorage['ateTime'] : NO_ENTRY_MESSAGE;
let gaveDrops = localStorage['gaveDrops'] ? localStorage['gaveDrops'] : "";

document.getElementById('button-1-div').innerHTML = wokeTime;
document.getElementById('button-2-div').innerHTML = ateTime;
document.getElementById('button-3-div').innerHTML = gaveDrops;
setGaveDropsCheckbox();
clearDropsDateIfNewDay();
