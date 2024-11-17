let boxes = document.querySelectorAll(".but")
let reset = document.querySelector("#rset")
let newbtn = document.querySelector("#newgae")
let msgContainer = document.querySelector(".msg-container ")
let msg = document.querySelector("#msg")

let turnO = true; // p-1, p-2

// let arr = [["hey", "hello"], ["hib", "jffbf"], ["pants", "shirts"]]; 2 d arryy 

const winpatt = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (turnO) {//player o
            box.innerText = "O";
            turnO = false;//o is executed now x's turn
        } else { //player x
            box.innerText = "X"
            turnO = true;// x's turn is over now so turno becomes true i.e its O's turn
        }
        box.disabled = true;


        checkwinner();// checks index of boxes
    })
})
const  disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const  enableBoxes= () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner = () => {
    for (let pattern of winpatt) {
       let postVal1 = boxes[pattern[0]].innerText;
       let postVal2 = boxes[pattern[1]].innerText;
       let postVal3 = boxes[pattern[2]].innerText;

       if (postVal1 != "" && postVal2 != "" && postVal3 != "") {
          if (postVal1 === postVal2 && postVal2 === postVal3){
            console.log("winner", postVal1)
            showWinner(postVal1)

        
       }
      
    }
  }
}

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);



