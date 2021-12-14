let input = document.querySelector(".email-type");
let form = document.querySelector(".form");
let error = document.querySelector(".error");
let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.match(pattern)) {
        input.value = input.value;
        input.style.borderColor = "hsl(223, 87%, 63%)";

        setTimeout(() => {
            input.style.borderColor = "hsl(209, 33%, 12%)";
            input.value = "";
            input.placeholder = "Your email address...";
            error.classList.remove("show");
        }, 2000);
    } else {
        input.value = input.value;
        input.style.borderColor = "hsl(354, 100%, 66%)";
        error.style.color = "hsl(354, 100%, 66%)";
        error.textContent = "Please provide valid email address";
        error.classList.add("show");

        setTimeout(() => {
            input.style.borderColor = "hsl(209, 33%, 12%)";
            input.value = "";
            input.placeholder = "Your email address...";
            error.classList.remove("show");
        }, 2000);
    }
});