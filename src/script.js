const mobileButton = document.getElementById('mobile-button'),
    mobileClose = document.getElementById('mobile-close'),
    mobileContent = document.getElementById('mobile-content')

if(mobileButton){
    mobileButton.addEventListener('click', () =>{
        mobileContent.classList.add('show-mobile')
    })
}

if(mobileClose){
    mobileClose.addEventListener('click', () => {
        mobileContent.classList.remove('show-mobile')
    })
}

// function transBar() {
//     const navbar = document.querySelector("#header .navigation-bar");
//     window.addEventListener("scroll", scrollTrans);
//     function scrollTrans() {
//         if (window.scrollY > 0) {
//             navbar.style.background = "transparent";
//         } else {
//             navbar.style.background = "white";
//         }
//     }
// }