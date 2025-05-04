// 1. Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('🎉 Button clicked!');
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
    document.getElementById('hoverBox').style.backgroundColor = '#c8e6c9';
});
document.getElementById('hoverBox').addEventListener('mouseout', () => {
    document.getElementById('hoverBox').style.backgroundColor = '#e0e0e0';
});

document.addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

document.getElementById('secretBtn').addEventListener('dblclick', () => {
    alert('🕵️‍♂️ Secret double-click detected!');
});

// 2. Interactive Elements
document.getElementById('changeTextBtn').addEventListener('click', () => {
    const text = document.getElementById('textToChange');
    text.textContent = '✨ Text changed with JavaScript!';
});

// Tab functionality
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

// 3. Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    if (!username || !email || !password) {
        errorMsg.textContent = '⚠️ All fields are required.';
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        errorMsg.textContent = '❌ Invalid email format.';
        return;
    }

    if (password.length < 8) {
        errorMsg.textContent = '🔐 Password must be at least 8 characters.';
        return;
    }

    errorMsg.textContent = '';
    alert('✅ Form submitted successfully!');
});

// 🌓 Theme toggle with localStorage
const themeBtn = document.getElementById("toggleThemeBtn");

function applyTheme(theme) {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem("preferredTheme", theme);
}

// Load theme on page load
window.onload = () => {
    const storedTheme = localStorage.getItem("preferredTheme") || "light";
    applyTheme(storedTheme);
};

// Toggle theme button
themeBtn.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
});

// 🎯 Animate image on button click
const animateBtn = document.getElementById("animateImageBtn");
const image = document.getElementById("imageToAnimate");

animateBtn.addEventListener("click", () => {
    image.classList.remove("bounce"); // reset animation if already applied
    void image.offsetWidth; // force reflow
    image.classList.add("bounce");
});
