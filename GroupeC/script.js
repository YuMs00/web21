let p1 = document.getElementById("p1");

p1.addEventListener('mouseover', (event) => {
    console.log(event)
});

let p2 = document.getElementById("p2");

p2.addEventListener('mouseover', (event) => {
    console.log(event)
});

let p3 = document.getElementById("p3");

p3.addEventListener('mouseover', (event) => {
    console.log(event)
    console.log(p3.innerText)
});