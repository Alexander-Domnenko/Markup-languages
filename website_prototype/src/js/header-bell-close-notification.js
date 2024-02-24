function swap1() {
	if (elem1.checked)
		change_display1.style.display = "none";
}
function swap2() {
	if (elem2.checked)
		change_display2.style.display = "none";
}
function swap3() {
	if (elem3.checked)
		change_display3.style.display = "none";
}
var elem1 = document.getElementById("header-notification-close-1");
var elem2 = document.getElementById("header-notification-close-2");
var elem3 = document.getElementById("header-notification-close-3");
var change_display1 = document.getElementById("header-bell-notification-1");
var change_display2 = document.getElementById("header-bell-notification-2");
var change_display3 = document.getElementById("header-bell-notification-3");
elem1.addEventListener("click",()=>{
	swap1()
})
elem2.addEventListener("click",()=>{
	swap2()
})
elem3.addEventListener("click",()=>{
	swap3()
})