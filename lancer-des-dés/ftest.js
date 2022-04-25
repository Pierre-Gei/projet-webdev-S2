let boutton =  document.getElementById("button");
document.addEventListener("keydown",testkey);
function roll(){
    let output1 = document.getElementById("container1");
    let output2 = document.getElementById("container2");
    let output3 = document.getElementById("container3");
    let x1 = Math.floor((Math.random()*6)+1);
    switch(x1){
        case 1:
            output1.src = "557px-Dice-1-b.svg.png";
            break
        case 2:
            output1.src = "557px-Dice-2-b.svg.png";
            break
        case 3:
            output1.src = "557px-Dice-3-b.svg.png";
            break
        case 4:
            output1.src = "Dice-4-b.svg.png";
            break
        case 5:
            output1.src = "Dice-5-b.svg.png";
            break
        case 6:
            output1.src = "Dice-6-b.svg.png";
            break;            
    }  
    let x2 = Math.floor((Math.random()*6)+1);
    switch(x2){
        case 1:
            output2.src = "557px-Dice-1-b.svg.png";
            break
        case 2:
            output2.src = "557px-Dice-2-b.svg.png";
            break
        case 3:
            output2.src = "557px-Dice-3-b.svg.png";
            break
        case 4:
            output2.src = "Dice-4-b.svg.png";
            break
        case 5:
            output2.src = "Dice-5-b.svg.png";
            break
        case 6:
            output2.src = "Dice-6-b.svg.png";
            break;            
    }
    output3.innerHTML = x1 + x2;
}
function testkey(event){
    switch(event.key){
        case " ":
            roll();
            break;
        default:
            break;
    }
}