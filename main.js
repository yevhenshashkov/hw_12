const participantsList = document.querySelector("#tasksList");
const addNewInput = document.querySelector("#new-task");
const addNewButton = document.querySelector("#addNew");

function addNew(name) {
    const li = document.createElement("li");
    li.innerHTML = `${name} <button class="deleteBtn">x</button>`;
    participantsList.appendChild(li);
}

const participantArr = [git push origin main
    "Навчитися запам'ятовувати код JS",
    "Зробити ДЗ",
    "Погуглити додаткову інформацію"
];

participantArr.forEach(addNew); 

participantsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
    }
});

addNewButton.addEventListener("click", () => {
    const name = addNewInput.value.trim();
    if (name) {
        addNew(name);
        addNewInput.value = ""; 
    }
});
