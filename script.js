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

// Trigger skill bar animation when the skills sec
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
        fetch("https://script.google.com/macros/s/AKfycbzie8w3h2mJv03Z117ZoSlpg7qDHtFZTlAAd6JiUyuWxxLWZToFrReNhPN2rs8giguCXw/exec", {
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
        window.alert("Submitted Sucessfully 7076757473")

            })
            .then((res) => {
                window.location.reload()

            })

    });
});

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""
})








