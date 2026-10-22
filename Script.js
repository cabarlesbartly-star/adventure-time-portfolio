// ==========================================
// DAY AND NIGHT MODE TOGGLE
// ==========================================
function toggleTheme() {
    document.body.classList.toggle('night-mode');
}

// ==========================================
// FORM SUBMISSION FEEDBACK
// ==========================================
function handleContact(event) {
    event.preventDefault();
    alert("Mathematical! Your message has been sent via carrier pigeon across Ooo!");
    event.target.reset();
}

// ==========================================
// ABOUT ME PAPER MODAL
// ==========================================
function openAboutModal() {
    const modal = document.getElementById("aboutModal");
    modal.classList.remove("closing");
    modal.classList.add("active");
}

function closeAboutModal(event) {
    event.stopPropagation();
    const modal = document.getElementById("aboutModal");
    modal.classList.add("closing");

    setTimeout(() => {
        modal.classList.remove("active");
        modal.classList.remove("closing");
    }, 700);
}

function openHeroicModal() {
    alert("Mathematical! You discovered the Heroic Skills!");
}

