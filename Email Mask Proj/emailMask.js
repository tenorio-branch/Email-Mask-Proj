let email = prompt("Type your email:");

function emailMask (email){
    let slicedEmail = email.slice(0, email.indexOf("@"));
    let slicedDomain = email.slice(email.indexOf("@"));
    return email[0] + "*".repeat(slicedEmail.length - 2) + email[email.indexOf("@") - 1] + slicedDomain;
}

console.log(emailMask(email));