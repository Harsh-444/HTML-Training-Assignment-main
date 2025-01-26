const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const layout = document.querySelector(".layout");

// Toggle Sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    layout.classList.toggle("sidebar-hidden");
});


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const content = document.querySelector('.contents');

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed'); // Toggle sidebar class
        content.classList.toggle('collapsed'); // Adjust content class
    });
});