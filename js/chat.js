var call_button = document.querySelector('.call_button');
var chat = document.querySelector('.chat');
var send_button = document.querySelector('.send_button');
var input = document.querySelector('.user_message');
var messages_container = document.querySelector('.messages_container');
messages_container.scrollTop =  messages_container.scrollHeight;
var exit = document.querySelector('.exit_icon');


call_button.addEventListener('click', function(event){
    chat.classList.add('active');
});

exit.addEventListener('click', function(event){
    chat.className = "chat";
});

document.addEventListener( 'keyup', event => {
    if( event.code === 'Enter' ) {
        send(event);
    }
});

send_button.addEventListener('click', send);

function send(event) {
    var text = input.value;
    input.value = '';
    var message = document.createElement('div');
    message.className = "message";
    message.innerText = text;
    messages_container.append(message);
    messages_container.scrollTop =  messages_container.scrollHeight
}
