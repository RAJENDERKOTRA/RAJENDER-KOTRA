let textEle = document.getElementById('floatingTextarea')
let voiceEle = document.getElementById('floatingSelect')
let speachBtn = document.getElementById('btn')
let speechSynth = speechSynthesis


speechSynth.addEventListener('voiceschanged', loadVoice)


function loadVoice() {
    let voices = speechSynth.getVoices()
    console.log(voices)
    for (voice of voices) {
        let option = document.createElement('option')
        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`
        console.log()
        voiceEle.appendChild(option)
        console.log(option)
    }

}


function textToSpeach(text) {
    let utterance = new SpeechSynthesisUtterance(text)
    //utterance.pitch = 2
    for (let voice of speechSynth.getVoices()) {
        if (voice.name === voiceEle.value) {
            utterance.voice = voice
        }
    }
    speechSynth.speak(utterance)
}


speachBtn.addEventListener('click', function () {
    if (textEle.value !== '') {
        if (!speechSynth.speaking) {
            textToSpeach(textEle.value)
        }
    } else {
        alert('Enter Some Text')
    }
})