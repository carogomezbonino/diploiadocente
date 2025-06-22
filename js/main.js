/* Funcionalidad principal del sitio web */

document.addEventListener('DOMContentLoaded', function() {
    // Navegación móvil
    const navToggle = document.querySelector('.nav-toggle');
    const mainMenu = document.getElementById('main-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            navToggle.querySelector('i').classList.toggle('fa-bars');
            navToggle.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (en móvil)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainMenu.classList.remove('active');
                navToggle.querySelector('i').classList.add('fa-bars');
                navToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });
    
    // Acordeón para preguntas frecuentes
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Cerrar todos los demás acordeones
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                    item.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
                    item.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
                }
            });
            
            // Alternar el actual
            content.classList.toggle('active');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });
    
    // Animación de scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulación de envío de formulario
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            setTimeout(() => {
                // Mostrar mensaje de éxito
                const formContainer = this.parentElement;
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <h3>¡Gracias por tu interés!</h3>
                    <p>Hemos recibido tu consulta correctamente. Nos pondremos en contacto contigo a la brevedad.</p>
                `;
                
                // Reemplazar el formulario con el mensaje
                formContainer.replaceChild(successMessage, this);
            }, 1500);
        });
    }
    
    // Efecto de aparición al hacer scroll
    const revealElements = document.querySelectorAll('.section-title, .card, .info-container, .timeline-item');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Agregar clase para CSS
    revealElements.forEach(element => {
        element.classList.add('reveal-element');
    });
    
    // Verificar al cargar y al hacer scroll
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
    
    // Añadir estilos dinámicamente para las animaciones
    const style = document.createElement('style');
    style.textContent = `
        .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});
