function logar() {

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login == "x" && senha == "777") {
        location.href = "pag02.html"
    }else {
        alert('Usuario ou senha incorretos!.')
    }
}