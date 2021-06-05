function Validation() {
    this.kiemTraRong = function (input, divId, mess) {
        if (input.trim() === "") {
            getEle(divId).innerHTML = mess;
            getEle(divId).className = "alert-danger";
            return false;
        } else {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
    };

    this.kiemTraChucVu = function (idSelect, divId, mess) {
        if (getEle(idSelect).selectedIndex != 0) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        } else {
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    }

    };

    this.kiemTraSo = function (input, divId, mess) {
        var letter = /^[0-9]+$/;
        if (input.match(letter)) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    };

    this.kiemTraDoDai = function (input, divId, mess, min, max) {
        if (input.length >= min && input.length <= max) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    };

    this.kiemTraTenNV = function (input, divId, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (input.match(letter)) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    };

    this.kiemTraEmail = function (input, divId, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(letter)) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    };

    this.kiemTraPassWord = function (input, divId, mess) {
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (input.match(letter)) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    };

    this.kiemTraDatePicker = function (input, divId, mess) {
        var letter = /[\/]\d{4}$/;
        if (input.match(letter)) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    };

    this.kiemTraGiaTri = function (input, divId, mess, min, max) {
        if (input >= min && input <= max) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    };

    this.kiemTraChucVuText = function (input, divId, mess) {
        if (input === "Sếp" || input === "Trưởng phòng" || input === "Nhân viên") {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    };

    this.kiemTraTrungTK = function (input, divId, mess, arr) {
        var status = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].tkNV === input) {
                status = false;
                break;
            }
        }
        if (status) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert-danger";
        return false;
    };

}