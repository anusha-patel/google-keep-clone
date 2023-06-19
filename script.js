const addButton = document.querySelector('#add');
const parent = document.getElementById('noteContainer');
// console.log(parent);

const updateLSData = () => {
    const textareaData = document.querySelectorAll('textarea');
    const notes = [];
    console.log(textareaData);

    textareaData.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (text = '') => {

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
        <div class="opperation">
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>

        <div class="main ${text ? '' : "hidden"}"> </div>
        <textarea  class= " textarea ${text ? 'hidden' : " "}" ></textarea> `;

    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);
    parent.appendChild(note);
    // it appends a node as the child of (parent = noteContainer)


    // document.body.appendChild(note)
    //  it appends a node as the last child of body




    // getting references
    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    console.log(editButton);
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    // deleting the note

    deleteButton.addEventListener('click', () => {
        note.remove();

        // // Retrieve the array from local storage
        // const storedArray = JSON.parse(localStorage.getItem('notes')) || [];

        // // Find the index of the item you want to delete
        // const itemIndexToDelete = storedArray.findIndex(item => item.id === 'itemKey');

        // // Remove the item from the array
        // if (itemIndexToDelete !== -1) {
        //     storedArray.splice(itemIndexToDelete, 1);
        // }

        // // Update the modified array in local storage
        // localStorage.setItem('notes', JSON.stringify(storedArray));

        // console.log('Item deleted from the array in local storage.');

    })

    // toggle using edit button

    textarea.value = text;
    mainDiv.innerHTML = text;

    editButton.addEventListener("click", () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');

    })

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;

        updateLSData();

    })


}

// getting data from localstorage

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) { notes.forEach((note) => addNewNote(note)) };

addButton.addEventListener('click', () => {
    addNewNote()
});