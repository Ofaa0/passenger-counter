// let count = 0;
// function increment() {
//   count++;
//   document.getElementById('counter').innerText = count;
//   document.getElementById('counter').style.color = 'red';
// }
// function reset() {
//   count = 0;
//   document.getElementById('counter').innerText = count;
// }
// function save() {
//   document.getElementById('timeline').innerText + count + "-";
// }
// ---------------------------------------------------------
// // 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl=document.getElementById('timeline')
// let countEl = document.getElementById("counter")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count;
// }

// function save() {
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     let temp=count + ' - ';
//     // 3. Render the variable in the saveEl using innerText
//     saveEl.textContent += temp;
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
//     count=0
//     countEl.textContent=0;
// }
let counter = document.getElementById('counter');
let history = document.getElementById('timeline');
let count = 0;

function increment(){
    count++;
    counter.textContent=count;
}
function save(){
    let temp = count + ' - ';
    timeline.textContent+=temp;
    count=0;
    counter.textContent=0;
}