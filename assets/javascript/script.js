const dropArea = document.querySelector('.drag-files')

async function mouseEvents() {

// cursor events
dropArea.addEventListener('mouseenter', () => dropArea.classList.add('dragover'));

// drags events
dropArea.addEventListener('dragover', () => dropArea.classList.add('dragover'));
dropArea.addEventListener('dragleave', () => dropArea.classList.remove('dragover'));

}
mouseEvents();