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

// selector
const daftarPertanyaan = document.querySelector(".list-question");
const menu = document.querySelector("#menu");
const daftar = document.querySelector("#daftar");
const quiz = document.querySelector("#quiz");
const tambah = document.querySelector("#tambah");

function renderMenu() {
  menu.style.display = "block";
  daftar.style.display = "none";
  quiz.style.display = "none";
  tambah.style.display = "none";
  update.style.display = "none";
}

function renderDaftar(show) {
  if (show) {
    menu.style.display = "none";
    daftar.style.display = "block";
    quiz.style.display = "none";
    tambah.style.display = "none";
    update.style.display = "none";
  }

  let list = listPertanyaan;

  if (daftarPertanyaan) {
    while (daftarPertanyaan.lastChild) {
      daftarPertanyaan.removeChild(daftarPertanyaan.lastChild);
    }
  }

  if (list) {
    for (let i = 0; i < list.length; i++) {
      // li
      const question = document.createElement("li");
      question.classList.add("list-question-item");
      // div pertanyaan
      const newListQ = document.createElement("div");
      const newListQTxt = document.createElement("div");
      newListQTxt.innerText = `${list[i].pertanyaan}`;
      newListQ.append(newListQTxt);
      newListQ.classList.add("list-question-text");
      // btn disamping question
      const updateButton = document.createElement("button");
      updateButton.classList.add("update-btn");
      updateButton.innerText = `Update`;
      const deleteButton = document.createElement("button");
      deleteButton.setAttribute("id", "btn-delete");
      deleteButton.addEventListener("click", function () {
        deleteList(i);
      });
      deleteButton.classList.add("delete-btn");
      deleteButton.innerText = `Hapus`;
      newListQ.append(updateButton);
      newListQ.append(deleteButton);

      // div jawaban
      const newListA = document.createElement("ul");
      newListA.classList.add("list-question-answers");
      for (let j = 0; j < list[i].jawaban.length; j++) {
        const jawaban = list[i].jawaban[j];
        const kunJaw = list[i].kunJaw
        const newListAItem = document.createElement("li");
        if(jawaban === list[i].jawaban[kunJaw]){
            newListAItem.innerHTML = `<b class="list-question-kj">${jawaban}</b>`;
        }else{
            newListAItem.innerHTML = `${jawaban}`;
        }
        newListAItem.classList.add("list-question-answer-item");
        newListA.appendChild(newListAItem);
      }
      question.appendChild(newListQ);
      question.appendChild(newListA);
      daftarPertanyaan.appendChild(question);
    }
  }
}

function renderTambah() {
  tambah.style.display = "block";
}

function tambahList() {
  const question = document.querySelector("#questionForm");
  const answers = document.getElementsByName("answerForm");
  const radio = document.getElementsByName("answerRadio");

  if (!question.value) {
    alert("Tolong isi dulu pertanyaannya!");
    return;
  }

  let jawaban = [];
  for (const iter of answers) {
    if (!iter.value) {
      alert("Isi semua jawaban dulu cuy!");
      return;
    } else {
      jawaban.push(iter.value);
    }
  }

  let kunJaw = undefined;
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      kunJaw = radio[i].value;
      break;
    }
  }

  const obj = {
    pertanyaan: question.value,
    jawaban,
    kunJaw,
  };

  listPertanyaan.push(obj);
  renderDaftar();
  tambah.style.display = "none";
  
  question.value = ""
  answers.forEach(a => a.value = "")
  radio[0].checked = true
}

function updateList() {
    
}

function deleteList(index) {
  // delete item
  listPertanyaan.splice(index, 1);
  renderDaftar();
}
