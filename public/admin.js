async function admin() {

const bookListResponse = await fetch('http://localhost:3001/listBooks');
const bookList = await bookListResponse.json();



const ul = document.createElement('ul')

bookList.forEach(book => {
    const title = book.title;

    const li = document.createElement('li')
    li.textContent = title;
   

    const textInput = document.createElement('input');
    textInput.type = 'text'
    textInput.value = book.quantity
    li.append(textInput)

    const button = document.createElement('input');
    button.type = 'button';
    button.value = 'Save';
    
     li.append(button); 

    button.addEventListener('click', async () => {
        const updateBookReponse = await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...book,
            quantity: textInput.value,
        })
        
    })
    })

    
    ul.append(li);
});

let root = document.querySelector('#root');
root.append(ul);

}

admin();