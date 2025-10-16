const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const accoutArea = document.getElementById("accountBox");



// const registerLink = document.getElementById('register');
// registerLink.addEventListener('click', () => {
//    const name = document.getElementById('name').value;
//    const email = document.getElementById('email').value;
//    const password = document.getElementById('password').value;
//    const confirmPassword = document.getElementById('Confirmpassword').value;
//    const successMsg = document.querySelector('.successful-registration');
//    const notSame = document.querySelector('.pswd-not-same');
   
//    // Password match check
//    if (password !== confirmPassword) {
//      notSame.textContent = 'PASSWORDS MUST BE THE SAME';
//      notSame.style.color = 'white';
//      notSame.style.display = 'block';
//      setTimeout(() => (notSame.style.display = 'none'), 2000);
//      return;
//    }
   
//    // Empty field check
//    if (!name || !email || !password) {
//      successMsg.textContent = 'Please fill all fields';
//      successMsg.style.color = 'white';
//      successMsg.style.display = 'block';
//      setTimeout(() => (successMsg.style.display = 'none'), 2000);
//      return;
//    }
   
//    //Get existing users or create empty array
//    let users = JSON.parse(localStorage.getItem('users')) || [];
   
//    //Check if user already exists by email
//    const existingUser = users.find(user => user.email === email);
//    if (existingUser) {
//      successMsg.textContent = 'Email already registered!';
//      successMsg.style.color = 'white';
//      successMsg.style.display = 'block';
//      setTimeout(() => (successMsg.style.display = 'none'), 5000);
//      window.location.href = 'register.html';
//    }
   
//    //Add new user
//    const newUser = { name, email, password };
//    users.push(newUser);
   
//    //Save back to localStorage
//    localStorage.setItem('users', JSON.stringify(users));
   
//    // Success message
//    successMsg.textContent = 'Registration Successful! Redirecting...';
//    successMsg.style.color = 'white';
//    successMsg.style.display = 'block';
   
//    setTimeout(() => {
//      //Redirect after 2 seconds
//      window.location.href = 'index.html';
//    }, 8000);

//  }) 


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // check if user already exists
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    message.textContent = "User already exists. Please log in.";
    return;
  }


  // save new user
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.textContent = "Registration successful! You can now log in.";

  // Save logged in user
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  // clear form
  form.reset();

     // check if password and confirm password are same
  if(passwordtoggle.value !== Confirmpassword.value){
    alert("Password did not match");
    return;
  }

  // 👇 Redirect after short delay
  setTimeout(() => {
    window.location.href = "index.html"; // change to your website URL
    showUser(name);
  }, 1500);
});


// Function to show username and logout button
/*function showUser(name) {
  accoutArea.textContent = localStorage.getItem('users')

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    location.reload();
  });
}*/

// eye check password
let passwordtoggle = document.getElementById("password");
let eyeclosed = document.getElementById("eyeicon");
let eyeopen = document.getElementById("eyeopen");
const Confirmpassword = document.getElementById("Confirmpassword");
let eyeclosed2 = document.getElementById("eyeicon2");
let eyeopen2 = document.getElementById("eyeopen2");


  eyeclosed.onclick = function(){
    if(passwordtoggle.type == "password"){
      passwordtoggle.type = "text"
      eyeopen.style.display = "block"
      eyeclosed.style.display = "none"
    }else{
      password.type = "password"
      eyeopen.style.display = "none"
      eyeclosed.style.display = "block"
    }
  }

   eyeopen.onclick = function(){
    if(passwordtoggle.type == "password"){
      passwordtoggle.type = "text"
      eyeopen.style.display = "block"
      eyeclosed.style.display = "none"
    }else{
      passwordtoggle.type = "password"
      eyeopen.style.display = "none"
      eyeclosed.style.display = "block"
    }
  }


  // check confirm password
   eyeclosed2.onclick = function(){
    if(Confirmpassword.type == "password"){
      Confirmpassword.type = "text"
      eyeopen2.style.display = "block"
      eyeclosed2.style.display = "none"
    }else{
      Confirmpassword.type = "password"
      eyeopen2.style.display = "none"
      eyeclosed2.style.display = "block"
    }
  }

   eyeopen2.onclick = function(){
    if(Confirmpassword.type == "password"){
      Confirmpassword.type = "text"
      eyeopen2.style.display = "block"
      eyeclosed2.style.display = "none"
    }else{
      Confirmpassword.type = "password"
      eyeopen2.style.display = "none"
      eyeclosed2.style.display = "block"
    }
  }


 