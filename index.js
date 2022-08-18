let listPertanyaan = {
    penyanyi: [
        {
            pertanyaan: 'pertanyaan1',
            jawaban: [
                { value: "benar", text: "jwb1" },
                { value: "salah", text: "jwb2" },
                { value: "salah", text: "jwb3" },
                { value: "salah", text: "jwb4" },
            ]
        },
        {
            pertanyaan: 'pertanyaan2',
            jawaban: [
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

// let penyanyi diklik buka pertanyaan - pertanyaan dari listPertanyaan.penyanyi.pertanyaan
function penyanyi() {
    let point
    for (let i = 0; i < listPertanyaan.penyanyi.length; i++) {
        point = 0
        const pertanyaan = listPertanyaan.penyanyi[i];
        if (value === 'benar') {
            point += 1
        }
    }
    let score = point / listPertanyaan.penyanyi[i]

}
// let hewan diklik buka pertanyaan - pertanyaan dari listPertanyaan.hewan.pertanyaan
function hewan() {
    let point
    for (let i = 0; i < listPertanyaan.hewan.length; i++) {
        point = 0
        const pertanyaan = listPertanyaan.hewan[i];
        if (value === 'benar') {
            point += 1
        }
    }
    let score = point / listPertanyaan.penyanyi[i]

}

// let buah diklik buka pertanyaan - pertanyaan dari listPertanyaan.buah.pertanyaan
function buah() {
    let point
    for (let i = 0; i < listPertanyaan.penyanyi.length; i++) {
        point = 0
        const pertanyaan = listPertanyaan.penyanyi[i];
        if (value === 'benar') {
            point += 1
        }
    }
    let score = point / listPertanyaan.penyanyi[i]

}