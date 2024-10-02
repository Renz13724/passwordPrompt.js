let correctPassword = "RenzValdez12345";

let password;
do {
  password = prompt("Enter your password:");
} while (password !== correctPassword);

console.log("Access granted");
