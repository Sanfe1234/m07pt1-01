var num = parseInt(prompt("Com et dius?", "Insereix numero"));

if (/^[0-9.,]+$/.test(num)) {

    for (var i = 0; i <= 10; i++) {
        document.write(i + " * 0 = " + (i * num) + "<br>");
    }

} else {
    alert('S\'ha d\'introduir un número');
}