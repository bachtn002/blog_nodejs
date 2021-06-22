const uc = require('upper-case');
const http = require('http');
const mailer = require('nodemailer');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(uc.upperCase('Hello World'));
    res.end();
}).listen(8090, () => {
    console.log('Server run on : http://localhost:8090');
});

let transporter = mailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'bachtn002@gmail.com',
        pass: 'phuongdung@.1918'
    }
});
let mailOption = {
    from: 'bachtn002@gmail.com',
    to: 'hoangnn298@gmail.com',
    subject: 'Con gà EZ test999999999999',
    text: 'Đánh EZ gà vcl',
};
transporter.sendMail(mailOption, (errors, info) => {
    if (errors) { console.log(errors); }
    else { console.log('Email sent:' + info.response); }
});

