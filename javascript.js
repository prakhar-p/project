
    function clear(){
        var k=document.getElementsByClassName('form-error');
        for(let i of k){
            i.innerHTML="";
        }
    }
    function seterror(id,error){
        element=document.getElementById(id);
        element.getElementsByClassName('form-error')[0].innerHTML=error;
    }
    function validate(){
        var tf=true;
        clear();
        var name=document.forms['form']['fname'].value;
        if(name.length <5){
            seterror("name","*Name is too Short!");
            tf=false;
        }
        if(name.length >15){
            seterror("name","*Name is too Long!");
            tf=false;
        }

        var password=document.forms['form']['fpassword'].value;
        if(password.length<8){
            seterror("password","*Password should have atleast 8 character!");
            tf=false;
        }
        if(password.length>15){
            seterror("password","*Password should have atmost 15 character!");
            tf=false;
        }

        var cp=document.forms['form']['fcp'].value;
        if(cp!=password){
            seterror("cp","*Password dosen't match!");
            tf=false;
        }

        var phone=document.forms['form']['fphone'].value;
        if(phone.length<10){
            seterror("phone","*Phone Number should be 10 digit!");
            tf=false
        }
        if(phone.length>10){
            seterror("phone","*Phone Number should be 10 digit!");
            tf=false
        }

        var email=document.forms['form']['femail'].value;
        if(!email.endsWith('@gmail.com')){
            seterror("email","*Email is invalid!");
            tf=false;
        }
        return tf;

    }