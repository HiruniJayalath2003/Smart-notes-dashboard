
let notes = [
    {
        name: "Project Deadline",
        desc: "Finish web development project before friday",
        level: "Important"
    },
    {
        name: "React hooks",
        desc: "Most used react hooks-useState, udeRef, useEffect",
        level: "Study"
    }
];

const noteForm = document.querySelector(".note-form");
const addNote = document.querySelector(".note-list");

function renderNotes(noteList) {//create funtion

    const color = noteList.level === "Important" ? "bg-red-500 text-white border-red-500" :
        noteList.level === "Study" ? "bg-fuchsia-800 text-white border-fuchisa-800" :
            noteList.level === "Work" ? "bg-lime-500 border-lime-500" :
                "bg-cyan-500 text-white-border-blue-500";

    const taskHTML = `
    <div class="noteCard border rounded-md p-5 border-gray-400">
     <h1 class="heading text-[20px] text-blue-800 border-b-1">${noteList.name}</h1>
     <div class="descBar flex items-center justify-between py-5">
      <p class="noteDescription text-[17px] text-gray-800">${noteList.desc}</p>
      <p class="priority border rounded-[15px] px-1 py-0.5 ${color}">${noteList.level}</p>
      </div>
     </div>
    
    `;
    addNote.innerHTML += taskHTML;
}
notes.forEach(noteList => renderNotes(noteList));
noteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector(".title");
    const addDesc = document.querySelector(".add-desc");
    const addLevel = document.querySelector(".level");

    let newNotes = {
        name: title.value,
        desc: addDesc.value,
        level: addLevel.value
    }
    notes.push(newNotes);
    renderNotes(newNotes);
    title.value = '';
    addDesc.value = '';
    addLevel.value = '';

});


