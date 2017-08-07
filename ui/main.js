console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text'
    );
    
    element.innerHTML = 'New Value';
    
    // Move the image
    var img = document.getElementById('modi');
    //var img = document.getElementByClass('img-medium');
    img.onclick = function () {
        alert('In the function');
        img.style.margin = '100px';
    };
