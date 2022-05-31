// ========== function for the payment popup =========
const paymentPopup = document.getElementById('payment-popup');

const openPaymentPopup = () => {
    paymentPopup.classList.add('open-payment-popup');
}

const closePaymentPopup = () => {
    paymentPopup.classList.remove('open-payment-popup');
}

// ========== function for the successsful popup =========

const confirmPopup = document.getElementById('fail-popup');

const opensuccPopup = () => {
    confirmPopup.classList.add('open-fail-popup');
    paymentPopup.classList.remove('open-payment-popup');
}

confirmPopup.addEventListener('click', () => {
    confirmPopup.classList.remove('open-fail-popup');
})

// ==================== menu button
    const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(navLink => {
            if (navLink.href === window.location.href) {
                navLink.setAttribute('aria-current', 'page');
            }
        })
