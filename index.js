let listPertanyaan = {
    penyanyi: [
        {
            pertanyaan: 'pertanyaan1', jawaban: [
                { value: "benar", text: "jwb1" },
                { value: "salah", text: "jwb2" },
                { value: "salah", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        },
        {
            pertanyaan: 'pertanyaan2', jawaban: [
                { value: "salah", text: "jwb1" },
                { value: "benar", text: "jwb2" },
                { value: "salah", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        },
        {
            pertanyaan: 'pertanyaan3', jawaban: [
                { value: "salah", text: "jwb1" },
                { value: "salah", text: "jwb2" },
                { value: "benar", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        }
    ],
    hewan: [
        {
            pertanyaan: 'pertanyaan1', jawaban: [
                { value: "benar", text: "jwb1" },
                { value: "salah", text: "jwb2" },
                { value: "salah", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        },
        {
            pertanyaan: 'pertanyaan2', jawaban: [
                { value: "salah", text: "jwb1" },
                { value: "benar", text: "jwb2" },
                { value: "salah", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        },
        {
            pertanyaan: 'pertanyaan3', jawaban: [
                { value: "salah", text: "jwb1" },
                { value: "salah", text: "jwb2" },
                { value: "benar", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        }
    ],
    buah: [
        {
            pertanyaan: 'pertanyaan1', jawaban: [
                { value: "benar", text: "jwb1" },
                { value: "salah", text: "jwb2" },
                { value: "salah", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        },
        {
            pertanyaan: 'pertanyaan2', jawaban: [
                { value: "salah", text: "jwb1" },
                { value: "benar", text: "jwb2" },
                { value: "salah", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        },
        {
            pertanyaan: 'pertanyaan3', jawaban: [
                { value: "salah", text: "jwb1" },
                { value: "salah", text: "jwb2" },
                { value: "benar", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        }
    ]
}

// selector
const daftarPertanyaan = document.querySelector('.list-question')

function renderDaftar(){
    let selectCategoryDaftar = document.getElementById('selectCategory');
    let categoryDaftar = selectCategoryDaftar.options[selectCategoryDaftar.selectedIndex].value;
    // console.log(categoryDaftar);

    let list = listPertanyaan[categoryDaftar]

    if(daftarPertanyaan){
        while (daftarPertanyaan.lastChild) {
            daftarPertanyaan.removeChild(daftarPertanyaan.lastChild);
        }
    }
    
    if(list){
        for (let i = 0; i < list.length; i++) {
            // li
            const question = document.createElement('li')
            question.classList.add('list-question-item')
            // div pertanyaan
            const newListQ = document.createElement('div')
            const newListQTxt = document.createElement('div')
            newListQTxt.innerText = `${list[i].pertanyaan}`
            newListQ.append(newListQTxt)
            newListQ.classList.add('list-question-text')    
            // btn disamping question
            const updateButton = document.createElement('button')
            updateButton.classList.add('update-btn')
            updateButton.innerText = `Update`
            const deleteButton = document.createElement('button')
            // deleteButton.addEventListener("click", () => deleteList(i, categoryDaftar));
            deleteButton.classList.add('delete-btn')
            deleteButton.innerText = `Hapus`
            newListQ.append(updateButton)
            newListQ.append(deleteButton)
            // div jawaban
            const newListA = document.createElement('ul')
            newListA.classList.add('list-question-answers')
            for (let j = 0; j < list[i].jawaban.length; j++) {
                const jawaban = list[i].jawaban[j];
                const newListAItem = document.createElement('li')
                newListAItem.innerText = `${jawaban.text}`
                newListAItem.classList.add('list-question-answer-item')
                newListA.appendChild(newListAItem)
            }
            question.appendChild(newListQ)
            question.appendChild(newListA)
            daftarPertanyaan.appendChild(question)
        }
    }
}

function updateList(){

}

function deleteList(index, categoryDaftar){
    // delete item
    listPertanyaan[categoryDaftar].splice(index, 1)
}