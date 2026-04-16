const btnConvertUpper = document.querySelector('.btn-uppercase');
btnConvertUpper.addEventListener('click', () => {
    const inputArea = document.querySelector('#text-input').value;
    const outputArea = document.querySelector('#text-output');
    const teksBesar = inputArea.toUpperCase();
    outputArea.value = teksBesar
})

const btnConvertLower = document.querySelector('.btn-lower');
btnConvertLower.addEventListener('click', () => {
    const inputArea = document.querySelector('#text-input').value;
    const outputArea = document.querySelector('#text-output');
    const teksKecil = inputArea.toLowerCase();
    outputArea.value = teksKecil
})

const btnCopy = document.querySelector('.button-copy');
btnCopy.addEventListener('click', () => {
    const outputArea = document.getElementById('text-output');

    // Pastikan ada teks di output sebelum mencoba menyalin
    if (outputArea.value.trim() === "") {
        alert("Output kosong, tidak ada teks untuk disalin!");
        return;
    }

    // Gunakan Clipboard API modern
    navigator.clipboard.writeText(outputArea.value)
        .then(() => {
            alert("Teks berhasil disalin!");

            // Opsional: Seleksi teks di output
            outputArea.select();
            outputArea.setSelectionRange(0, 99999);
        })
        .catch(err => {
            console.error('Gagal menyalin:', err);
            alert("Gagal menyalin. Silakan salin manual.");
        });
});

const btnReset = document.querySelector('.button-reset');

btnReset.addEventListener('click', () => {
    const inputArea = document.querySelector('#text-input');
    const outputArea = document.querySelector('#text-output');

    inputArea.value = "";
    outputArea.value = "";

    updateStats();

    alert("Teks berhasil dihapus!");
})

const inputText = document.getElementById("text-input");


inputText.addEventListener("input", () => {
    updateStats();
});

const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");
const lineCount = document.getElementById("line-count");

inputText.addEventListener("input", updateStats);

function updateStats() {
    const text = inputText.value;

    // Character count
    charCount.textContent = text.length;

    // Word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = text.trim() === "" ? 0 : words.length;

    // Line count
    const lines = text.split("\n");
    lineCount.textContent = text === "" ? 0 : lines.length;
}