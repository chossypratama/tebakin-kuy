let listPertanyaan = [
  {
    pertanyaan: "Penyanyi apa yang suka naik sepeda ?",
    jawaban: ["Selena Gowes", "Ari Basso", "Iwan Fales", "Ariel YesAh"],
    keyJaw: 0
  },
  {
    pertanyaan: "Penyanyi luar negeri yang susah menelen ?",
    jawaban: ["Rihaha", "Ed Shered", "Demi Lovani", "Adelele"],
    keyJaw: 1
  },
  {
    pertanyaan: "Buah apa yang suka gombal",
    jawaban: ["Pisang", "Nanas", "Buahya", "Apel"],
    keyJaw: 2
  },
  {
    pertanyaan: "Buah yang kalo di patahin bikin sakit ?",
    jawaban: ["Duren", "Kelengkeng", "Semangka", "Jeruk"],
    keyJaw: 1
  },
  {
    pertanyaan: "Buah apa yang bisa buat nyimpen barang ?",
    jawaban: ["Leci", "Apel", "Anggur", "Melon"],
    keyJaw: 0
  },
  {
    pertanyaan: "Hewan apa yang ga pernah salah ?",
    jawaban: ["Kucing ga wrong", "Anjing", "Ayam Jantan", "Itik"],
    keyJaw: 0
  },
  {
    pertanyaan: "Hewan apakah yang ga pernah berisik ?",
    jawaban: ["G ajah", "Semute", "Ulaaar", "Lalat"],
    keyJaw: 1
  },
  {
    pertanyaan: "Hewan apa yang gak sopan ?",
    jawaban: ["Lebah", "Kucing Garong", "Kutu", "Anjing"],
    keyJaw: 2
  },
  {
    jawaban: ["Ariel YesAh", "Eminem", "Pasrah Ungu", "Agnes Monikah"],
    keyJaw: 2
  },
];

let listPertanyaanDummy = [  {
    pertanyaan: "Penyanyi apa yang suka naik sepeda ?",
    jawaban: ["Selena Gowes", "Ari Basso", "Iwan Fales", "Ariel YesAh"],
    keyJaw: 0
  },
  {
    pertanyaan: "Penyanyi luar negeri yang susah menelen ?",
    jawaban: ["Rihaha", "Ed Shered", "Demi Lovani", "Adelele"],
    keyJaw: 1
  },
  {
    pertanyaan: "Buah apa yang suka gombal",
    jawaban: ["Pisang", "Nanas", "Buahya", "Apel"],
    keyJaw: 2
  },
  {
    pertanyaan: "Buah yang kalo di patahin bikin sakit ?",
    jawaban: ["Duren", "Kelengkeng", "Semangka", "Jeruk"],
    keyJaw: 1
  },
  {
    pertanyaan: "Buah apa yang bisa buat nyimpen barang ?",
    jawaban: ["Leci", "Apel", "Anggur", "Melon"],
    keyJaw: 0
  },
  {
    pertanyaan: "Hewan apa yang ga pernah salah ?",
    jawaban: ["Kucing ga wrong", "Anjing", "Ayam Jantan", "Itik"],
    keyJaw: 0
  },
  {
    pertanyaan: "Hewan apakah yang ga pernah berisik ?",
    jawaban: ["G ajah", "Semute", "Ulaaar", "Lalat"],
    keyJaw: 1
  },
  {
    pertanyaan: "Hewan apa yang gak sopan ?",
    jawaban: ["Lebah", "Kucing Garong", "Kutu", "Anjing"],
    keyJaw: 2
  },
  {
    jawaban: ["Ariel YesAh", "Eminem", "Pasrah Ungu", "Agnes Monikah"],
    keyJaw: 2
  },];

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
        const keyJaw = list[i].keyJaw
        const newListAItem = document.createElement("li");
        if(jawaban === list[i].jawaban[keyJaw]){
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

  let keyJaw = undefined;
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      keyJaw = radio[i].value;
      break;
    }
  }

  const obj = {
    pertanyaan: question.value,
    jawaban,
    keyJaw,
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
