const editBtns = document.querySelectorAll('.edit-btn')
const editForms = document.querySelectorAll('.edit-form')
editBtns.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    editForms[i].style.display = editForms[i].style.display === "flex" ? "none" : "flex"
  })
})