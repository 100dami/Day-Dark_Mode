let output = document.getElementById("night_day"); // output 에 id가 night_day인 걸 넣음

output.addEventListener("click", function modechange() { // output이 클릭됐을 때 
    if (output.value == "night") { // html에서 id가 night_day인 버튼의 value가 "night"일 때,
        //querySelector :  html의 클래스 이름 및 태그를 갖고 오기 위해 사용되는 태그
        document.querySelector(".body").style.backgroundColor = "black"; // html의 body 부분의 배경을 black으로 바꿈
        document.querySelector(".body").style.color = "white"; // html의 body 부분의 글씨들을 white으로 바꿈
        document.querySelector("a").style.color = "white"; // html의 a 태그 글씨를 white으로 지정
        document.querySelector("#div ul .list a").style.color = "white";   // html ul 안 list 클래스의 a 태그의 색을 하얀색으로 바꿈
        document.querySelector("#div ul .list1 a").style.color = "white";  // html ul 안 list1 클래스의 a 태그의 색을 하얀색으로 바꿈
        document.querySelector("#div ul .list2 a").style.color = "white";  // html ul 안 list2 클래스의 a 태그의 색을 하얀색으로 바꿈
        document.querySelector("#div ul .list3 a").style.color = "white";  // html ul 안 list3 클래스의 a 태그의 색을 하얀색으로 바꿈
        document.querySelector("#night_day").value = "day"; // 버튼의 value를 "day"로 바꿈
    }
    else if (output.value == "day") {
        document.querySelector(".body").style.backgroundColor = "white";
        document.querySelector(".body").style.color = "black";
        document.querySelector("a").style.color = "black";
        document.querySelector("#div ul .list a").style.color = "black";
        document.querySelector("#div ul .list1 a").style.color = "black";  
        document.querySelector("#div ul .list2 a").style.color = "black";  
        document.querySelector("#div ul .list3 a").style.color = "black"; 
        document.querySelector("#night_day").value = "night";
    }
})
