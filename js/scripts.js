// const links = document.querySelector(".upperNav-list li");

// links.forEach(li => {
//     li.addEventListener("click", () => {
//         resetLinks();
//         li.classList.add("active");
//     });
// });

// const sections = document.querySelectorAll(".section");
// const sectBtns = document.querySelectorAll(".controls");
// const sectBtn = document.querySelectorAll(".control");
// const allSections = document.querySelector(".main-content");

// // Section active class
// allSections.addEventListener("click", (event) => {

//     const id = event.target.dataset.id;
//     if(id){
//         // remove selected id from the other btns 
//         sectBtns.forEach((btn) => {
//             btn.classList.remove("active")
//         })
//         event.target.classList.add("active")

//         // hide other sections 
//         sections.forEach((section) => {
//             section.classList.remove("active")
//         })
//         const element = document.getElementById(id);
//         element.classList.add("active");

//     }
// });

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }