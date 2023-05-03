var icon = document.getElementById("introduction_icon");
icon.addEventListener('mouseover', function() {
    icon.innerHTML = '<img src="images/my_icon_2.png" width="90%"> '
}, false)
icon.addEventListener('mouseout', function() {
    icon.innerHTML = '<img src="images/my_icon_1.png" width="90%"> '
}, false)