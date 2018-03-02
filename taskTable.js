var table;
function init(){
	table = document.getElementById("table");	
}

function addTask(){
	var taskDes = document.getElementById("taskDes").value;
	var taskDed = document.getElementById("taskDed").value;
	var taskCat = document.getElementById("taskCat").value;	
	var row = document.createElement("tr");
	var c1 = document.createElement("td");
	var c2 = document.createElement("td");
	var c3 = document.createElement("td");
	var c4 = document.createElement("INPUT");
	
	console.log(taskDes, taskDed, taskCat);
	
	c1.innerHTML = taskDes;
	c2.innerHTML = taskDed;
	c3.innerHTML = taskCat;
	c4.type = "checkbox";
	
	row.appendChild(c1);
	row.appendChild(c2);
	row.appendChild(c3);
	row.appendChild(c4);
	
	table.appendChild(row);
}