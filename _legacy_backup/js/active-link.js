document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));

        // If we are at the top of the page (hero section), no link might be active or the first one
        // But our sections start with #about. 
        // Let's check if index is valid
        if (index >= 0) {
            const id = sections[index].id;
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);

    // Also handle click to set active immediately
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
