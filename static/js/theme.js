const themeToggleButton = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');
const headers = { Accept : 'application/json' }

function toggleDarkMode() {
    const htmlElement = document.documentElement;
    if (htmlElement.hasAttribute('data-mode')) {
        htmlElement.removeAttribute('data-mode')
        return false;
    } else {
        htmlElement.setAttribute('data-mode', 'dark');
        return true
    }
}

themeToggleButton.addEventListener('click', async () => {
    let currentTheme = toggleDarkMode();
    fetch(`/theme?value=${currentTheme}`, { headers: headers }).catch((error)=>{
        console.log(error)
    });
});