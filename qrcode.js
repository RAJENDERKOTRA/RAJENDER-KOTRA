// let container = document.querySelector('.container')
// let qrInput = document.querySelector('#text')
// let img = document.querySelector('#qr-img')
// let generatorBtn = document.querySelector('#generator')
// let preInput =


//     generatorBtn.onClick = function () {
//         let input = qrInput.value.trim()
//         if (!input || input === preInput) {
//             return
//         } else {
//             preInput = input;
//             generatorBtn.innerText = "Generating Qr Code......"
//             qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput}`;
//             img.onload = function () {
//                 container.classList.add("active")
//                 generatorBtn.innerText = "Generate Qr Code"
//             }
//         }
//     }



let imgBox = document.getElementById("imgBox")
let qrImg = document.getElementById("qrImg")
let qrText = document.getElementById("qrText");
//let generateBtn = document.getElementById("generateBtn");

function generateQr() {
    if (qrText.value.length > 0) {
        qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`
        imgBox.classList.add('show-img')
    } else {
        qrText.classList.add('error')
        setTimeout(() => {
            qrText.classList.remove('error')
        }, 1000)
    }
} 