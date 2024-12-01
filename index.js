const submitButton = document.querySelector(".submitbutton");

submitButton.addEventListener("click", validateForm);

function validateForm(e) {
  const emailInput = document.querySelector("#email");
  const country = document.querySelector("#country");
  const pcodeCodeInput = document.querySelector("#postalcode");
  const passwordInput = document.querySelector("#password");
  const passwordConfirmInput = document.querySelector("#passwordconfirm");
  const errorField = document.querySelector("#errorfield");
  let countryChoice = country.value;

  const postalCodes = {
    de: ["[0-9]{5}", "German postcodes must be exactly five digits (12345)"],
    uk: ["[a-z]{6}", "UK postcodes must be exactly six letters (abcdef)"],
    us: [
      "[a-z]{2}[0-9]{5}",
      "US postal codes must have two letters and 5 digits (ab12345)",
    ],
  };

  const pcodeConstraint = new RegExp(postalCodes[countryChoice][0], "");  

  if (!email.validity.valid) {
    e.preventDefault();
    errorField.className = "errorfieldactive";
    errorField.textContent = "Email address must be valid";
  } else if (!pcodeConstraint.test(pcodeCodeInput.value)) {
    e.preventDefault();
    errorField.className = "errorfieldactive";
    errorField.textContent = postalCodes[countryChoice][1];
  } else if (!passwordInput.validity.valid) {
    e.preventDefault();
    errorField.className = "errorfieldactive";
    errorField.textContent = "Password must contain at least 8 characters";
  } else if (passwordInput.value != passwordConfirmInput.value) {
    e.preventDefault();
    errorField.className = "errorfieldactive";
    errorField.textContent = "Passwords do not match";
  } else {
    e.preventDefault();
    errorField.className = "errorfield";
    errorField.textContent = "";
    alert("All fields succesfully validated, form has been submitted");
  }
}
