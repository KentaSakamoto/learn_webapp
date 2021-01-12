// var myBirthTime = new Date(1982, 11, 17, 12, 30);
// function updateParagraph() {
//     var now = new Date();
//     var seconds = (now.getTime() - myBirthTime.getDate()) / 1000;
//     document.getElementById('birth-time').innerText = '生まれてから' + seconds + '経過';
// }
// setInterval(updateParagraph, 50);

function resSquare(data) {
    var square = data * data * 3.14;
    return square;
}

// document.write('面積は' + square + '平方cmです');
// resSquare(5);
// resSquare(10);
// resSquare(15);
document.write('<p>半径 5cm の円の面積は ' + resSquare(5) + 'です。</p>');
document.write('<p>半径 10cm の円の面積は ' + resSquare(10) + 'です。</p>');
document.write('<p>半径 15cm の円の面積は ' + resSquare(15) + 'です。</p>');