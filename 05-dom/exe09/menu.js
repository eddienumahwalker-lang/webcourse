 
const email = document.querySelector(".email");
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const button = document.querySelector(".btn");
const titleName = document.querySelector(".title-name");

button.addEventListener("click", () => {

    
    const user = {
        email: email.value,
        firstname: firstname.value,
        lastname: lastname.value
    };

    titleName.textContent = user.firstname;

    sessionStorage.setItem("user", JSON.stringify(user));
});
