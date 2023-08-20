window.onload=()=>{
    function buildClock(){
    console.log("hi");
const date =new Date(

);

console.log(date);
let hours =date.getHours();
hours =hours<10? "0"+hours :hours;
document.querySelector('clock hour').innerText =hours;

setTimeout(buildClock,1000)//to be reexecuted
}buildClock();}