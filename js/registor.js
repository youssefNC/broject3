 let username=document.querySelector("#useranme"); //  يعني هاتلي ال اي دي يوزر نيم
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let registor_btn=document.querySelector("#sign-up");

registor_btn.addEventListener("click",function(e){//  يعني هاتلي المتغير رجستور بتن وقم باضافة خاصية الكليك عليه 
e.preventDefault();//  يعني قم بايقاف التحديث الافتراضي للصفحة

if (username.value==="" ||email.value==="" ||password.value==="" ){//  يعني اذا كانت هذه المتغيرات قيمتها فارغة 
    alert("please fill data");// قم باظهار تنبيه يحتوي على رسالة تحذيرية 
}
    else {// غير ذلك  
        localStorage.setItem("username",username.value)//  يعني قم باضافة القيمة المتغيرة للداتا وهي الاسم 
        localStorage.setItem("email",email.value)// نفس الي فوق بس للايميل 
        localStorage.setItem("password",password.value)

        setTimeout(()=>{   //  خاصية لاضافة فترة زمنية عند الانتقال لصفحة اندكس اخرى
            window.location="login.html"//  يعني اجعله ينتقل الى صفحة الاندكس
        },1500) //  الوقت المعطى 
}
})