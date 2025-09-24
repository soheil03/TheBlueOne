(function () {
  try {
    var root = document.documentElement;
    var STORAGE_KEY = 'theblueone.dark';
    var isDark = localStorage.getItem(STORAGE_KEY) === '1';

    function applyMode(dark) {
      if (dark) {
        root.classList.add('dark-mode');
        root.setAttribute('data-blueone', 'dark');
        localStorage.setItem(STORAGE_KEY, '1');
      } else {
        root.classList.remove('dark-mode');
        root.removeAttribute('data-blueone');
        localStorage.setItem(STORAGE_KEY, '0');
      }
    }
    applyMode(isDark);

    // Add a toggle button into top-right nav if present
    function addToggle() {
      var navRight = document.querySelector('#root nav ul.right');
      if (!navRight || document.getElementById('blueone-toggle')) return;

      var li = document.createElement('li');
      var a = document.createElement('a');
      a.id = 'blueone-toggle';
      a.href = '#';
      a.title = isDark ? 'Switch to Light' : 'Switch to Dark';
      a.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      a.addEventListener('click', function (e) {
        e.preventDefault();
        isDark = !isDark;
        applyMode(isDark);
        a.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        a.title = isDark ? 'Switch to Light' : 'Switch to Dark';
      });
      li.appendChild(a);
      navRight.appendChild(li);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addToggle);
    } else {
      addToggle();
    }
  } catch (e) {
    // Fail silently; theme still works without toggle
  }
})();
