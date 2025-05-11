// Main JavaScript for Biohealth MVP

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            
            testimonials[index].classList.add('active');
        }
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Initialize cart icon
    updateCartIcon();
    
    // Add cart icon to navbar
    addCartIcon();
});

// Add cart icon to navigation
function addCartIcon() {
    const nav = document.querySelector('.nav-links');
    if (nav) {
        const cartLink = document.createElement('a');
        cartLink.href = '#';
        cartLink.id = 'cartIcon';
        cartLink.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span id="cartCount">0</span>
        `;
        nav.appendChild(cartLink);
    }
}

// Update cart icon with item count
function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('biohealthCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Show notification
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, duration);
}

// Close notification
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-notification')) {
        const notification = document.getElementById('healthNotification');
        notification.style.display = 'none';
    }
});

// Show health notification after 5 seconds
setTimeout(() => {
    const notification = document.getElementById('healthNotification');
    if (notification) {
        notification.style.display = 'block';
    }
}, 5000);