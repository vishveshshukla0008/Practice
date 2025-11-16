let toggleBtn = document.querySelector("#toggler");
let data = localStorage.getItem("theme");

if (data == null) data = 'light';

toggleBtn.addEventListener("click", toggleTheme);
document.body.setAttribute("data-theme", data)
function toggleTheme() {
    if (data == 'light') {
        localStorage.setItem('theme', 'dark');
        data = 'dark';
        document.body.setAttribute("data-theme", 'dark');
    } else {
        localStorage.setItem('theme', 'light');
        document.body.setAttribute("data-theme", 'light');
        data = 'light';
    }
}