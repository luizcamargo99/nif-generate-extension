document.addEventListener("DOMContentLoaded", function (){
    generateNif();

    document.querySelector('#btn_generate').addEventListener('click', function () {
        generateNif();
    });

    document.querySelector('#btn_copy').addEventListener('click', function () {
        copyToClipboard();
    });

    function generateNif() {
       
        let first_digit = getRandomNumberBetweenTwoNumbers(1,3);
        let array_nif = [];

        array_nif.push(first_digit);

        for (let index = 0; index < 7; index++) {
            array_nif.push(getRandomNumberBetweenTwoNumbers(1,9));
        }

        let last_digit = calculateLastDigit(array_nif);
        array_nif.push(last_digit);

        let final_nif = "";

        for (let index = 0; index < array_nif.length; index++) {
            final_nif += array_nif[index].toString();            
        }
        let input = document.querySelector('#nif_field');
        input.value = final_nif;  
        copyToClipboard();        
    }

    function showCopiedText() {
        let text_copied = document.querySelector('#copied');
        text_copied.style.display = 'flex';
        setTimeout(hideCopiedText, 2000);
    }

    function hideCopiedText() {
        let text_copied = document.querySelector('#copied');
        text_copied.style.display = 'none'
    }

    function copyToClipboard () {
        let input = document.querySelector('#nif_field');
        input.focus();
        input.select();
        document.execCommand("copy"); 
        showCopiedText();
    }

    function getRandomNumberBetweenTwoNumbers (min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

    function calculateLastDigit(array_nif) {        
        let calculate_sum = array_nif[7] * 2 + array_nif[6] * 3 + array_nif[5] * 4 + array_nif[4] * 5 
        + array_nif[3] * 6 + array_nif[2] * 7 + array_nif[1] * 8 + array_nif[0] * 9;

        let rest_division = calculate_sum % 11;

        if (rest_division <= 1) {
            return 0;
        }
        else {
            return 11 - rest_division;
        }
    }
});
