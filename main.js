function checkPalindrome() {
    const word = document.getElementById('word').value.toLowerCase(); // Converter para minúsculas para a comparação ser case-insensitive
    const reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
        document.getElementById('result').textContent = 'É um palíndromo!';
    } else {
        document.getElementById('result').textContent = 'Não é um palíndromo.';
    }
}
