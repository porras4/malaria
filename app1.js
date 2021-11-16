let firstName = prompt('Hello, what is your first name?');
let lastName = prompt('Hello, what is your last name?');
let confirmation = confirm('Are you sure?');
if (confirmation == false) {
    let firstName = prompt('Hello, what is your first name?');
    let lastName = prompt('Hello, what is your last name?');
    document.write('<h2> Hello ' + firstName + ' ' + lastName + '!</h2>');
}
else {
    document.write('<h2> Hello ' + firstName + ' ' + lastName + '!</h2>');
}

let question = prompt('Would you like to help our cause and fight Malaria?');
if (question == 'yes') {
    document.write('<h2>Thank you for your desire to help, please read the article to learn more.</h2>')
}

