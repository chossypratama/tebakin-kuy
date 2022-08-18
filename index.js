let listPertanyaan = [
    {
        pertanyaan: 'Penyanyi apa yang suka naik sepeda ?',
        jawaban: ["Selena Gowes", "Ari Basso", "Iwan Fales", "Ariel YesAh"],
        kunJaw: 0
    }, {
        pertanyaan: 'Penyanyi luar negeri yang susah menelen ?',
        jawaban: ["Rihaha", "Ed Shered", "Demi Lovani", "Adelele"],
        kunJaw: 1
    }, {
        pertanyaan: 'Buah apa yang suka gombal',
        jawaban: ["Pisang", "Nanas", "Buahya", "Apel"],
        kunJaw: 2
    }, {
        pertanyaan: 'Buah yang kalo di patahin bikin sakit ?',
        jawaban: ["Duren", "Kelengkeng", "Semangka", "Jeruk"],
        kunJaw: 1
    }, {
        pertanyaan: 'Buah apa yang bisa buat nyimpen barang ?',
        jawaban: ["Melon", "Apel", "Anggur", "Leci"],
        kunJaw: 3
    }, {
        pertanyaan: 'Hewan apa yang ga pernah salah ?',
        jawaban: ["Kucing ga wrong", "Anjing", "Ayam Jantan", "Itik",
        ],
        kunJaw: 0
    }, {
        pertanyaan: 'Hewan apakah yang ga pernah berisik ?',
        jawaban: ["G ajah", "Semute", "Ulaaar", "Lalat"],
        kunJaw: 1
    }, {
        pertanyaan: 'Hewan apa yang gak sopan ?',
        jawaban: ["Lebah", "Kucing Garong", "Kutu", "Anjing"],
        kunJaw: 2
    }, {
        pertanyaan: 'Penyanyi yang suka nyerah ?',
        jawaban: ["Ariel YesAh", "Eminem", "Agnes Monikah", "Pasrah Ungu"],
        kunJaw: 3
    }
]

let kunciJawaban = []

// ==================================================================

// SETUP
let pertanyaanKe = 0
let jawabanUser = []
let totalScore = 0
// document.addEventListener("DOMContentLoaded", function (event) {
//     pertanyaanPertama()
// })
let before = []

let mulai = document.getElementById('mulai')
mulai.addEventListener("click", () => {
    document.getElementById('opening').style.display = "none"
    document.getElementById('quiz').style.display = 'block'
})

function pertanyaan() {
    let urutan = Number(Math.floor(Math.random() * listPertanyaan.length))
    for (let i = 0; i < before.length; i++) {
        const el = before[i];
        if (urutan === el) {
            urutan = Number(Math.floor(Math.random() * listPertanyaan.length))
        }
    }
    before.push(urutan)

    let question = document.getElementById('question')

    question.innerText = listPertanyaan[urutan].pertanyaan
    kunciJawaban.push(listPertanyaan[urutan].kunJaw)
    let op0 = document.getElementById('opText0')
    let op1 = document.getElementById('opText1')
    let op2 = document.getElementById('opText2')
    let op3 = document.getElementById('opText3')

    op0.innerText = listPertanyaan[urutan].jawaban[0]
    op1.innerText = listPertanyaan[urutan].jawaban[1]
    op2.innerText = listPertanyaan[urutan].jawaban[2]
    op3.innerText = listPertanyaan[urutan].jawaban[3]
    console.log(kunciJawaban);
}


let button = document.getElementById('button')
console.log(pertanyaanKe);

button.addEventListener("click", () => {
    pertanyaanKe++

    jawaban()

    if (pertanyaanKe === 5) {
        stopKuis()
    }

    // resetPilihan()
    pertanyaan()
})

// function resetPilihan() {
//     document.querySelector(`input[name='pilihan']:checked`).checked = false
// }

function stopKuis() {
    checkScore()
    document.getElementById('quiz').style.display = "none"
    document.getElementById('closing').style.display = "block"
    let score = document.getElementById('score')
    if (totalScore === 100) {
        score.innerHTML = `Wah hebat, sempurna, kamu mendapatkan score: ${totalScore}`
    } else if (totalScore >= 80 && totalScore <= 99) {
        score.innerHTML = `GG gaming, kamu mendapatkan score: ${totalScore}`
    } else if (totalScore >= 60 && totalScore <= 79) {
        score.innerHTML = `Hmm.. lumayan lah, kamu mendapatkan score: ${totalScore}`
    } else if (totalScore >= 20 && totalScore <= 59) {
        score.innerHTML = `yaahhhh, ko bisa sih? Kamu dapat score: ${totalScore}`
    } else {
        score.innerHTML = `Lebih baik aku ngga kasih tau score kamu ya :(`
    }
    return
}

function jawaban() {
    let jawaban = document.querySelector(`input[name='pilihan']:checked`)

    if (jawaban != null) {
        jawabanUser.push(parseInt(jawaban.getAttribute('data-id')))
        console.log(jawabanUser);
    } else {
        jawabanUser.push(undefined)
    }
}


function checkScore() {
    for (let i = 0; i < jawabanUser.length; i++) {

        if (jawabanUser[i] === kunciJawaban[i]) {
            totalScore += 20
        }
    }
}
pertanyaan()