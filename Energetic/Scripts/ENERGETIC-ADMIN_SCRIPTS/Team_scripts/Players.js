const popup_add_1 = document.getElementById('popup_add_1')
const popup_edit_1 = document.getElementById('popup_edit_1')
const btn_add_1 = document.getElementById('btn_add_1')
const btn_edit = document.getElementsByClassName('btn_edit')
const btn_submit = document.getElementsByClassName('submit')
const btn_check = document.getElementsByClassName('btn_check_status')
const popup_show_1 = document.getElementById('popup_show_1')
const close_btn_1 = document.getElementById('close_btn_1')
const header = document.querySelector('header')
const content = document.getElementById('content')
const hidden_block_inAddPopup_1 = document.getElementById('hidden_block_inAddPopup_1')
const hidden_block_inAddPopup_2 = document.getElementById('hidden_block_inAddPopup_2')
const text_block_1 = document.getElementById('text_block_1')
const text_block_2 = document.getElementById('text_block_2')
const all = document.getElementById('all')
const hidden_block_for_PopupImage_Add = document.getElementById("hidden_block_for_PopupImage_Add")
const hidden_block_for_PopupImage_Edit = document.getElementById("hidden_block_for_PopupImage_Edit")
const photo_block_inAddPopup = document.getElementById("photo_block_inAddPopup")
const photo_block_inEditPopup = document.getElementById("photo_block_inEditPopup")
let status_check = []


function show_recomendation(hidden_block_for_PopupImage, image_block) {
    image_block.onmouseover = () => {
        hidden_block_for_PopupImage.style.display = "block";
    }
    image_block.onmouseout = () => {
        hidden_block_for_PopupImage.style.display = "none";
    }

}




function show(first_btn, edit_popup, show_popup, third_btn,hidden_block,text_block) {

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



text_block_1.onclick = () => {
    hidden_block_inAddPopup_1.style.display = 'block'
    console.log('good')
}
text_block_2.onclick = () => {
    hidden_block_inAddPopup_2.style.display = 'block'
    console.log('good')
}


hidden_block_inAddPopup_1.addEventListener("click", (event) => {
    let ul_element = event.target.closest('li')
    if (!ul_element) return
    text_block_1.innerHTML = ul_element.innerHTML

})

window.onclick = event => {

    if (event.target === text_block_1 || event.target === hidden_block_inAddPopup_1) {
        hidden_block_inAddPopup_1.style.display = 'block';

    }
    else {
        hidden_block_inAddPopup_1.style.display = 'none';

    }
}


hidden_block_inAddPopup_2.addEventListener("click", (event) => {
    let ul_element = event.target.closest('li')
    if (!ul_element) return
    text_block_2.innerHTML = ul_element.innerHTML

})

window.onclick = event => {

    if (event.target === text_block_2 || event.target === hidden_block_inAddPopup_2) {
        hidden_block_inAddPopup_2.style.display = 'block';

    }
    else {
        hidden_block_inAddPopup_2.style.display = 'none';

    }
}


for (let i = 0; i < btn_check.length; i++) {
    let status = {
        check: btn_check[i],
        state: false
    }
    status_check.push(status)
}


function check_status(first_btn, obj) {
    for (let i = 0; i < obj.length; i++) {
        first_btn[i].onclick = () => {
            obj[i].state = !obj[i].state;
            if (obj[i].state === true) {
                obj[i].check.style.backgroundColor = "#FFFFFF";
                obj[i].check.style.borderColor = "#14056C";
            }
            else {
                obj[i].check.style.backgroundColor = "#14056C";
            }
        }
    }
}

show(btn_add_1, popup_add_1, popup_show_1, close_btn_1, hidden_block_inAddPopup_1, text_block_1);
show(btn_edit, popup_edit_1, popup_show_1, close_btn_1, hidden_block_inAddPopup_2, text_block_2);
check_status(btn_submit, status_check);
show_recomendation(hidden_block_for_PopupImage_Add, photo_block_inAddPopup);
show_recomendation(hidden_block_for_PopupImage_Edit, photo_block_inEditPopup);

