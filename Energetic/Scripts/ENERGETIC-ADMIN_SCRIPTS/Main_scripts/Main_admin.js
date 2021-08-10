const popup_add_2 = document.getElementById('popup_add_2')
const popup_add_1 = document.getElementById('popup_add_1')
const btn_add_2 = document.getElementById('btn_add_2')
const btn_add_1 = document.getElementById('btn_add_1')
const btn_edit = document.getElementsByClassName('btn_edit_1')
const btn_edit_2 = document.getElementsByClassName('btn_edit_2')
const popup_show_2 = document.getElementById('popup_show_2')
const popup_show_1 = document.getElementById('popup_show_1')
const close_btn_2 = document.getElementById('close_btn_2')
const close_btn_1 = document.getElementById('close_btn_1')
const header = document.querySelector('header')
const content = document.getElementById('content')
const hidden_block = document.getElementById('hidden_block')
const photo_block = document.getElementById('photo_block')


function show(first_btn, edit_popup, show_popup, third_btn) {

    if (first_btn === btn_edit || first_btn === btn_edit_2) {

        for (let i = 0; i < first_btn.length; i++) {
            first_btn[i].onclick = () => {
                
                show_popup.style.display = "block";
                edit_popup.style.display = "block";
                content.style.filter = "blur(6px)";
                header.style.filter = "blur(6px)";
            }
        }
    }
    else {
        first_btn.onclick = () => {
            show_popup.style.display = "block";
            edit_popup.style.display = "block";
            content.style.filter = "blur(6px)";
            header.style.filter = "blur(6px)";
        }
    }
        third_btn.onclick = () => {
            show_popup.style.display = "none";
            edit_popup.style.display = "none";
            content.style.filter = "unset";
            header.style.filter = "unset";
        
    }
}

photo_block.onmouseover = () => {
    hidden_block.style.display = "block";
}
photo_block.onmouseout = () => {
    hidden_block.style.display = "none";
}



show(btn_add_1, popup_add_1, popup_show_1, close_btn_1);
show(btn_add_2, popup_add_2, popup_show_1, close_btn_1);
show(btn_edit, popup_edit_1, popup_show_2, close_btn_2);
show(btn_edit_2, popup_edit_2, popup_show_2, close_btn_2);
