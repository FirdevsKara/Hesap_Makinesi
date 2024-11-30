let result = document.getElementById('result');
let historyList=document.getElementById('historyList');
alert("Hesap Makinesi Uygulamama Hoşgeldiniz");

// Kullanıcıdan gelen inputu ekler
function appendToResult(value) {
    result.value += value;
}

// Hesaplamayı başlat
function calculateResult() {
    try {
        let expression = result.value;
        let answer = eval(expression); // Burada JavaScript'in eval fonksiyonunu kullanıyoruz
        result.value = answer;
         
    } catch (error) {
        result.value = "Error!";
    }
}

// Sonucu temizle
function clearResult() {
    result.value = '';
}