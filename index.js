themeSwitcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  // On page load
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }