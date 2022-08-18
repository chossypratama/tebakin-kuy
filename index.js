let listPertanyaan = {
    penyanyi: [
        {
            pertanyaan: 'Penyanyi apa yang suka naik sepeda ?',
            jawaban: [
                { value: true, text: "Selena Gowes" },
                { value: false, text: "Ari Basso" },
                { value: false, text: "Iwan Fales" },
                { value: false, text: "Ariel YesAh" },
            ]
        },
        {
            pertanyaan: 'Penyanyi luar negeri yang susah menelen ?',
            jawaban: [
                { value: false, text: "Rihaha" },
                { value: true, text: "Ed Shered" },
                { value: false, text: "Demi Lovani" },
                { value: false, text: "Adelele" },
            ]
        },
        {
            pertanyaan: 'Penyanyi yang suka nyerah ?',
            jawaban: [
                { value: false, text: "Ariel YesAh" },
                { value: false, text: "Eminem" },
                { value: true, text: "Pasrah Ungu" },
                { value: false, text: "Agnes Monikah" },
            ]
        }
    ],
    hewan: [
        {
            pertanyaan: 'Hewan apa yang ga pernah salah ?', jawaban: [
                { value: true, text: "Kucing ga wrong" },
                { value: false, text: "Anjing" },
                { value: false, text: "Ayam Jantan" },
                { value: false, text: "Itik" },
            ]
        },
        {
            pertanyaan: 'Hewan apakah yang ga pernah berisik ?',
            jawaban: [
                { value: false, text: "G ajah" },
                { value: true, text: "Semute" },
                { value: false, text: "Ulaaar" },
                { value: false, text: "Lalat" },
            ]
        },
        {
            pertanyaan: 'Hewan apa yang gak sopan ?',
            jawaban: [
                { value: false, text: "Lebah" },
                { value: false, text: "Kucing Garong" },
                { value: true, text: "Kutu" },
                { value: false, text: "Anjing" },
            ]
        }
    ],
    buah: [
        {
            pertanyaan: 'Buah apa yang bisa buat nyimpen barang ?',
            jawaban: [
                { value: true, text: "Leci" },
                { value: false, text: "Apel" },
                { value: false, text: "Anggur" },
                { value: false, text: "Melon" },
            ]
        },
        {
            pertanyaan: 'Buah yang kalo di patahin bikin sakit ?',
            jawaban: [
                { value: false, text: "Duren" },
                { value: true, text: "Kelengkeng" },
                { value: false, text: "Semangka" },
                { value: false, text: "Jeruk" },
            ]
        },
        {
            pertanyaan: 'Buah apa yang suka gombal',
            jawaban: [
                { value: false, text: "Pisang" },
                { value: false, text: "Nanas" },
                { value: true, text: "Buahya" },
                { value: false, text: "Apel" },
            ]
        }
    ]
}



// let penyanyi diklik buka pertanyaan - pertanyaan dari listPertanyaan.penyanyi.pertanyaan
let uSoal = -1
let point = 0
let score = 0
let mulai = true

function start(kategori) {
    // let question = document.getElementById("question")
    // for (let i = 0; i < listPertanyaan[kategori].length; i++) {
    uSoal++
    const ktg = listPertanyaan[kategori][uSoal];
    // question.innerHTML = kategori.pertanyaan
    // ambil option id
    let question = document.getElementById("question")
    question.innerText = ktg.pertanyaan
    if (uSoal === ktg.pertanyaan) {
        uSoal = 'selesai'
    }

    console.log(question);
    let op1 = document.getElementById('op1')
    let op2 = document.getElementById('op2')
    let op3 = document.getElementById('op3')
    let op4 = document.getElementById('op4')
    // kasih option option
    op1.innerText = ktg.jawaban[0].text
    op2.innerText = ktg.jawaban[1].text
    op3.innerText = ktg.jawaban[2].text
    op4.innerText = ktg.jawaban[3].text
    // tentuin mana jawaban bener
    op1.value = ktg.jawaban[0].value
    op2.value = ktg.jawaban[1].value
    op3.value = ktg.jawaban[2].value
    op4.value = ktg.jawaban[3].value

    let userAnswer = ''
    // ketika dipilih 
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgreen";
        op2.style.backgroundColor = "lightblue";
        op3.style.backgroundColor = "lightblue";
        op4.style.backgroundColor = "lightblue";
        userAnswer = op1.value
    })
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightblue";
        op2.style.backgroundColor = "lightgreen";
        op3.style.backgroundColor = "lightblue";
        op4.style.backgroundColor = "lightblue";
        userAnswer = op2.value
    })
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightblue";
        op2.style.backgroundColor = "lightblue";
        op3.style.backgroundColor = "lightgreen";
        op4.style.backgroundColor = "lightblue";
        userAnswer = op3.value
    })
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightblue";
        op2.style.backgroundColor = "lightblue";
        op3.style.backgroundColor = "lightblue";
        op4.style.backgroundColor = "lightgreen";
        userAnswer = op4.value
    })

    if (userAnswer) {
        point++
    }

    score = point / ktg.length * 100
    if (uSoal === 'selesai') {
        mulai = false
        console.log(mulai);
    }
}


// next.addEventListener("click", () => {
//     start(kategori)
//     uSoal++
// })
if (!mulai) {
    next.innerHTML = "Selesai"
    next.addEventListener("click", () => {
        // tampilin score
        alert("tes")
    })
}
let next = document.getElementById("next")

if (uSoal === -1) {
    next.innerHTML = "Start"
}

if (mulai) {
    next.innerHTML = "Next"
    next.addEventListener("click", () => {
        start('penyanyi')
    })
}


// let penyanyi = document.getElementById('penyanyi')
// penyanyi.addEventListener("click", () => {
//     start("penyanyi")
// })

// let hewan = document.getElementById('hewan')
// hewan.addEventListener("click", () => {
//     start("hewan")
// })

// let buah = document.getElementById('buah')
// buah.addEventListener("click", () => {
//     start("buah")
// })


