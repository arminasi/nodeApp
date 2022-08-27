const container = document.getElementById('container');
const users = document.getElementById('users');
const BASE_URL = 'http://localhost:3000';
const user = document.querySelector("#user");
const inputEl = document.querySelector("#userInput");
const sortBtn = document.querySelector("#sortBtn");

sortBtn.addEventListener("click", () => {
	sortUsers();
})

users.addEventListener('click', () => {
   getUsers()
})

user.addEventListener("click", () => {
	getUser()
})

async function sortUsers() {
	const response = await fetch(`${BASE_URL}/user/sorted`)
	const userData = await response.json()
	drawUsers(userData)
}

async function getUser() {
	if(!inputEl.value) {
		return;
	}
	else {
		const response = await  fetch(`${BASE_URL}/user/${inputEl.value}`)
		const userData = await response.json()
		drawUsers(userData)
	}
}

async function getUsers() {
  const response = await  fetch(`${BASE_URL}/users`)
  const userData = await response.json()
  drawUsers(userData)
}

function drawUsers(data) {
    container.innerHTML = '';

    data.forEach(({name, age, socialMedia}, index) => {
			setTimeout(() => {
				const frameEl = document.createElement("div");
				frameEl.setAttribute("class", "userFrame");

				const nameEl = document.createElement("div");
				nameEl.setAttribute("class", "userName");
				nameEl.innerText = name;

				const ageEl = document.createElement("div");
				ageEl.setAttribute("class", "userAge");
				ageEl.innerText = age;
				
				const socialMediaEl = document.createElement("div");
				socialMediaEl.setAttribute("class", "userSocial");
				socialMediaEl.innerText = socialMedia;

        frameEl.append(nameEl, ageEl, socialMediaEl);
        container.append(frameEl)
			}, index * 24)
    });
}


