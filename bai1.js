function check(){
    let mk = document.getElementById("mk");
    let rmk = document.getElementById("rmk");
    let treal = document.getElementById("treal");
    let tdangnhap = document.getElementById("tdangnhap");
        if (mk.value == "" || rmk.value == "" || treal.value == "" || tdangnhap.value == ""){
        alert("bạn cần nhập đầy đủ thông tin")
    }
    if (tdangnhap.value.length < 6){
        document.getElementById("thongbao").innerHTML="Hãy nhập trên 6 kí tự tên đăng nhập";
    }
    if (treal.value.length < 6){
        document.getElementById("thongbao").innerHTML="Hãy nhập trên 6 kí tự tên đăng nhập";
    }
    if (mk.value.length <6){
        document.getElementById("thongbao").innerHTML="Hãy nhập trên 6 kí tự tên đăng nhập";
    }
    if (rmk.value.length < 6){
        document.getElementById("thongbao").innerHTML="Hãy nhập trên 6 kí tự tên đăng nhập";
    }
}

