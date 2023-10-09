// getitng ids from html
var todoOrderList = document.getElementById('todoList');
var todoInputText = document.getElementById('todoText');
var todoInputTime = document.getElementById('todoTime');

// add list by enter button
todoInputText.addEventListener('keydown', function (e) {
	if (e.code == "Enter") {
		add()
	}
})

// add list function
function add() {

	if (todoInputText.value != "") {

		var userData = JSON.parse(localStorage.getItem('todo')) ?? [];

		userData.push({
			'text': (todoInputTime.value == '')? `${todoInputText.value}` : `${todoInputTime.value} ${todoInputText.value}`
			
		});
		console.log(todoInputTime.value)
		
		localStorage.setItem('todo', JSON.stringify(userData))
	}
	dataFromStorage();
	todoInputText.value = "";
	
}


// get data from localStorage and set in dom
var dataFromStorage = () => {

	var data = JSON.parse(localStorage.getItem('todo')) ?? [];
	finalData = "";

if(data.length == 0){
	finalData = `<h3 class="list-placeholder">Your to-do list is empty!<br>Get started by adding tasks.<h3>
	<p class="about-developer">Developed by A.S.WebDev.</p>`
}
else{

	data.forEach(function (item, index) {

		finalData += `<li>
		<input type="text" class="listInput" value="${item.text}" disabled>
		<button onclick="edit(${index},this)" class="editBtn"><i class="fa-regular fa-pen-to-square"></i></button>
		<button onclick="save(${index},this)" class="saveBtn"><i class="fa-regular fa-share-from-square"></i></button>
		<button onclick="delt(${index})" class="delBtn"><i class="fa-regular fa-trash-can"></i></button>
		</li>`
	})
}

	todoOrderList.innerHTML = finalData;
}

dataFromStorage();

// delete list function
function delt(i) {
	var userData = JSON.parse(localStorage.getItem('todo')) ?? [];

	userData.splice(i, 1);

	localStorage.setItem('todo', JSON.stringify(userData))
	dataFromStorage();
}

// edit list function
function edit(i,e){
e.style.display = 'none'
var saveBtn = document.getElementsByClassName('saveBtn')
saveBtn[i].style.display = 'block'
var listInput = document.getElementsByClassName('listInput')
listInput[i].removeAttribute('disabled')
listInput[i].style.borderBottom = '2px solid red'
listInput[i].style.borderRadius = '0 0 0 5px'
}

// save after edited function
function save(i,e){
	e.style.display = 'none'
	var editBtn = document.getElementsByClassName('editBtn')
	editBtn[i].style.display = 'block'

	var userData = JSON.parse(localStorage.getItem('todo')) ?? [];
	var listInput = document.getElementsByClassName('listInput')
	userData[i].text = listInput[i].value

	localStorage.setItem('todo', JSON.stringify(userData))
	dataFromStorage();
}