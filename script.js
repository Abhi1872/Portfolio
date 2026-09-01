// =========================
// SMOOTH SCROLLING
// =========================

document.querySelectorAll('.sidebar-nav a').forEach(link => {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// =========================
// ACTIVE SIDEBAR LINK
// =========================

const sections = document.querySelectorAll('section');

const navLinks = document.querySelectorAll('.sidebar-nav a');


window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {

            currentSection = section.getAttribute('id');

        }

    });


    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {

            link.classList.add('active');

        }

    });

});

// =========================
// CERTIFICATE MODAL
// =========================

function openCertificate(image, title) {

    const modal = document.getElementById("certificateModal");

    const preview = document.getElementById("certificatePreview");

    const certificateTitle =
        document.getElementById("certificateTitle");


    preview.src = image;

    certificateTitle.textContent = title;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


// Close when clicking outside the certificate

document.getElementById("certificateModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeCertificate();
        }

    });


// Close with Escape key

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCertificate();
    }

});

// =========================
// CERTIFICATE PREVIEW
// =========================

function openCertificate(image, title) {

    const modal = document.getElementById("certificateModal");
    const preview = document.getElementById("certificatePreview");
    const certificateTitle = document.getElementById("certificateTitle");

    preview.src = image;
    certificateTitle.textContent = title;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    const modal = document.getElementById("certificateModal");

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


// Close when clicking outside

document.getElementById("certificateModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeCertificate();
    }

});


// Close with Escape

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCertificate();
    }

});