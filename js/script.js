const input = document.querySelector('input');
const button = document.querySelector('button');
// const anchors = document.querySelector('a[href*="#"]');

let arr = [];

button.addEventListener('click', () => {
    let valInp = input.value;
    arr.push(valInp);
    console.log(arr);
    input.value = '';
})

// //Smooth movement
// for (let anchor of anchors) {
//     anchor.addEventListener('click', (event) => {
//         event.preventDefault();
//         const blockId = anchor.getAttribute('href');
//         document.querySelector('' + blockId).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }