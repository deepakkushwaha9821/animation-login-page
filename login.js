document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const logo = document.querySelector('.logo');
    const formContainer = document.querySelector('.form-container');
    const photo = document.querySelector('.photo');
    const customerSection = document.querySelector('.customer');
    const enrollButton = document.querySelector('.enroll');
    const photoExpandContainer = document.querySelector('.photo-expand-container');

    
    logo.classList.add('centered');
    formContainer.classList.add('hide');
    photo.classList.add('hide');
    customerSection.style.visibility = 'hidden';
    enrollButton.style.visibility = 'hidden';
    
    
    photoExpandContainer.classList.add('show');

    
    setTimeout(() => {
        
        logo.classList.remove('centered');
        logo.classList.add('reset');

        
        formContainer.classList.remove('hide');
        formContainer.style.display = 'block';
        photo.classList.remove('hide');
        photo.style.display = 'flex';

        
        customerSection.style.visibility = 'visible';
        enrollButton.style.visibility = 'visible';

        
        photoExpandContainer.classList.remove('show');
    }, 7000); 
});
