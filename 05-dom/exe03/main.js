
    const toggleButton = document.querySelector('.btn');

      toggleButton.addEventListener('click', () => {
        
        document.body.classList.toggle('theme');
        
        if (document.body.classList.contains('theme')) {
          toggleButton.textContent = 'Switch to Light Mode';
        } else {
          toggleButton.textContent = 'Switch to Dark Mode';
        }