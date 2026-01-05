const users = [
    { email: "user1@gmail.com", password: "12345" },
    { email: "user2@gmail.com", password: "abcde" },
    { email: "user3@gmail.com", password: "pass123" },
    { email: "user4@gmail.com", password: "hello12" },
    { email: "user5@gmail.com", password: "test@123" }
];

function login(event) {
    event.preventDefault(); // ⛔ refresh stop

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const result = document.getElementById("result");

    let matched = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            matched = true;
            break;
        }
    }

    if (matched) {
        result.innerText = "✅ Login Successful";
        result.style.color = "green";
    } else {
        result.innerText = " ❌ Email not found ";
       //result.innerText = "❌ Invalid Email or Password";
        result.style.color = "red";
    }

    return false; // ⛔ extra safety
}
