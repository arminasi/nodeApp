const container = document.getElementById('container');
const users = document.getElementById('users');
const BASE_URL = 'http://localhost:3000';
const user = document.querySelector("#user");
const inputEl = document.querySelector("#userName")

users.addEventListener('click', () => {
   getUsers()
})

user.addEventListener("click", () => {
	getUser()
})

async function getUser() {
	if(!inputEl.value) {
		return;
	}
	else {
		const response =   await  fetch(`${BASE_URL}/user/${inputEl.value}`)
		const userData =   await response.json()
		drawUser(userData)
	}

}

function drawUser({name, id}) {
	container.innerHTML = "";
	const divId = document.createElement("div");
	const divName = document.createElement("div");

	divName.append(`Name : ${name}`)
	divId.append(`Id : ${id}`)

	container.append(divName, divId);
}

async function getUsers() {
  const response =   await  fetch(`${BASE_URL}/users`)
  const userData =   await response.json()
  drawUsers(userData)
}
function drawUsers(data) {
    container.innerHTML = '';
    data.forEach(({name}) => {
        const div = document.createElement('div');
        div.append(name);
        container.append(div)
    });
}


