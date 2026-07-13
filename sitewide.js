function startMenuOptions() {
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

    // --- Font Size ---
    document.querySelectorAll('.font-size-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const size = option.dataset.size;

            document.body.classList.remove("small-font", "medium-font", "large-font");
            document.body.classList.add(size + "-font");
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startMenuOptions);
} else {
    startMenuOptions();
}
