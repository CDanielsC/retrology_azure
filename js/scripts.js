

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = "Scroll to Top";
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Mobile Navigation Toggle
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.textContent = "Menu";
document.querySelector('.navbar').appendChild(navToggle);

const navMenu = document.querySelector('.navbar nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Image Lightbox
const images = document.querySelectorAll('.grid-image');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Dynamic Footer Year
const footer = document.querySelector('footer');
const yearSpan = document.createElement('span');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
footer.innerHTML += `<p>&copy; ${yearSpan.textContent} Retrology. All Rights Reserved.</p>`;

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Loading Spinner
const spinner = document.createElement('div');
spinner.classList.add('loading-spinner');
document.body.appendChild(spinner);

window.addEventListener('load', () => {
    spinner.style.display = 'none';
});


// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = "Dark Mode";
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


    // Scroll to Top Button
    let scrollToTopButton = document.querySelector('.scroll-to-top');
    if (!scrollToTopButton) {
        scrollToTopButton = document.createElement('button');
        scrollToTopButton.textContent = "Scroll to Top";
        scrollToTopButton.classList.add('scroll-to-top');
        document.body.appendChild(scrollToTopButton);

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
    }
