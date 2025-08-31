document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    // Links hover effect for cursor
    const hoverables = document.querySelectorAll('a, button, .nav-link');
    hoverables.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    


    // Get elements
const hamburger = document.getElementById('hamburgers');
const navLinks = document.querySelector('.nav-links');

// Toggle menu on hamburger click
hamburger.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent immediate close
  navLinks.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('show');
  }
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars on scroll
    // const skillBars = document.querySelectorAll('.skill-bar');
    // function animateSkillBars() {
    //     skillBars.forEach(bar => {
    //         const percent = bar.getAttribute('data-percent');
    //         const percentElement = bar.querySelector('.skill-percent');
    //         percentElement.style.width = percent;
    //     });
    // }

    // Use GSAP ScrollTrigger for skill bars animation
    // gsap.registerPlugin(ScrollTrigger);
    
    // skillBars.forEach(bar => {
    //     const percent = bar.getAttribute('data-percent');
    //     const percentElement = bar.querySelector('.skill-percent');
        
    //     gsap.fromTo(percentElement, {
    //         scrollTrigger: {
    //             trigger: bar,
    //             start: "top 80%",
    //             toggleActions: "play none none none"
    //         },
    //         width: 0,
    //         duration: 1.5,
    //         ease: "power3.out"
    //     });
    // });

gsap.registerPlugin(ScrollTrigger);

const skillBars = document.querySelectorAll('.skill-bar');

skillBars.forEach(bar => {
  const percent = parseInt(bar.getAttribute('data-percent'));
  const percentElement = bar.querySelector('.skill-percent');
  const textElement = bar.querySelector('.skill-text');

  // Function to animate the bar and percentage
  const animateBar = () => {
    const tl = gsap.timeline();

    // Animate bar width
    tl.fromTo(
      percentElement,
      { width: "0%" },
      { width: percent + "%", duration: 1.5, ease: "power3.out" }
    );

    // Animate number counting up
    tl.fromTo(
      { val: 0 },
      {
        val: percent,
        duration: 1.5,
        ease: "power3.out",
        onUpdate: function () {
          textElement.textContent = Math.round(this.targets()[0].val) + "%";
        }
      },
      0 // start at same time as bar width
    );
  };

  // Scroll trigger for first animation
  ScrollTrigger.create({
    trigger: bar,
    start: "top 80%",
    once: true, // only once on scroll
    onEnter: animateBar
  });

  // Hover to replay
  bar.addEventListener("mouseenter", animateBar);
});


    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});