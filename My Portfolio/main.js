function msg() {
  window.open("images/Netflix-clone-full-image.png", "_blank");


}
function msg1() {
  window.open("images/Microsoft-clone full-img.png", "_blank");

}
function msg3() {
  window.open("images/Shopify-full-image.png", "_blank");

}
function msg4() {
  window.open("images/UltraEdit-full-image.png", "_blank");

}
function msg5() {

  alert('Sorry This website is currently not accessible due to COPY RIGHT RESTRICTION Please click on PREVIEW AS IMAGE Button.');


}
function msg6(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      window.location.href = "https://microsoft-clone-najam.netlify.app/", "_blank";
    })
    .catch(error => {
      alert('Sorry This website is currently not accessible due to COPY RIGHT RESTRICTION Please click on PREVIEW AS IMAGE Button.');

    });
}
function msg7() {
  window.open("https://najam-ul-hassan-shopify.netlify.app/", "_blank");

}
function msg8() {
  window.open("https://najam-ul-hassan-ultraedit.netlify.app/", "_blank");

}



// For resume
const download = document.querySelector('#DOWNLOAD')
download.addEventListener('click', function () {
  window.opener('https://Resume/Najam-Ul-Hassan -CV.pdf', '_blank')
})


const right = document.querySelector('.right')
const mobileNav = document.querySelector('.mobile-nav')
mobileNav.addEventListener('click', function ToggleEvent() {
  right.classList.toggle("active-nav")

})
