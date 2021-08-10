const popup_add_1 = document.getElementById('popup_add_1')
const popup_edit_1 = document.getElementById('popup_edit_1')
const btn_add_1 = document.getElementById('btn_add_1')
const btn_edit_1 = document.getElementById('btn_edit_1')
const popup_show_1 = document.getElementById('popup_show_1')
const close_btn_1 = document.getElementById('close_btn_1')
const header = document.querySelector('header')
const content = document.getElementById('content')
const hidden_block = document.getElementById('hidden_block')
const photo_block = document.getElementById('photo_block')




photo_block.onmouseover = () => {
    hidden_block.style.display = "block";
}
photo_block.onmouseout = () => {
    hidden_block.style.display = "none";
}


