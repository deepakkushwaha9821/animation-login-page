document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Move logo to center
    document.querySelector('.logo').classList.add('centered');

    // Hide form and photo
    document.querySelector('.form-container').classList.add('hide');
    document.querySelector('.photo').classList.add('hide');

    // Show and animate the new photo container
    const photoExpandContainer = document.querySelector('.photo-expand-container');
    photoExpandContainer.classList.add('show');

    // Wait for the photo container animation to finish, then handle showing the rest
    setTimeout(() => {
        // Reset the logo
        document.querySelector('.logo').classList.add('reset');

        // Show the form and photo again
        document.querySelector('.form-container').classList.remove('hide');
        document.querySelector('.form-container').style.display = 'block';
        document.querySelector('.photo').classList.remove('hide');
        document.querySelector('.photo').style.display = 'flex'; // Adjust based on your layout

        // Show customer container and enroll button
        document.querySelector('.customer').style.display = 'flex'; // Adjust display property
        document.querySelector('.enroll').style.display = 'inline-block'; // Adjust display property
    }, 6000); // Ensure this matches the duration of the animations
});
