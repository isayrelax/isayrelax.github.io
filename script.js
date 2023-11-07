let toggleTheme = () => {
    let css = document.getElementById('css-file');
    let darkModeIcon = document.getElementById('dark-mode-icon');
    css.href = css.href.includes('dark.css') ? 'style.css' : 'dark.css';
    darkModeIcon.classList.toggle('bi-moon-fill');
    darkModeIcon.classList.toggle('bi-sun-fill');
}

let getTime = () => {
    return new Date().toLocaleTimeString();
}

let setWokeTime = () => {
    let time = getTime();
    localStorage.setItem('wokeTime', time);
    document.getElementById('woke-time-div').innerHTML = time;
}

let setAteTime = () => {
    let time = getTime();
    localStorage.setItem('ateTime', time);
    document.getElementById('ate-time-div').innerHTML = time;
}

const NO_ENTRY_MESSAGE = "No Entry"

let wokeTime = localStorage['wokeTime'] ? localStorage['wokeTime'] : NO_ENTRY_MESSAGE;
let ateTime = localStorage['ateTime'] ? localStorage['ateTime'] : NO_ENTRY_MESSAGE;

document.getElementById('woke-time-div').innerHTML = wokeTime;
document.getElementById('ate-time-div').innerHTML = ateTime;