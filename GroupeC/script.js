let p1 = document.querySelector(".p1");

p1.addEventListener('mouseover', (e) => {
    console.log(e)
    p1.classList.add("rotate");
})
