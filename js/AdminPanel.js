document.querySelector("h2").style.marginBottom = '25px';
document.querySelector("h2").style.marginTop = '15px';


$(document).ready(function() {


	for (let key in localStorage){
		if (key.includes('@')){
			let name = JSON.parse(localStorage.getItem(key)).Name;
			let email = JSON.parse(localStorage.getItem(key)).Email;
			let password = JSON.parse(localStorage.getItem(key)).Password;

			let node = document.createElement("tr");
			let nodeName = document.createElement("td");
			let nodeEmail = document.createElement("td");
			let nodePassword = document.createElement("td");	
			let otmena = document.createElement("span");
			otmena.classList.add("closebtn");
			otmena.addEventListener(onclick, function(){
				this.parentElement.style.display='none';
			});
			otmena.innerHTML = "x";
			nodeName.innerHTML= name;
			nodeEmail.innerHTML = email;
			nodePassword.innerHTML = password;
			node.appendChild(nodeName);
			node.appendChild(nodeEmail);
			node.appendChild(nodePassword);
			node.appendChild(otmena);
			document.getElementById("tbody").appendChild(node);
		}
	}
});