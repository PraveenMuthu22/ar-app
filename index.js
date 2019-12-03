const slider = document.getElementById('slider');
const addArrowBtn = document.getElementById('addArrowBtn');
const addTextBtn = document.getElementById('addTextBtn');
const addRecordingBtn = document.getElementById('addRecordingBtn');
const textInputLabel = document.getElementById('textInputLabel');
const textInput = document.getElementById('textInput');
const recordBtn = document.getElementById('recordBtn');

let showTextAreaBool = false;
let showRecordAudioBool = false;

// Hide stuff initially
showTextArea(false);
showRecordAudio(false)

function showTextArea(display) {
  if (display) {
    textInput.style.display = 'block';
    textInputLabel.style.display = 'block';
  } else {
    textInput.style.display = 'none';
    textInputLabel.style.display = 'none';
  }
}

function showRecordAudio(display) {
  if (display) {
    recordBtn.style.display = 'block';
    recordBtn.style.display = 'block';
  } else {
    recordBtn.style.display = 'none';
    recordBtn.style.display = 'none';
  }
}

// store slider value in local storage when it changes
slider.addEventListener('change', (event) => {
  localStorage.setItem('angle', slider.value);
});

//show/hide arrow with button click
addArrowBtn.addEventListener('click', (event) => {
  let showArrow = localStorage.getItem('showArrow');

  if (showArrow === null || showArrow === 'false') {
    localStorage.setItem('showArrow', 'true');
    addArrowBtn.innerText = 'Remove arrow';
  }
  else {
    localStorage.setItem('showArrow', 'false');
    addArrowBtn.innerText = 'Add arrow';
  }
});

//show/hide text area  
addTextBtn.addEventListener('click', (event) => {
  if (showTextAreaBool === false) {
    showTextArea(true);
    showTextAreaBool = true;
    addTextBtn.innerText = 'Remove Text';
  }
  else {
    showTextArea(false);
    showTextAreaBool = false;
    addTextBtn.innerText = 'Add Text';
  }
});

//show/hide record audio
// addRecordingBtn.addEventListener('click', (event) => {
//   if (showRecordAudioBool === false) {
//     showRecordAudio(true);
//     showRecordAudioBool = true;
//     addRecordingBtn.innerText = 'Remove recording';
//   }
//   else {
//     showRecordAudio(false);
//     showRecordAudioBool = false;
//     addRecordingBtn.innerText = 'Add recording';
//   }
// });



// Record audio
https://github.com/mdn/web-dictaphone/blob/gh-pages/scripts/app.js    <-- learn
