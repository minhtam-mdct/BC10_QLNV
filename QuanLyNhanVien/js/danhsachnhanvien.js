function DanhSachNhanVien(){
    this.list = [];
    this.themNhanVien = function(nv){
        this.list.push(nv);
    };

    this.timNhanVien = function(tkNV){
        var index = -1;
        for(var i = 0; i < this.list.length; i++){
            if(this.list[i].tkNV == tkNV){
                index = i;
                break;
            }
        }
        return index;
    };

    this.layInfoNhanVien = function(tkNV){
        var index = this.timNhanVien(tkNV);
        if(index !== -1){
            return this.list[index];
        }
    };

    this.capNhatNV = function(nhanVien){
        var index = this.timNhanVien(nhanVien.tkNV);
        if(index !== -1){
            this.list[index] = nhanVien;
        }
    };

    this.xoaNhanVien = function(tkNV){
        var index = this.timNhanVien(tkNV);
        if(index !== -1){
            this.list.splice(index, 1);
        }
    };

    this.timKiemNhanVien = function(keywork){
        var mangTimKiem = [];
        for(var i = 0; i < this.list.length; i++){
        if(this.list[i].xepLoaiNV.toLowerCase().indexOf(keywork.toLowerCase()) !== -1){
            mangTimKiem.push(this.list[i])
        }
    }
        return mangTimKiem;
    }
    
}