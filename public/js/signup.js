const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#exampleInputName1').value.trim();
    const email = document.querySelector('#exampleInputEmail2').value.trim();
    const password = document.querySelector('#exampleInputPassword2').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  