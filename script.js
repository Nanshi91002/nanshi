// Smooth scroll to sections when clicking nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1); // Remove the '#'
    const targetSection = document.getElementById(targetId);
    
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark mode toggle (optional feature)
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

// Example: Attach toggle to a button (if you add one)
const darkModeButton = document.getElementById('darkModeBtn');
if (darkModeButton) {
  darkModeButton.addEventListener('click', toggleDarkMode);
}
