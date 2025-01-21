const mobileMenu = document.querySelector(".mobile-menu-box")
const burgerMenu = document.querySelector(".burger-menu")
const burgerBtn = document.querySelector(".burger-btn")
const closeBtn = document.querySelector(".close-btn")

burgerMenu.addEventListener("click" ,() => {
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
        burgerBtn.classList.add("disappear")
        closeBtn.classList.remove("disappear")
    } else {
        mobileMenu.classList.add("hidden")
        burgerBtn.classList.remove("disappear")
        closeBtn.classList.add("disappear")
    }
})

