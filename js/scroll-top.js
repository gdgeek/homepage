
// Scroll to top when logo is clicked
document.querySelector('.logo').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
