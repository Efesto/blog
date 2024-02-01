var DARK_CLASS = 'dark';

function setSwitch(checked) {
  document.querySelectorAll('.dark-mode-toggle').forEach(ti => ti.checked = checked);
};

function toggleDarkMode() {
  var body = document.querySelector("body");
  if (body.classList.contains(DARK_CLASS)) {
    setLightMode()
  } else {
    setDarkMode()
  }
}

function setDarkMode() {
  localStorage.setItem('theme', 'dark');
  var body = document.querySelector("body");
  body.classList.add(DARK_CLASS);
  setSwitch(true)
}

function setLightMode() {
  localStorage.setItem('theme', 'light');
  var body = document.querySelector("body");
  body.classList.remove(DARK_CLASS);
  setSwitch(false)
}

function userPrefersDark() { window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }

var checked = false
function checkDark() {
  if (!checked) {
    var theme = localStorage.getItem('theme');
    if ((!theme && userPrefersDark()) || theme === 'dark') {
      setDarkMode()
    } else {
      setLightMode()
    }
    checked = true
  }
};

if (window.requestAnimationFrame) window.requestAnimationFrame(checkDark);
window.addEventListener('DOMContentLoaded', checkDark);