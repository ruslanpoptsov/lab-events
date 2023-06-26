function makeBoard(){
    const tic = document.querySelector(".tic-tac-toe");
    for(let i = 0; i < 9; i++){
        const div = document.createElement("div");
        div.setAttribute("value","empty");
        div.setAttribute("class","square");
        div.setAttribute("id",`board${i}`);
        tic.appendChild(div);
    }
}

makeBoard();

function makeMove(){
    var count = 0;
    var move = 0;
    const div = document.querySelectorAll(".square");
    for(let i of div){
        i.addEventListener("click", e => {
            if(i.getAttribute("value")=="empty"){
                if(count % 2 == 0){
                    i.textContent = "X";
                }
                else{
                    i.textContent = "O";
                }
                i.setAttribute("value","filled");
                count++;
                move++;

                if(move >= 9){
                    confirm("Game Over!");
                    move = 0;
                }
            }
        })
    }
}

makeMove();

function reset(){
    const button = document.querySelector("button");
    button.addEventListener("click", e => {
        count = 0;
        move = 0;
        const square = document.querySelectorAll(".square");
        square.forEach(a => {
            a.setAttribute("value", "empty");
            a.textContent = ""
        });
    })
}

reset();