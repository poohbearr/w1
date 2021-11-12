


console.log("lotto.................")

const btn = document.getElementById("btn")

console.log(btn)

// 이벤트 코드의 정석
btn.addEventListener("click", (event) => {
    console.log(event)

    const target = document.getElementById("resultDiv")

    const balls = lotto()

    //clear all <h3> tag
    target.innerHTML = ''

    for (const num of balls) {
        const tag = document.createElement("h3")
        const textNode = document.createTextNode(num)
        tag.appendChild(textNode)
        target.appendChild(tag)
    }

},false)

// function makeLottoNum(){
//
//     const numArr = [2,13,21,32,35,40]
//
//     return numArr
// }
function lotto(){

    const arr = []

    while(1) {

        let num = parseInt((Math.random() * 45) + 1)
        const index = arr.indexOf(num)

        //console.log(`NUM: ${num} INDEX: ${index}`)

        if(index > -1){
            continue
        }
        arr.push(num)

        if(arr.length === 6){
            break
        }

    }
    return arr
}