document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const onlineId = document.getElementById('online-id').value;
    const password = document.getElementById('password').value;

   
    console.log('Online ID:', onlineId);
    console.log('Password:', password);

    
    alert(`Online ID: ${onlineId}\nPassword: ${password}`);
});
