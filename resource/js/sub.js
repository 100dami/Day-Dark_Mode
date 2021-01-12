let output = document.getElementById("night_day"); // output 에 id가 night_day인 걸 넣음

output.addEventListener("click", function modechange() { // output이 클릭됐을 때 
    if (output.value == "night") { // html에서 id가 night_day인 버튼의 value가 "night"일 때,
        //querySelector :  html의 클래스 이름 및 태그를 갖고 오기 위해 사용되는 태그
        document.querySelector(".body").style.backgroundColor = "black"; 
        document.querySelector(".body").style.color = "white"; 
        document.querySelector("a").style.color = "white";
        document.querySelector("#night_day").value = "day"; 
    }
    else if (output.value == "day") {
        document.querySelector(".body").style.backgroundColor = "white";
        document.querySelector(".body").style.color = "black";
        document.querySelector("a").style.color = "black";
        document.querySelector("#night_day").value = "night";
    }
})
