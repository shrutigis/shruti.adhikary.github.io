document.querySelector('.hamburger').addEventListener('click', () => {
    const navRight = document.querySelector('nav ul');
    if (navRight.style.display === 'flex') {
        navRight.style.display = 'none';
    } else {
        navRight.style.display = 'flex';
    }
});

document.getElementById('resume-link').addEventListener('click', function() {
    window.location.href = 'resume.pdf';
});
