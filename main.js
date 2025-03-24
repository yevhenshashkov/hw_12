const participantsList = document.querySelector("#partisipantsList");
const addNewInput = document.querySelector("#new-part");
const addNewButton = document.querySelector("#addNew");


function addParticipant(name) {
    const li = document.createElement("li");
    li.innerHTML = `${name} <button class="deleteBtn">x</button>`;
    participantsList.appendChild(li);
}


const participantArr = [
    "Bob",
    "Alice",
    "Nick"];
participantArr.forEach(addParticipant);


participantsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
    }
});

addNewButton.addEventListener("click", () => {
    const name = addNewInput.value.trim();

    if (name) {
        addParticipant(name);
        addNewInput.value = "";
    }
});
