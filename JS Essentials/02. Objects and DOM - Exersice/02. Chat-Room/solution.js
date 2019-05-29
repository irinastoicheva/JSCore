function solve() {
    let buttonSend = document.querySelector('#send');
    buttonSend.addEventListener('click', () => {
        let myOldMessage = document.getElementsByClassName('message my-message')[0];
        let myCurrentMessage = myOldMessage.cloneNode(true);
        let chatBoxFooter = document.querySelector('#chat_input');
        let chatBoxFooterContent = chatBoxFooter.value;
        myCurrentMessage.textContent = chatBoxFooterContent;
        let divMessage = document.querySelector('#chat_messages');
        divMessage.appendChild(myCurrentMessage);

        chatBoxFooter.value = '';
    });
}
