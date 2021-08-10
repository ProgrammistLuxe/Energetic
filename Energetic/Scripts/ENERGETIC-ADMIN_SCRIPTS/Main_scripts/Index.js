const button = document.getElementById('btn')
const input_1 = document.getElementById('input_1')
const input_2 = document.getElementById('input_2')
const wrong = document.getElementById('wrong')
const user_password = 12345
const user_login = 'Дима'
const string_password = String(user_password);
const eye = document.getElementById("eye")

function show() {

    if (input_2.type === "password") {
        input_2.type = "text";
        console.log(input_2.type)
    }
    else {
        input_2.type = "password";
        console.log(input_2.type)
    }
}

eye.onclick = show;

function link() {



    if (input_1.value === user_login && input_2.value === string_password) {
        console.log("yes")
        document.location.href = "Main_admin"
    }
    else if (input_1.value !== user_login || input_2.value !== string_password) {
        wrong.style.display = "block";
    }


}

button.onclick=link
