const formElement = document.querySelector('.login-form');
const emailInput = formElement.querySelector('input[name="email"]');
const passwordInput = formElement.querySelector('input[name="password"]');

formElement.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in.');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log('Form data:', formData);
  formElement.reset(); 
});

