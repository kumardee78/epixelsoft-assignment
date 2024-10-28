const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const registerationForm = document.getElementById("formSignup");

registerationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // Reset error messages
  document.getElementById("firstNameError").textContent = "";
  document.getElementById("lastNameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Validate First Name
  if (firstName.value.trim() === "") {
    document.getElementById("firstNameError").textContent =
      "First name is required";
    isValid = false;
  }

  // Validate Last Name
  if (lastName.value.trim() === "") {
    document.getElementById("lastNameError").textContent =
      "Last name is required";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    isValid = false;
  }

  // Validate Phone Number
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone.value)) {
    document.getElementById("phoneError").textContent =
      "Enter a valid 10-digit phone number";
    isValid = false;
  }

  // Validate Password
  if (password.value.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters";
    isValid = false;
  }

  // if all validation is passed
  if (isValid) {
    const formData = {
      first_name: firstName.value.trim(),
      last_name: lastName.value.trim(),
      email: email.value.trim(),
      phone_number: phone.value.trim(),
      password: password.value.trim(),
    };
    console.log(formData);
    alert("Form submitted successfully!");
  }
});
