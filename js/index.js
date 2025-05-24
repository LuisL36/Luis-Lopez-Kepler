const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement('footer');
document.body.appendChild(footer);

const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Luis Lopez ${thisYear}`;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Git", "Python"]

const skillSection = document.getElementById('Skills');
const skillsList = skillSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.forms.leave_message;

messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const nameValue    = event.target.usersName.value;
    const emailValue   = event.target.usersEmail.value;
    const messageValue = event.target.usersMessage.value;

    console.log(nameValue, emailValue, messageValue);

    const messageSection = document.getElementById("messages");
    const messageList    = messageSection.querySelector("ul");
    const newMessage     = document.createElement("li");

    newMessage.innerHTML = `
    <a href="mailto:${emailValue}">${nameValue}</a>
    <span>: ${messageValue}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();

    if(messageList.children.length === 0) {
        messageSection.style.display = "none";
    }
});

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

messageSection.style.display = "block";

event.target.reset();

});
