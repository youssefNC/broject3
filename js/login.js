let username=document.querySelector("#username")
let password=document.querySelector("#password")
let loginBtn=document.querySelector("#sign-in")

let getuser=localStorage.getItem("username");
let getpassword=localStorage.getItem("password");

loginBtn.addEventListener("click",function(e){
    e.preventDefault();
if (username.value==="" ||password.value==="" ){//  يعني اذا كانت هذه المتغيرات قيمتها فارغة 
    alert("please fill data");// قم باظهار تنبيه يحتوي على رسالة تحذيرية 
}

else{ // غير ذلك

if(getuser&&    // اذا كانت هذه المتغيرات موجودة قم بعمل التالي 
    getuser.trim()===username.value.trim() &&
     getpassword&&
     getpassword.trim()===password.value.trim()
     )
     
     // تيرم تستخدم لجعل اي مساحة قبل وبعد الكلمة لا تكون من ضمن قيمة المتغير الذي يت ادخاله 
{
    setTimeout(() => { 
        window.location="index.html";
    }, 1500);
}
    else{
        console.log("Username or password is wrong !!");// غير ذلك قم بطباعة هذه الجملة 
    }
}
});

