"use strict";

// ! Variables

const btnGenerate = document.querySelector(".btn-generate");
const showPassword = document.querySelector(".show-password");
const shuffleIcon = document.querySelector(".icon");
const btnClear = document.querySelector(".btn-clear");
const inputABC = document.querySelector(".ABC");
const inputabc = document.querySelector(".abc");
const input123 = document.querySelector(".number");
const inputSymbol = document.querySelector(".symbol");

// ! Logic
const randomCharGenerator = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1)) + min;

const shuffle = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr.join("");
};
let finalPass = "";

// all
const passwordGenerator = function (len) {
  const passArr = [];
  const charPools = [];

  // Define character pools for each type
  const upperCase = { min: 65, max: 90 }; // A-Z
  const lowerCase = { min: 97, max: 122 }; // a-z
  const digits = { min: 48, max: 57 }; // 0-9
  const symbols = { min: 33, max: 47 }; // special symbols

  if (inputABC.checked) {
    passArr.push(String.fromCharCode(randomCharGenerator(65, 90)));
    // Add an uppercase letter
    charPools.push(upperCase);
  }
  if (inputabc.checked) {
    passArr.push(String.fromCharCode(randomCharGenerator(97, 122))); // Add a lowercase letter
    charPools.push(lowerCase);
  }
  if (input123.checked) {
    passArr.push(String.fromCharCode(randomCharGenerator(48, 57))); // Add a digit
    charPools.push(digits);
  }

  if (inputSymbol.checked) {
    passArr.push(String.fromCharCode(randomCharGenerator(33, 47))); // Add a special symbol
    charPools.push(symbols);
  }

  if (charPools.length === 0) {
    return `Please select at least one character type.`;
  }
  len = len - passArr.length;
  for (let i = 0; i < len; i++) {
    const randomPool = charPools[Math.floor(Math.random() * charPools.length)];
    passArr.push(
      String.fromCharCode(randomCharGenerator(randomPool.min, randomPool.max))
    );
  }

  return shuffle(passArr);
};

btnGenerate.addEventListener("click", function () {
  const passwordLength = document.querySelector(".password-length").value;
  if (!passwordLength) {
    showPassword.value = "Enter a valid password length.";
  } else if (Number(passwordLength) <= 5) {
    showPassword.value = "Length must be at least 6 characters.";
  } else {
    finalPass = passwordGenerator(Number(passwordLength));
    // Check if an error message was returned by the generator
    if (finalPass === "Please select at least one character type.") {
      showPassword.value = finalPass;
    } else {
      showPassword.value = finalPass;
    }
    // finalPass = "";
  }
});

shuffleIcon.addEventListener("click", function () {
  if (finalPass) {
    showPassword.value = shuffle([...finalPass]);
  } else {
    showPassword.value = "No password to shuffle!";
  }
});

btnClear.addEventListener("click", function () {
  document.querySelector(".password-length").value = "";
  showPassword.value = "";
});
