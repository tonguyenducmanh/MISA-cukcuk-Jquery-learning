$(document).ready(function () {
    //gán sự kiện cho các element
    initEvent()
});

/********************************************
 * Tạo các event khởi tạo cho các element
 * Author: Tô Nguyễn Đức Mạnh (30/08/2022)
 */
function initEvent(){
    try {
        //hiển thị dialog thêm mới nhân viên khi
        //bấm vào thêm mới
        $("#buttonAddEm").click(function(){
            $("#popupInfoEm").addClass(MISAEnum.PopUp.Show);
            //focus vào ô đầu tiên trong form nhập liệu
            $("#EmployeeCodeInput").focus()
        })

        //ẩn dialog thêm mới khi nhấn vào nút close
        $(" .m-popup-container .m-popup__closebtn").click(function(){
            $("#popupInfoEm").removeClass(MISAEnum.PopUp.Show);
        })
        $(" .m-popup-container .m-button--newcl").click(function(){
            $("#popupInfoEm").removeClass(MISAEnum.PopUp.Show);
        })

        // lưu data vào db và ẩn form
        $("#buttonSaveEm").click(function(){
        /// chưa làm phần này
            $("#popupInfoEm").removeClass(MISAEnum.PopUp.Show);
        })

        // lấy id của 1 bản ghi trong table rồi binding dữ liệu tương ứng vào form
        /// chưa làm phần này

        // lập trình phím tắt khi ấn vào trong form
        $("#popupInfoEm").keydown(function (e) { 
            //bắt hành động khi người dùng ấn enter
            console.log(e.keyCode)
            if(e.keyCode == MISAEnum.KeyCode.ENTER){
                //giả lập ấn phím save thực hiện lại hàm đã gán cho phím save
                $("#buttonSaveEm").trigger("click")
            }else if(e.keyCode == MISAEnum.KeyCode.ESC){
                //bắt hành động ấn phím ESC để thoát form nhập thông tin
                $("#popupInfoEm").removeClass(MISAEnum.PopUp.Show)
            }
        });

    } catch (error) {
        console.log(error)
    }
}