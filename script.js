// function showPrompt(html, callback) {
//
// }
//
// document.getElementById('show-form').addEventListener('click', function(event) {
//     showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
//         alert(value);
//     });
// })


setTimeout(function () {
    alert("document.documentElement.clientWidth: " + document.documentElement.clientWidth);
    alert("document.documentElement.clientHeight: " + document.documentElement.clientHeight);
    alert("window.innerWidth: " + window.innerWidth);
    alert("window.innerHeight: " + window.innerHeight);
    alert("window.devicePixelRatio: " + window.devicePixelRatio);
}, 1000);

// personal laptop - 1920x945
// working laptop - 1920x945
// mobile with viewport - 360x710, 360x710, square = 5/6
// mobile without viewport - 360x1932, 980x1933, square = slightly smaller 1/3

// increased scale = decreased resolution
// decreased scale = increased resolution

// firstly page gets rendered according to the viewport and then each element gets scaled up or down
