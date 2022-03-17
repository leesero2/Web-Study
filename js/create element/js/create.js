//createElement는 요소를 생성함, 그러나 실제 요소를 dom에다가 추가를 해주지 않음으로 append나 appendChild를 해줘야함
const button = document.getElementById("push")
const div = document.getElementById("area")

button.addEventListener('click', function(){
    console.log("div 생성중")
    const newDiv = document.createElement("div") //버튼을 누를때마다 생성됨

    //div 속성조작
    newDiv.style.backgroundColor = "red"
    newDiv.style.width = "200px"
    newDiv.style.height = "200px"

    div.appendChild(newDiv)
    //append와 차이점은 appendChild는 값을 반환시킴. append는 값반환이 없음
    console.log(newDiv)
})

