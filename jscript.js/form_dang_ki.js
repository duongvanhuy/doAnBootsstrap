
// let email1 =document.getElementById('inputPassword1').value;
function kTEmail(){
    let email1 = document.forms['myForm']['email'].value;
    let pass = document.forms['myForm']['pass'].value;
    // let pass01 = pass.split('');
    if(email1=='' ){
        // if(email1)
        // alert('Emai không được bỏ trống');
        document.getElementById('checkEmail').innerHTML='* Vui lòng nhập Email';
        document.getElementById('checkPass').innerHTML='* Enter Email';
        return false;
    }
    
    if(pass == '' ){
        document.getElementById('checkEmail').innerHTML='* Vui lòng nhập Mật Khẩu';
        document.getElementById('checkPass').innerHTML='* Enter PassWord';
     return false;
    }
}
$(document).ready(function () {
    $('.dang_ki').click(function(){
        $('#inputPassword3').attr('style', 'display: block! important'); 
        $('#inputPassword4').attr('style', 'display: block! important');
        $('#ghi_nho_TK') .attr('style', 'display: none! important');
        $('.remove').attr('style', 'display: none! important');
        $('.choos').attr('style', 'display: none! important');
        document.getElementById('login11').innerHTML = 'ĐĂNG KÝ / REGISTER';
        $('#have').attr('style', 'display: block! important'); 
        $('#have01').attr('style', 'display: block! important');
        $('#not_have').attr('style', 'display: none! important');
        $('#not_have01').attr('style', 'display: none! important');
        $('.dang_ki') .attr('style', 'color: #006699! important');
        $('.dang_nhap01') .attr('style', 'color: #000! important');
    });
    $('.dang_nhap01').click(function(){
        $('#inputPassword3').attr('style', 'display: none! important'); 
        $('#inputPassword4').attr('style', 'display: none! important'); 
        $('.remove').attr('style', 'display: block! important');
        $('.choos').attr('style', 'display: inline-block! important');
        document.getElementById('login11').innerHTML = 'ĐĂNG NHẬP / LOGIN';
        $('#have').attr('style', 'display: none! important');
        $('#have01').attr('style', 'display: none! important');
        $('#not_have').attr('style', 'display: block! important');
        $('#not_have01').attr('style', 'display: block! important');
        $('.dang_ki') .attr('style', 'color:  #000! important');
        $('.dang_nhap01') .attr('style', 'color: #006699! important');
    });
    
});