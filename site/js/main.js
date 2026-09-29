// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = element.querySelector('.faq-icon');

    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.querySelector('.faq-question').classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('active');
            item.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        }
    });

    element.classList.toggle('active');
    answer.classList.toggle('active');
    icon.style.transform = element.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Tab functionality
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName('tab-content');
    const tabbuttons = document.getElementsByClassName('tab-button');

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }
    for (let i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove('active');
    }

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
}

// Mobile dropdown toggle
function toggleMobileDropdown(element) {
    const dropdown = element.parentElement;
    const arrow = element.querySelector('.dropdown-arrow');
    dropdown.classList.toggle('active');
    arrow.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.querySelectorAll('.progress-bar').forEach(bar => {
                setTimeout(() => bar.classList.add('animate'), 300);
            });
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Active nav item for the current page
(function () {
    const page = window.location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
    document.querySelectorAll('[data-page]').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-page') === page);
    });
})();

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileNav.classList.contains('active') && !mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Close desktop dropdown when clicking outside
document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        if (!dropdown.contains(e.target)) dropdown.classList.remove('active');
    });
});

// Keyboard / touch support for the Services dropdown
document.querySelectorAll('.dropdown > .nav-item').forEach(trigger => {
    trigger.addEventListener('click', () => trigger.parentElement.classList.toggle('active'));
});

// Contact form (Web3Forms, submitted without leaving the page)
document.querySelectorAll('form[data-web3forms]').forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const status = form.querySelector('.form-status');
        const label = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Sending...';
        status.className = 'form-status';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(form)
            });
            const data = await res.json();
            if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');
            status.textContent = "Message sent! We'll get back to you as soon as possible.";
            status.classList.add('show', 'ok');
            form.reset();
        } catch (err) {
            status.textContent = 'Your message could not be sent. Please email info@saveideasdigital.com or call (+61) 435 877 989.';
            status.classList.add('show', 'err');
        } finally {
            btn.disabled = false;
            btn.textContent = label;
        }
    });
});

// Footer year
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
