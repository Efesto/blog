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
  setCookie('theme', 'dark');
  var body = document.querySelector("body");
  body.classList.add(DARK_CLASS);
  setSwitch(true)
}

function setLightMode() {
  setCookie('theme', 'light');
  var body = document.querySelector("body");
  body.classList.remove(DARK_CLASS);
  setSwitch(false)
}

function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
function setCookie(name, value, days) {
  if (window.cookieconsent && window.cookieconsent.hasConsented) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;SameSite=strict;expires=" + d.toGMTString();
  } else {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * -1);
    document.cookie = name + "=" + ";path=/;SameSite=strict;expires=" + d.toGMTString();
  }
}

function userPrefersDark() { window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }

var checked = false
function checkDark() {
  if (!checked) {
    var theme = getCookie('theme');
    if ((theme && userPrefersDark()) || theme === 'dark') {
      setDarkMode()
    } else {
      setLightMode()
    }
    checked = true
  }
};

if (window.requestAnimationFrame) window.requestAnimationFrame(checkDark);
window.addEventListener('DOMContentLoaded', checkDark);