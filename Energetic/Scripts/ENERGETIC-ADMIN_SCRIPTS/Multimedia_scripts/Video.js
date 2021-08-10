const popup_add_1 = document.getElementById('popup_add_1')
const btn_add_1 = document.getElementById('btn_add_1')
const popup_show_1 = document.getElementById('popup_show_1')
const close_btn_1 = document.getElementById('close_btn_1')
const header = document.querySelector('header')
const content = document.getElementById('content')


function show(first_btn, edit_popup, show_popup, third_btn) {
    first_btn.onclick = () => {
        show_popup.style.display = "block";
        edit_popup.style.display = "block";
        content.style.filter = "blur(6px)";
        header.style.filter = "blur(6px)";
    }
    third_btn.onclick = () => {
        show_popup.style.display = "none";
        edit_popup.style.display = "none";
        content.style.filter = "unset";
        header.style.filter = "unset";
    }
}



show(btn_add_1, popup_add_1, popup_show_1, close_btn_1);
