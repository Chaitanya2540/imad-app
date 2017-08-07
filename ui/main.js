console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text'
    );
    
    element.innerHTML = 'New Value';
    
    // Move the image
    var img = document.getElementById('modi');
    var marginleft = 0;
    function moveRight(){
        marginleft = marginleft + 10;
        img.style.marginLeft = marginleft + 'px';
    }
    
    img.onclick = function () {
         //img.style.marginLeft = '100px';
         var interval = setInterval(moveRight, 100);
    };
