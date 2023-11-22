let toggleTheme = () => {
    let css = document.getElementById('css-file');
    let darkModeIcon = document.getElementById('dark-mode-icon');
    css.href = css.href.includes('dark.css') ? 'style.css' : 'dark.css';
    darkModeIcon.classList.toggle('bi-moon-fill');
    darkModeIcon.classList.toggle('bi-sun-fill');
}