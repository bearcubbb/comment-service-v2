let avatarArray = [
    "./images/avatar1.jpg",
    "./images/avatar2.jpg",
    "./images/avatar3.jpg",
    "./images/avatar4.jpg",
    "./images/avatar5.jpg",
    "./images/avatar6.jpg"
];

let name = document.getElementById('name').value || 'username';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function checkSpam(str) {
    return str.replace(/viagra|XXX/gi, '***');
}

function addComment() {
    let avatar = document.getElementById('avatar').value || randomAvatar;
    let message = document.getElementById('message').value;
    let showName = document.getElementById('showName').checked;

    capitalizeFirstLetter(name.trim());
    message = checkSpam(message);

    let today = new Date();
    let date = today.toLocaleDateString();
    let time = today.toLocaleTimeString();

    let randomAvatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];

    if (avatar === "") {
        avatar = randomAvatar;
    }

    let comment = '<div class="comment">';
    comment += '<img src="' + avatar + '" style="width: 50px; height: 50px; border-radius: 50%;">';
    comment += '<h3>' + (showName ? name : 'username') + '</h3>';
    comment += '<p>' + message + '</p>';
    comment += '<span>' + date + ', ' + time + '</span>';
    comment += '</div>';

    document.getElementById('comments').innerHTML += comment;

    document.getElementById('name').value = '';
    document.getElementById('avatar').value = '';
    document.getElementById('message').value = '';
}