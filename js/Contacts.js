const form = document.getElementById('form');

function SendEmail(e){
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(form, name, email, message);

    Email.send({
        SecureToken : "2a8c06af-c806-49f2-98ec-6ce22c5072c2",
        To : 'thaiminh2022+website@gmail.com',
        From : 'thaiminh2022+website@gmail.com',
        Subject : "CALL ME BITCH" + name,
        Body : message
    }).then(
        message => alert(message)
    );
}

form.addEventListener('submit', SendEmail());