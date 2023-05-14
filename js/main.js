
document.getElementById('calBMI').onclick = function () {

    var height = document.getElementById('heightInput').value*1;
    var weight = document.getElementById('weightInput').value*1;

    var heightStatus = false;
    var weightStatus = false;

    if (height < 1 || height == '' || isNaN(height)) {
        alert("Nhập Đúng Cân Nặng !!!")
    } else {
        heightStatus = true
    }
    
    if (weight < 1 || weight == '' || isNaN(weight)) {
        alert("Nhập Đúng Cân Nặng !!!")
    } else {
        weightStatus = true
    }

    if (heightStatus && weightStatus) {
        var bmi = weight / (height * height / 10000)
        document.getElementById('ketQua').style.display = 'none'
    }
    var resulut = bmi.toFixed(2)
    var show = document.getElementById('show')
    var imgOutput = document.getElementById('imgOutput')


    if (resulut < 18.5) {
        imgOutput.src = "./img/body-1.png"
        show.innerHTML = ('Nhẹ Cân : ' + resulut)
    } else if (resulut < 24.9) {
        imgOutput.src = "./img/body-2.png"
        show.innerHTML = ('Bình Thường : ' + resulut)
    } else if (resulut < 29.9) {
        imgOutput.src = "./img/body-3.png"
        show.innerHTML = ('Thừa Cân : ' + resulut)
    } else {
        imgOutput.src = "./img/body-4.png"
        show.innerHTML = ('Béo Phì : ' + resulut)
    }

    setTimeout(
        function() {
            document.getElementById('ketQua').style.display = 'block'
        }, 300)
}
