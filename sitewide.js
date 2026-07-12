// --- Theme ---
document.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        const theme = option.dataset.theme;

        if (theme === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });
});
