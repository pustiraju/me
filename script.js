const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const targetWidth = bar.parentElement.previousElementSibling.lastElementChild.textContent;
        bar.style.width = targetWidth;
    });
}

// Trigger skill bar animation when the skills section is in view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkillBars();
        observer.unobserve(skillsSection);
    }
}, { threshold: 0.5 });

observer.observe(skillsSection);


document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value

        }
        fetch("https://script.google.com/macros/s/AKfycbw3-X4oE-aoFUqFBXJyR33rTa7BB96q4LNXnXZy9kzdDK2dmJe3Bvt5OsezN_jBUmCdOA/exec", {
            method: "POST",
            header: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then((res) => {
                res.json()
            })
            .then((res) => {
                alert("submitted sucessfully")

            })
            .then(() => {
                document.getElementById("reset").addEventListener("click", () => {
                    document.getElementById("name").value = ""
                    document.getElementById("email").value = ""
                    document.getElementById("message").value = ""
                })
            })
    });
});



