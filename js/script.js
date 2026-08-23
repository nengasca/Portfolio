
document.addEventListener('DOMContentLoaded', function() {
  const footerYear = document.querySelector('.footer-content p');
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Maylojane Nengasca — built with <i class="fas fa-heart"></i>`;
  }
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      showFormMessage('Please fill in all fields.', 'error');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }

    showFormMessage(' Thank you, ' + name + '! Your message has been sent. ', 'success');
    
    setTimeout(() => {
      contactForm.reset();
    }, 2000);
  });
}

function showFormMessage(msg, type) {
  let messageBox = document.querySelector('.form-message');

  if (!messageBox) {
    messageBox = document.createElement('p');
    messageBox.className = 'form-message';
    const formNote = document.querySelector('.form-note');
    if (formNote) {
      formNote.parentNode.insertBefore(messageBox, formNote);
    } else {
      document.querySelector('.contact-form').appendChild(messageBox);
    }
  }

  messageBox.textContent = msg;
  messageBox.style.color = type === 'success' ? '#2e7d32' : '#d32f2f';
  messageBox.style.fontWeight = '600';
  messageBox.style.marginTop = '12px';
  messageBox.style.fontSize = '0.95rem';

  setTimeout(() => {
    messageBox.textContent = '';
  }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop();
  
  const activePage = currentPage === '' ? 'index.html' : currentPage;

  const navLinks = document.querySelectorAll('.profile-nav .nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === activePage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

console.log('%cWelcome to Maylojane\'s Portfolio!', 'font-size: 18px; font-weight: bold; color: #1e293b;');
console.log('%c using vanilla HTML, CSS, and JS.', 'font-size: 14px; color: #64748b;');