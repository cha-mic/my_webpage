const area = document.getElementById("artifact_1_1");
const icon = document.getElementById("artifact_1_2");
area.addEventListener('mouseover', function() {
    icon.innerHTML = '<img src="images/artifact_icon_2.png" width="100%">'
}, false);
area.addEventListener('mouseout', function() {
    icon.innerHTML = '<img src="images/artifact_icon_1.png" width="100%">'
}, false);