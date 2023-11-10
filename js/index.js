const logIn = document.querySelector("button");
logIn.addEventListener('click', function (){
    const userName = document.querySelector("#username").value;
    const passWord = document.querySelector("#password").value;
    const btn = document.querySelector("button");
    const error = document.querySelector("p");

    error.textContent = ""
     
    const correctUsername = "Vina Lynn";
    const correctPassword = "vina";
  if (correctUsername !== userName && correctPassword !== passWord){
    error.textContent = "Username and password is incorrect. Please enter the correct one.";
    error.style.color = 'red';
  }else if (correctUsername !== userName || correctPassword !== passWord){
    error.textContent = "You have entered the incorrect password";
    error.style.color = "blue"
  }else {
    error.textContent = "you have entered the correct username and password";
    error.style.color = "pink"
  }
})