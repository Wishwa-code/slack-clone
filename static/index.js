document.addEventListener('DOMContentLoaded', () => {

    // Connect to websocket
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

    // When connected, configure buttons
    socket.on('connect', () => {

        // Each button should emit a "submit vote" event
            document.querySelector('#displayname').onsubmit = () => {
                const displayname = document.querySelector('#dname').value;
                socket.emit('display name', {displayname:displayname} );
            };
        });


    // When a new vote is announced, add to the unordered list
    socket.on('configure name', data => {
        document.querySelector('#displayn').innerHTML = data;
    });
});
