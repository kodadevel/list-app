//make sure page loads first
window.onload = init;

//after page loads
function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}
//Display alert for testing
function handleButtonClick() {
    //alert("The BUtton was clicked");
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    //create a new element to display
    var li = document.createElement("li");
    li.innerHTML = songName;
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
    save(songName);
}