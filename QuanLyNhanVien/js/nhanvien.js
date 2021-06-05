function NhanVien(
    _tkNV,
    _tenNV,
    _passWord,
    _luongCB,
    _gioLam,
    _email,
    _datePicker,
    _chucVu,
){
    this.tkNV = _tkNV;
    this.tenNV = _tenNV;
    this.passWord = _passWord;
    this.luongCB = _luongCB;
    this.gioLam = _gioLam;
    this.email = _email;
    this.datePicker = _datePicker;
    this.chucVu = _chucVu;
    this.luongTong = 0;
    this.xepLoaiNV = "";
    this.tinhLuongTong = function(){
        switch(this.chucVu){
            case "Sếp":
                this.luongTong = (parseFloat(this.luongCB) * 3).toLocaleString();
                break;
            case "Trưởng phòng":
                this.luongTong =  (parseFloat(this.luongCB) * 2).toLocaleString();
                break;
            default:
                this.luongTong = (parseFloat(this.luongCB)).toLocaleString();
        }
        return this.luongTong;
    };

    this.xepLoai = function(){
        if(this.gioLam >= 192){
            this.xepLoaiNV = "Xuất sắc";
        }
        else if(this.gioLam >= 176){
            this.xepLoaiNV = "Giỏi";
        }
        else if(this.gioLam >= 160){
            this.xepLoaiNV = "Khá";
        } else{
            this.xepLoaiNV = "Trung bình";
        }
        return this.xepLoaiNV;
    };
}