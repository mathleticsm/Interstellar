const config = {
  challenge: false, // Set to true for password protection
  users: {
    interstellar: "password",
  },
};

// Function to generate a random password
function generateRandomPassword(length = 10) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Function to authenticate and regenerate a user's password
function authenticateAndRegeneratePassword(username, providedPassword) {
  if (config.users[username] && config.users[username] === providedPassword) {
    // Password is correct
    const newPassword = generateRandomPassword();
    config.users[username] = newPassword; // Update to the new password
    return {
      success: true,
      message: "Authentication successful. Your new password is: " + newPassword,
    };
  } else {
    return {
      success: false,
      message: "Authentication failed. Incorrect username or password.",
    };
  }
}

// Example usage
const username = 'interstellar';
const providedPassword = 'password'; // Example password input from user

const result = authenticateAndRegeneratePassword(username, providedPassword);
console.log(result);

export default config;
