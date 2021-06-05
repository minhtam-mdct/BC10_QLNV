var dsnv = new DanhSachNhanVien();
var validation = new Validation();

function getEle(id) {
    return document.getElementById(id);
}

getLocalStorage();

function dataInput(isAdd) {
    var _tkNV = getEle('tknv').value;
    var _tenNV = getEle('name').value;
    var _email = getEle('email').value;
    var _passWord = getEle('passWord').value;
    var _datePicker = getEle('datepicker').value;
    var _luongCB = getEle('luongCB').value;
    var _chucVu = getEle('chucvu').value;
    var _gioLam = getEle('gioLam').value;

    var isValid = true;

    if (isAdd) {
        isValid &= validation.kiemTraRong(_tkNV, "tbTKNV", "Tài khoản không được để trống") && validation.kiemTraDoDai(_tkNV, "tbTKNV", "Độ dài tối đa 4-6 ký số", 4, 6) && validation.kiemTraTrungTK(_tkNV, "tbTKNV", "Tài khoản đã tồn tại", dsnv.list);

        isValid &= validation.kiemTraRong(_tenNV, "tbTen", "Họ tên không được để trống") && validation.kiemTraTenNV(_tenNV, "tbTen", "Họ tên không đúng định dạng");

        isValid &= validation.kiemTraRong(_email, "tbEmail", "Email không đươc để trống") && validation.kiemTraEmail(_email, "tbEmail", "Email không đúng định dạng");

        isValid &= validation.kiemTraRong(_passWord, "tbMatKhau", "Mật khẩu không được để trống") && validation.kiemTraPassWord(_passWord, "tbMatKhau", "Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt") && validation.kiemTraDoDai(_passWord, "tbMatKhau", "Độ dài tối đa 6-10 ký tự", 6, 10);

        isValid &= validation.kiemTraRong(_datePicker, "tbNgay", "Ngày làm không được để trống") && validation.kiemTraDatePicker(_datePicker, "tbNgay", "Ngày tháng không đúng định dạng");

        isValid &= validation.kiemTraRong(_luongCB, "tbLuongCB", "Lương cơ bản không được để trống") && validation.kiemTraSo(_luongCB, "tbLuongCB", "Chỉ được phép nhập số") && validation.kiemTraGiaTri(_luongCB, "tbLuongCB", "Lương từ phải 1.000.000 - 20.000.000", 1000000, 20000000);

        isValid &= validation.kiemTraChucVu('chucvu', "tbChucVu", "Hãy chọn chức vụ") && validation.kiemTraChucVuText(_chucVu, "tbChucVu", "Hãy nhập đúng chức vụ cho phép");

        isValid &= validation.kiemTraRong(_gioLam, "tbGiolam", "Giờ làm không được để trống") && validation.kiemTraSo(_gioLam, "tbGiolam", "Chỉ được phép nhập số") && validation.kiemTraGiaTri(_gioLam, "tbGiolam", "Số giờ làm phải từ 80 - 200 giờ", 80, 200);
    }
    if (isValid) {
        var nhanVien = new NhanVien(
            _tkNV,
            _tenNV,
            _passWord,
            _luongCB,
            _gioLam,
            _email,
            _datePicker,
            _chucVu
        );
        return nhanVien;
    }
    return null;
}

getEle('btnThem').addEventListener("click", function () {
    getEle('btnThemNV').style.display = "block";
    getEle('btnCapNhat').style.display = "none";
    getEle('tknv').disabled = false;
    getEle("formNV").reset();
})

getEle('btnThemNV').addEventListener("click", function (event) {
    event.preventDefault();
    var nhanVien = dataInput(true);
    if (nhanVien) {
        nhanVien.tinhLuongTong();
        nhanVien.xepLoai();
        dsnv.themNhanVien(nhanVien);
        taoBang(dsnv.list);

        setLocalStorage();
    }
});

function taoBang(arr) {
    getEle("tableDanhSach").innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var tagTR = document.createElement("tr");

        var tagTD_tkNV = document.createElement("td");
        var tagTD_tenNV = document.createElement("td");
        var tagTD_Email = document.createElement("td");
        var tagTD_DatePicker = document.createElement("td");
        var tagTD_ChucVu = document.createElement("td");
        var tagTD_LuongTong = document.createElement("td");
        var tagTD_XepLoai = document.createElement("td");
        var tagTD_Edit = document.createElement("td");
        var tagTD_Delete = document.createElement("td");

        tagTD_tkNV.innerHTML = arr[i].tkNV;
        tagTD_tenNV.innerHTML = arr[i].tenNV;
        tagTD_Email.innerHTML = arr[i].email;
        tagTD_DatePicker.innerHTML = arr[i].datePicker;
        tagTD_ChucVu.innerHTML = arr[i].chucVu;
        tagTD_LuongTong.innerHTML = arr[i].luongTong;
        tagTD_XepLoai.innerHTML = arr[i].xepLoaiNV;
        tagTD_Edit.innerHTML = '<button class="btn btn-warning" id="btnEdit" onclick="suaNhanVien(\'' + arr[i].tkNV + '\')" data-toggle="modal" data-target="#myModal">Sửa</button>';
        tagTD_Delete.innerHTML = '<button class="btn btn-danger" id="btnDelete" onclick="deleteNhanVien(\'' + arr[i].tkNV + '\')">Xóa</button>';

        tagTR.appendChild(tagTD_tkNV);
        tagTR.appendChild(tagTD_tenNV);
        tagTR.appendChild(tagTD_Email);
        tagTR.appendChild(tagTD_DatePicker);
        tagTR.appendChild(tagTD_ChucVu);
        tagTR.appendChild(tagTD_LuongTong);
        tagTR.appendChild(tagTD_XepLoai);
        tagTR.appendChild(tagTD_Edit);
        tagTR.appendChild(tagTD_Delete);

        getEle("tableDanhSach").appendChild(tagTR);
    }
}
function suaNhanVien(tkNV) {
    var nhanVien = dsnv.layInfoNhanVien(tkNV);

    getEle('btnCapNhat').style.display = "block";
    getEle('btnThemNV').style.display = "none";

    getEle('tknv').value = nhanVien.tkNV;
    getEle('tknv').disabled = true;
    getEle('name').value = nhanVien.tenNV;
    getEle('email').value = nhanVien.email;
    getEle('passWord').value = nhanVien.passWord;
    getEle('datepicker').value = nhanVien.datePicker;
    getEle('luongCB').value = nhanVien.luongCB;
    getEle('chucvu').value = nhanVien.chucVu;
    getEle('gioLam').value = nhanVien.gioLam;
}

function deleteNhanVien(tkNV) {
    dsnv.xoaNhanVien(tkNV);
    taoBang(dsnv.list);

    setLocalStorage();
}

getEle('searchName').addEventListener("keyup", function () {
    var keywork = getEle('searchName').value;

    var mangTimKiem = dsnv.timKiemNhanVien(keywork);
    taoBang(mangTimKiem);
})

getEle('btnCapNhat').addEventListener("click", function () {
    var nhanVien = dataInput(false);
    nhanVien.tinhLuongTong();
    nhanVien.xepLoai();
    dsnv.capNhatNV(nhanVien);
    taoBang(dsnv.list);

    setLocalStorage();
})



function setLocalStorage() {
    var setData = JSON.stringify(dsnv.list);
    localStorage.setItem("DSNV", setData);
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        var data = localStorage.getItem("DSNV");
        dsnv.list = JSON.parse(data);
        taoBang(dsnv.list);
    }
}