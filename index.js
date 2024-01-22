var listNumber = [];

function addNumber() {
    var number = document.getElementById("soNguyen").value * 1;
    listNumber.push(number);

    result = "Mảng số nguyên: " + listNumber;

    document.getElementById("array").innerHTML = result;
}

//Bài tập 1: Tính tổng số dương
function checkAmDuong(number) {
    var type = "";
    if (number >= 0) {
        type = "Dương";
    }
    else {
        type = "Âm";
    }

    return type;
}

document.getElementById("btnTongDuong").onclick = function () {
    var sum = 0;
    var result = "";

    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        var type = checkAmDuong(number);
        if (type === "Dương") {
            sum += number;
        }
    }

    result += "Tổng các số dương là: " + sum;

    document.getElementById("tinhTongSoDuong").innerHTML = result;
}

//Bài tập 2: Đếm số dương
document.getElementById("btnDemSoDuong").onclick = function () {
    var count = 0;
    var result = "";

    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        var type = checkAmDuong(number);
        if (type === "Dương") {
            count++;
        }
    }

    result += "Mảng có: " + count + " số dương";

    document.getElementById("demSoDuong").innerHTML = result;
}

//Bài tập 3: Tìm số nhỏ nhất
document.getElementById("btnNhoNhat").onclick = function () {
    var min = listNumber[0];
    var result = "";

    for (var i = 1; i < listNumber.length; i++) {
        var numberTemp = listNumber[i];
        if (min > numberTemp) {
            min = numberTemp;
        }
    }

    result += "Số nhỏ nhất trong mảng là: " + min;

    document.getElementById("soNhoNhat").innerHTML = result;

}

//Bài tập 4: Tìm số dương nhỏ nhất
document.getElementById("btnMinDuong").onclick = function () {
    var listDuong = [];

    for (var i = 0; i < listNumber.length; i++) {
        var numberTemp = listNumber[i];
        var type = checkAmDuong(numberTemp);
        if (type === "Dương") {
            listDuong.push(numberTemp);
        }
    }

    if (listDuong.length == 0) {
        return alert("Không có số dương");
    }

    var minDuong = listDuong[0];

    for (var j = 1; j < listDuong.length; j++) {
        var soDuongSoSanh = listDuong[j];
        if (minDuong > soDuongSoSanh) {
            minDuong = soDuongSoSanh;
        }
    }

    var result = "Số dương nhỏ nhất là: " + minDuong;

    document.getElementById("minDuong").innerHTML = result;
}

//Bài tập 5: Tìm số chẵn cuối cùng

function checkSoChan() {
    var count = 0;
    var result = 0;

    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (number % 2 == 0) {
            count++;
        }
    }

    if (count > 0) {
        result = true;
    }
    else {
        result = false;
    }

    return result;
}

document.getElementById("btnChanCuoiCung").onclick = function () {
    var chan = 0;
    var result = "";

    var check = checkSoChan();
    if (check == false) {
        chan = -1;
        document.getElementById("chanCuoiCung").innerHTML = chan;
    }

    else {
        for (var i = 0; i < listNumber.length; i++) {
            var numberTemp = listNumber[i];
            if (numberTemp % 2 == 0) {
                chan = numberTemp;
            }
        }
        result += "Số chẵn cuối cùng là: " + chan;

        document.getElementById("chanCuoiCung").innerHTML = result;
    }


}

//Bài tập 6: Đổi vị trí 2 số
document.getElementById("btnDoiCho").onclick = function () {

    var phanTuThu1 = document.getElementById("phanTuThu1").value * 1;
    var phanTuThu2 = document.getElementById("phanTuThu2").value * 1;

    if (phanTuThu1 <= 0 || phanTuThu2 <= 0 || phanTuThu1 > listNumber.length || phanTuThu2 > listNumber.length) {
       
    }
    else {
        var valueTemp = listNumber[phanTuThu1 - 1];
        listNumber[phanTuThu1 - 1] = listNumber[phanTuThu2 - 1];
        listNumber[phanTuThu2 - 1] = valueTemp;
    }

    var result = "";
    result += "Mảng sau khi đổi số là: " + listNumber;

    document.getElementById("arrayNew").innerHTML = result;
}

//Bài tập 7: Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("btnSort").onclick = function () {
    var result = "";

    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp;
            }
        }
    }

    result += "Mảng tăng dần: " + listNumber;

    document.getElementById("sort").innerHTML = result;
}

//Bài tập 8: Tìm số nguyên tố đầu tiên
function checkPrime(number){
    if(number == 1){
        return false;
    }
    else if(number > 1){
        for(var i = 2; i < number; i++){
            if(number % i == 0){
                return false;
            }
            else{
                return true;
            }
        }
    }
}

document.getElementById("btnSoNguyenTo").onclick = function () {
    var prime = 0;

    var result = "";

    for (var i = 0; i < listNumber.length; i++){
        var temp = listNumber[i];
        if(checkPrime(temp) == false){
            prime = -1;
            document.getElementById("soNguyenTo").innerHTML = prime;
        }
        else{
            prime = temp;

            result += "Số nguyên tố đầu tiên là: " + prime;

            document.getElementById("soNguyenTo").innerHTML = result;

            break;
        } 
    }
}

//Bài tập 9: Nhập mảng số thực, hỏi có bao nhiêu số nguyên

var listNumberReal = [];

function addNumberReal(){
    var number = document.getElementById("soThuc").value * 1;
    listNumberReal.push(number);

    result = "Mảng số thực: " + listNumberReal;

    document.getElementById("arrayReal").innerHTML = result;
}

document.getElementById("btnTimSoNguyen").onclick = function(){
    var count = 0;
    var result = "";

    for(var i = 0; i < listNumberReal.length; i++){
        var integer = listNumberReal[i];
        if(Number.isInteger(integer) == true){
            count++;
        }
    }

    result += "Có " + count + " số nguyên";

    document.getElementById("timSoNguyen").innerHTML = result;
}


//Bài tập 10: So sánh số lượng số âm và số dương

document.getElementById("btnCompare").onclick = function(){
    var duong = 0;
    var am = 0;
    var result = "";

    for(var i = 0; i < listNumber.length; i++){
        var number = listNumber[i];
        if(checkAmDuong(number) === "Dương"){
            duong++;
        }
        else{
            am++;
        }
    }

    if(duong == am){
        result += "Số lượng số dương và số âm bằng nhau";
    }
    else if(duong > am) {
        result += "Số dương nhiều hơn số âm";
    }
    else{
        result += "Số âm nhiều hơn số dương";
    }

    document.getElementById("compare").innerHTML = result;
}