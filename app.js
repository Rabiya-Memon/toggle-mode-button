const toggleModeBtn = document.getElementById('toggleModeBtn');

let isDarkMode = false;

toggleModeBtn.addEventListener('click', () => {
    if (isDarkMode) {

        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        toggleModeBtn.textContent = 'Switch to Dark Mode';
    } else {
    
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        toggleModeBtn.textContent = 'Switch to Light Mode';
    }

    isDarkMode = !isDarkMode;
});
