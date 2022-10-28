let p1 = document.getElementById("chef");

p1.addEventListener('mouseover', (e) => {
    console.log("Bonjour");
    p1.classList.add("rotate");
});