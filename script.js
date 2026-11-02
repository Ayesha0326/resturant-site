document.addEventListener("DOMContentLoaded", () => {
    
    // 1. STICKY HEADER ON SCROLL
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // 2. AUTO HIGHLIGHT NAVBAR LINKS ON SCROLL
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav a");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // 150px ka offset taake thoda pehle hi link active ho jaye
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });

    // 3. RESERVATION POPUP MODAL FUNCTIONALITY
    const modal = document.getElementById("reservationModal");
    const closeBtn = document.querySelector(".close-btn");
    
    // Un sabhi buttons ko select karna jin par reservation likha hai
    const reserveButtons = document.querySelectorAll('a[href="#reservation"], .btn-primary[href="#reservation"]');

    // Modal open karne ke liye
    reserveButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Default jump link behavior ko rokne ke liye
            modal.classList.add("show");
        });
    });

    // Modal close karne ke liye (X button par click)
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Modal close karne ke liye (Bahar khali jagah par click)
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });

    // Form submit hone par message dikhana
    const bookingForm = document.getElementById("bookingForm");
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your reservation request has been received. We will contact you shortly.");
        bookingForm.reset();
        modal.classList.remove("show");
    });
});
