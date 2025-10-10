const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // check if user already exists
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find(
    (user) => user.email === email && user.password
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

  // clear form
  form.reset();

  // check password
  let confiempassword = document.getElementById("passwordvalue");
  let eyeclosed = document.getElementById("eyeclosed");
  eyeclosed.addEventListener("click", () => {
    if (confiempassword.type == "password") {
      confiempassword.type = "text";
    } else {
      confiempassword.type = "password";
    }
  });

  // 👇 Redirect after short delay
  setTimeout(() => {
    window.location.href = "index.html"; // change to your website URL
  }, 1500);
});
