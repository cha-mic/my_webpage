var icon = document.getElementById("introduction_icon");
icon.addEventListener('mouseenter', function() {
    icon.innerHTML = '<img src="images/my_icon_2.png" width="90%"> '
}, false)
icon.addEventListener('mouseleave', function() {
    icon.innerHTML = '<img src="images/my_icon_1.png" width="90%"> '
}, false)