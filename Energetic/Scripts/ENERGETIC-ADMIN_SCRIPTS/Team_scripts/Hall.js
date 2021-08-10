const popup_add_1 = document.getElementById('popup_add_1')
const popup_edit_1 = document.getElementById('popup_edit_1')
const btn_add_1 = document.getElementById('btn_add_1')
const btn_edit = document.getElementsByClassName('btn_edit')
const popup_show_1 = document.getElementById('popup_show_1')
const close_btn_1 = document.getElementById('close_btn_1')
const header = document.querySelector('header')
const content = document.getElementById('content')
const hidden_block_1 = document.getElementById('hidden_block_1')
const hidden_block_2 = document.getElementById('hidden_block_2')
const hidden_block_for_PopupImage_Add = document.getElementById("hidden_block_for_PopupImage_Add")
const hidden_block_for_PopupImage_Edit = document.getElementById("hidden_block_for_PopupImage_Edit")
const photo_block_inAddPopup = document.getElementById("photo_block_inAddPopup")
const photo_block_inEditPopup = document.getElementById("photo_block_inEditPopup")


function show_recomendation(hidden_block_for_PopupImage, image_block) {
    image_block.onmouseover = () => {
        hidden_block_for_PopupImage.style.display = "block";
    }
    image_block.onmouseout = () => {
        hidden_block_for_PopupImage.style.display = "none";
    }

}


function show(first_btn, edit_popup, show_popup, third_btn) {

    if (first_btn === btn_edit) {

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



show(btn_add_1, popup_add_1, popup_show_1, close_btn_1);
show(btn_edit, popup_edit_1, popup_show_1, close_btn_1);
show_recomendation(hidden_block_for_PopupImage_Add, photo_block_inAddPopup);
show_recomendation(hidden_block_for_PopupImage_Edit, photo_block_inEditPopup);


