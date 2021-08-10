const popup_add_1 = document.getElementById('popup_add_1')
const popup_edit_1 = document.getElementById('popup_edit_1')
const btn_add_1 = document.getElementById('btn_add_1')
const btn_edit = document.getElementsByClassName('btn_edit')
const popup_show_1 = document.getElementById('popup_show_1')
const close_btn_1 = document.getElementById('close_btn_1')
const header = document.querySelector('header')
const content = document.getElementById('content')
const btn_add_popup_1 = document.getElementById('btn_add_popup_1')

btn_add_popup_1.onclick = () => {
    document.location.href = "History_year"
}

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

for (let i = 0; i < btn_edit.length; i++) {
    btn_edit[i].onclick = () => {
        document.location.href = "History_year"
        content.style.filter = "blur(6px)";
        header.style.filter = "blur(6px)";
    }
}

show(btn_add_1, popup_add_1, popup_show_1, close_btn_1);
