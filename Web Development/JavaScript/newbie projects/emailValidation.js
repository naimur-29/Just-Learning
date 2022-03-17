let userInput = "nrahman966@gmail.com";

const isEmailValid = (email) => {
  if (email.includes("@")) {
    const [userName, domain] = email.split("@");
    if (userName.length > 0 && domain.length > 4 && domain.includes("."))
      return true;
  }
  return false;
};

console.log(isEmailValid(userInput));

// document.querySelector("hello").setAttribute("title", "Not valid!")
