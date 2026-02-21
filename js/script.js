// ========== МОБІЛЬНЕ МЕНЮ ==========
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Змінюємо іконку меню (☰ -> ✕)
            if (nav.classList.contains('active')) {
                mobileMenuBtn.textContent = '✕';
            } else {
                mobileMenuBtn.textContent = '☰';
            }
        });
    }
    
    // Закриваємо меню при кліку на посилання (для мобільної версії)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.textContent = '☰';
            }
        });
    });
    
    // ========== АКОРДЕОНИ (розгортання блоків на сторінці послуг) ==========
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Знаходимо батьківський елемент .service-category
            const category = this.closest('.service-category');
            
            // Перемикаємо клас active
            category.classList.toggle('active');
        });
    });
    
    // ========== ВАЛІДАЦІЯ ФОРМИ КОНТАКТІВ ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Зупиняємо реальну відправку форми
            
            // Отримуємо значення полів
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Проста валідація
            if (name === '') {
                alert('Будь ласка, введіть ваше ім\'я');
                return;
            }
            
            if (phone === '') {
                alert('Будь ласка, введіть номер телефону');
                return;
            }
            
            if (message === '') {
                alert('Будь ласка, введіть повідомлення');
                return;
            }
            
            // Якщо все добре - показуємо повідомлення
            alert('Дякуємо! Ваше повідомлення відправлено. Ми зв\'яжемося з вами найближчим часом.');
            
            // Очищаємо форму
            contactForm.reset();
        });
    }
    
    // ========== ПЛАВНИЙ СКРОЛ ДО ЯКОРІВ (якщо будуть на сторінці) ==========
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========== ДОДАЄМО КЛАС ACTIVE ДЛЯ ПОТОЧНОГО ПУНКТУ МЕНЮ ==========
    function setActiveMenuItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setActiveMenuItem();

});
