const Decrease = document.getElementById("DcrsButton");
const Reset = document.getElementById("ResetButton");
const Increase = document.getElementById("IncrsButton");
const Count = document.getElementById("Counterdisplay");

let Counter = 0;

Increase.onclick = function(){
    Counter++;
    Count.textContent = Counter;
}
Decrease.onclick = function(){
    Counter--;
    Count.textContent = Counter;
}
Reset.onclick = function(){
    Counter = 0;
    Count.textContent = Counter;
}