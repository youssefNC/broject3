let userinfo=document.querySelector("#user_info")                   // يعني هاتلي الايدي يوزر انفو 
let userdom=document.querySelector("#user")
let links=document.querySelector("#links")
let logoutbtn=document.querySelector("#logout")


let username=localStorage.getItem("username")
 if (username){          //  يعني قم بالبحث عن الاي دي يوز نيم اذا كان موجود قم بفعل التالي 
    links.remove();         // قم بحذف الليست الخاص ب لينكس
    userinfo.style.display="flex";     // وقم باظهار اليوزر نيم الخاص ب الليست يوزر انفو
    userdom.innerHTML=username;              // يعني اليوزر دوم ضع بداخله القيمة المتغيرة لاسم المستخدم
}
 
    // logoutbtn.addEventListener("click",function(){
    //     localStorage.clear();                           
    //         setTimeout(() => {
    //         window.location="registor.html";
    //     }, 2000);
    // });

   