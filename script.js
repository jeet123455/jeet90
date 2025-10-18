document.addEventlistener("DOMContentLoaded",()=>{
const loginForm = document.getElementByID("loginForm");
if(loginForm){
loginForm.addEventListner("submit",function(e){
	e.prevnetDefault();
	
	const name=document.getElementById("studentName").value;
	const id=document.getElementById("studentId").value;
	const teacher=document.getElementById("teacherName").value;
	const password=document.getElementById("exampassword").value;
	
	if(password==="exam123"){
		sessionStorage.setItem("studentName",name);
		window.loaction.href="exam.html";
	}else{
		alert("Invalid exam password!");
	});
}
const examForm=document.getElementById("examForm");
if(examForm){
	examForm.addEventListener("Submit",function(e){
		e.preventDefault();
		let score = 0;
		if(document.querySelector('input[name="q1"]:checked')?.value==="Paris")score++;
		if(document.querySelector('input[name="q2"]:checked')?.value==="javaScript")score++;
window.location.href='result.html?score=${score}';
	});
}
});