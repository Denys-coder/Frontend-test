function showPrompt(html, callback) {

}

document.getElementById('show-form').addEventListener('click', function(event) {
    showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert(value);
    });
})


alert("document.documentElement.clientWidth: " + document.documentElement.clientWidth); // 1536
alert("document.documentElement.clientHeight: " + document.documentElement.clientHeight); // 1536
alert("window.innerWidth: " + window.innerWidth); // 730
alert("window.innerHeight: " + window.innerHeight); // 730
