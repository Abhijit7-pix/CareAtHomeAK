// function enlargeLogo() {
//     const logo = document.getElementById('logo');
//     logo.classList.toggle('enlarged');
// }
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const logo = document.getElementById('logo');
        logo.classList.add('visible');
    }, 3000); // Show after 3 seconds
});