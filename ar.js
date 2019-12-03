const arrowEntity = document.getElementById('arrowEntity');
arrowEntity.setAttribute('visible', false); //hide arrow at startup

// listen to changes in local storage
window.addEventListener('storage', function (e) {
    // change arrow rotation when slider moves
    let rotation = arrowEntity.getAttribute('rotation');
    rotation.z = localStorage.getItem('angle');
    arrowEntity.setAttribute('rotation', rotation);

    // show/hide arrow based on addArrowButton
    let showArrow = localStorage.getItem('showArrow');
    if (showArrow === 'true') {
        arrowEntity.setAttribute('visible', true);
    }
    else {
        arrowEntity.setAttribute('visible', false);
    }
});