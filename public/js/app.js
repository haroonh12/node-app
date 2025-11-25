// Simple front-end utility script to mimic real-world behavior

// Show toast message (used after form submission)
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Attach events only if form exists
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (e) => {
            const title = form.querySelector("input[name='title']");
            const desc  = form.querySelector("textarea[name='description']");

            // Simple front-end validation
            if (!title.value.trim() || !desc.value.trim()) {
                e.preventDefault();
                showToast("All fields are required.");
                return;
            }

            // Loading effect to mimic production UX
            const btn = form.querySelector("button[type='submit']");
            btn.disabled = true;
            btn.innerText = "Submitting...";
        });
    }
});
