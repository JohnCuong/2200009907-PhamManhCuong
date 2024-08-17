
document.addEventListener('DOMContentLoaded', () => {
    const aboutMeBtn = document.getElementById('aboutMeBtn');
    const photo = document.getElementById('photo');
    const contactMeBtn = document.getElementById('contactMeBtn');
    const contentDiv = document.getElementById('content');
    function clearContent() {
        contentDiv.innerHTML = '';
    }
    function displayContent(sectionId) {
        clearContent();
        const section = document.getElementById(sectionId);
        if (section) {
            contentDiv.innerHTML = section.innerHTML;
        }
    }
    aboutMeBtn.addEventListener('click', () => {
        displayContent('aboutMe');
        const audio = document.getElementById('testbgm');
    });
    photo.addEventListener('click', () => {
        displayContent('Photos');
    });
    contactMeBtn.addEventListener('click', () => {
        displayContent('contactMe');
    });
    function validateForm() {
        let isValid = true;
        const hoVaTen = document.getElementById('ho_va_ten').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (hoVaTen === '') {
            document.getElementById('ho_va_ten_error').textContent = 'Please enter your name';
            isValid = false;
        }
        if (email === '') {
            document.getElementById('email_error').textContent = 'Please enter your email';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById('email_error').textContent = 'Please enter a valid email';
            isValid = false;
        }
        if (message === '') {
            document.getElementById('message_error').textContent = 'Do not leave it blank please';
            isValid = false;
        }
        if (isValid) {
            document.getElementById('success_message').textContent = 'Thanks for giving me your message!';
        }
        return isValid;
    }
    document.querySelector('form').addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); 
        } else {
            document.getElementById('success_message').textContent = 'thanks for giving your message!';
        }
    });
    function confirmReset() {
        return confirm('Are you sure you want to reset?');
    }
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('form').addEventListener('submit', function(event) {
            if (!validateForm()) {
                event.preventDefault(); 
            }
        });
    
        // Add reset event listener
        document.querySelector('input[type="reset"]').addEventListener('click', function(event) {
            if (!confirmReset()) {
                event.preventDefault(); 
            }
        });
    });
})    
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('testbgm');
    audio.volume = 0.2;
    audio.muted = false;
    audio.play();
});