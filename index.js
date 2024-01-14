document.addEventListener('DOMContentLoaded', (event) => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const themeIcon = themeSwitcher.querySelector('i');
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    themeIcon.classList.toggle('fa-sun', currentTheme === 'dark-theme');
    themeIcon.classList.toggle('fa-moon', currentTheme !== 'dark-theme');
  }

  themeSwitcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    let theme = 'light-theme';
    if (document.body.classList.contains('dark-theme')) {
      theme = 'dark-theme';
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    localStorage.setItem('theme', theme);
  });
});