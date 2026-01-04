const users = [
    { email: "user1@gmail.com", password: "12345" },
    { email: "user2@gmail.com", password: "abcde" },
    { email: "user3@gmail.com", password: "pass123" },
    { email: "user4@gmail.com", password: "hello12" },
    { email: "user5@gmail.com", password: "test@123" }
];

function login() {
    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;

    let isLogin = false;

    for (let i = 0; i < users.length; i++) {
        if (
            users[i].email === inputEmail &&
            users[i].password === inputPassword
        ) {
            isLogin = true;
            break;
        }
    }

    if (isLogin) {
        document.getElementById("result").innerHTML = "✅ Login Successful";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerHTML = "❌ Invalid Email or Password";
        document.getElementById("result").style.color = "red";
    }
}
