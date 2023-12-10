// JavaScript for showing detailed doctor info
function showDetails(card) {
    const modal = document.getElementById("details-modal");
    modal.style.display = "block";
}

function closeDetailsModal() {
    const modal = document.getElementById("details-modal");
    modal.style.display = "none";
}
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})