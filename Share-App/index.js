const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


//modal open function
function openModal() {
    console.log('Modal is Open');
    modal.classList.add("active");
    overlay.classList.add("overlayactive");

};

//modal close function

function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");


};