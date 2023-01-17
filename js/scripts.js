// NEW FEATURES COMING SOON 
// JS RELATED

// /* ---------------------- Limit Animation to 1st Visit ---------------------- */
// window.addEventListener(('load'), () => {
//     if (document.querySelector('.introAnimation') !== null) {
//       window.sessionStorage.setItem('Heading', 'displayed');
//     }
//   })

//   if (window.sessionStorage.getItem('Heading')) {
//     document.querySelector('#heading').classList.remove('introAnimation')
//   }

/* ------------------------------ Active Modals ----------------------------- */
// Get the modal
const modal = document.querySelector('#myModal');
const mainContent = document.querySelector('.mainContent')
const projectPage = document.querySelector('.projectSection')
const techStack = document.querySelector('.techStack')
const projectList = document.querySelector('.projectsList')
const aboutMe = document.querySelector('.aboutME')
// Get the button that opens the modal
const btn = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
techStack.style.display = 'block'
aboutMe.style.display = 'block'
projectList.classList.remove('open')
}

btn2.onclick = function() {
techStack.style.display = 'none'
aboutMe.style.display = 'none'
projectList.classList.add('open')
mainContent.style.display = 'block'
}

btn3.onclick = function() {
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* ------------------------------ PREVIEW HOVER ----------------------------- */

const demos = document.querySelectorAll('video');

demos.forEach((demo) => {
  demo.addEventListener('mouseover', function (e) {
    this.play();
  });

  demo.addEventListener('mouseleave', function (e) {
    this.pause();
  });
});