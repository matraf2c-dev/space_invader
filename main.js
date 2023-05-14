const colors = ["aquamarine","beige","blue","brown","coral","darkgoldenrod","cyan","indingo","magenta","lime","yellow","red","purple","pink","gray","navy"];
var actual_color = "blue"
var player = document.getElementById("player")
let random_color = actual_color
let winstreak = 0


function set_color(color){
    document.getElementById("btnstart").disabled = true;
    document.getElementById("btnstart").innerHTML = "PLAYING...";
    random_color = colors[Math.floor(Math.random() * 15)]
    document.body.style.backgroundColor = random_color
    let time = 2000;
    if(winstreak < 2){
        time = 3500
    }
    else if (winstreak > 1 && winstreak < 5){
        time = 2000
    }
    else{
        time = 1500
    }

    setTimeout(() => {
        if(random_color == actual_color){
            won()
        }
        else{
            lost()
        }
      }, time);
    
}


function won(){
    winstreak++
    var wintext = document.getElementById("winstreak")
    wintext.innerHTML = "WINSTREAK : " + winstreak
    set_color()
}

function lost(){
    var wintext = document.getElementById("winstreak")
    wintext.innerHTML = "YOU LOST, YOUR SCORE WAS OF : " + winstreak;
    winstreak = 0
    wintext.style.color = "red"
    document.getElementById("btnstart").disabled = false;
    document.body.style.backgroundColor = "cornsilk"
    

    setTimeout(() => {
        location. reload()
      }, "5000");

}




window.addEventListener("keyup", (event) =>{
    let key = event.key
    if(key == "ArrowUp"){
        move("Up")
    }
    else if(key == "ArrowDown"){
        move("Down")
    }
    else if(key == "ArrowLeft"){
        move("Left")
    }
    else if(key == "ArrowRight"){
        move("Right")
    }
});

function move(arrow){

    var player_one = document.getElementById("player")
    var element_to_go = document.getElementById("lime")

    if(actual_color == "aquamarine"){

        if(arrow == "Left"){

        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("beige")
            element_to_go.appendChild(player_one);
            actual_color = "beige"
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("coral")
            element_to_go.appendChild(player_one);
            actual_color = "coral"
        }
        else if(arrow = "Up"){

        };
    }
    else if(actual_color == "beige"){

        if(arrow == "Left"){
            element_to_go = document.getElementById("aquamarine")
            element_to_go.appendChild(player_one);
            actual_color = "aquamarine"
        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("blue")
            element_to_go.appendChild(player_one);
            actual_color = "blue"
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("darkgoldenrod")
            element_to_go.appendChild(player_one);
            actual_color = "darkgoldenrod"
        }
        else if(arrow = "Up"){

        };
    }
    else if(actual_color == "blue"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("beige")
            element_to_go.appendChild(player_one);
            actual_color = "beige"
        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("brown")
            element_to_go.appendChild(player_one);
            actual_color = "brown"
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("cyan")
            element_to_go.appendChild(player_one);
            actual_color = "cyan"
        }
        else if(arrow = "Up"){

        };
    }
    else if(actual_color == "brown"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("blue")
            element_to_go.appendChild(player_one);
            actual_color = "blue"
        }
        else if(arrow == "Right"){
        
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("indingo")
            element_to_go.appendChild(player_one);
            actual_color = "indingo"
        }
        else if(arrow = "Up"){

        };
    }
    else if(actual_color == "coral"){
        if(arrow == "Left"){
        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("darkgoldenrod")
            element_to_go.appendChild(player_one);
            actual_color = "darkgoldenrod"
            
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("magenta")
            element_to_go.appendChild(player_one);
            actual_color = "magenta"
        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("aquamarine")
            element_to_go.appendChild(player_one);
            actual_color = "aquamarine"
        };
    }
    else if(actual_color == "darkgoldenrod"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("coral")
            element_to_go.appendChild(player_one);
            actual_color = "coral"
        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("cyan")
            element_to_go.appendChild(player_one);
            actual_color = "cyan"
            
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("lime")
            element_to_go.appendChild(player_one);
            actual_color = "lime"
        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("beige")
            element_to_go.appendChild(player_one);
            actual_color = "beige"
        };
    }
    else if(actual_color == "cyan"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("darkgoldenrod")
            element_to_go.appendChild(player_one);
            actual_color = "darkgoldenrod"
        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("indingo")
            element_to_go.appendChild(player_one);
            actual_color = "indingo"
            
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("yellow")
            element_to_go.appendChild(player_one);
            actual_color = "yellow"
        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("blue")
            element_to_go.appendChild(player_one);
            actual_color = "blue"
        };
    }
    else if(actual_color == "indingo"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("cyan")
            element_to_go.appendChild(player_one);
            actual_color = "cyan"
        }
        else if(arrow == "Right"){
            
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("red")
            element_to_go.appendChild(player_one);
            actual_color = "red"
        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("brown")
            element_to_go.appendChild(player_one);
            actual_color = "brown"
        };
    }
    else if(actual_color == "magenta"){
        if(arrow == "Left"){

        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("lime")
            element_to_go.appendChild(player_one);
            actual_color = "lime"
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("purple")
            element_to_go.appendChild(player_one);
            actual_color = "purple"
        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("coral")
            element_to_go.appendChild(player_one);
            actual_color = "coral"
        };
    }
    else if(actual_color == "lime"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("magenta")
            element_to_go.appendChild(player_one);
            actual_color = "magenta"
        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("yellow")
            element_to_go.appendChild(player_one);
            actual_color = "yellow"
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("pink")
            element_to_go.appendChild(player_one);
            actual_color = "pink"
        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("darkgoldenrod")
            element_to_go.appendChild(player_one);
            actual_color = "darkgoldenrod"
        };
    }
    else if(actual_color == "yellow"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("lime")
            element_to_go.appendChild(player_one);
            actual_color = "lime"
        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("red")
            element_to_go.appendChild(player_one);
            actual_color = "red"
        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("gray")
            element_to_go.appendChild(player_one);
            actual_color = "gray"
        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("cyan")
            element_to_go.appendChild(player_one);
            actual_color = "cyan"
        };
    }
    else if(actual_color == "red"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("yellow")
            element_to_go.appendChild(player_one);
            actual_color = "yellow"
        }
        else if(arrow == "Right"){

        }
        else if(arrow == "Down"){
            element_to_go = document.getElementById("navy")
            element_to_go.appendChild(player_one);
            actual_color = "navy"
        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("indingo")
            element_to_go.appendChild(player_one);
            actual_color = "indingo"
        };
    }
    else if(actual_color == "red"){
        if(arrow == "Left"){

        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("pink")
            element_to_go.appendChild(player_one);
            actual_color = "pink"
        }
        else if(arrow == "Down"){

        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("magenta")
            element_to_go.appendChild(player_one);
            actual_color = "magenta"
        };
    }
    else if(actual_color == "purple"){
        if(arrow == "Left"){

        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("pink")
            element_to_go.appendChild(player_one);
            actual_color = "pink"
        }
        else if(arrow == "Down"){

        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("magenta")
            element_to_go.appendChild(player_one);
            actual_color = "magenta"
        };
    }
    else if(actual_color == "pink"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("purple")
            element_to_go.appendChild(player_one);
            actual_color = "purple"
        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("gray")
            element_to_go.appendChild(player_one);
            actual_color = "gray"
        }
        else if(arrow == "Down"){

        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("lime")
            element_to_go.appendChild(player_one);
            actual_color = "lime"
        };
    }
    else if(actual_color == "gray"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("pink")
            element_to_go.appendChild(player_one);
            actual_color = "pink"
        }
        else if(arrow == "Right"){
            element_to_go = document.getElementById("navy")
            element_to_go.appendChild(player_one);
            actual_color = "navy"
        }
        else if(arrow == "Down"){

        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("yellow")
            element_to_go.appendChild(player_one);
            actual_color = "yellow"
        };
    }
    else if(actual_color == "navy"){
        if(arrow == "Left"){
            element_to_go = document.getElementById("gray")
            element_to_go.appendChild(player_one);
            actual_color = "gray"
        }
        else if(arrow == "Right"){

        }
        else if(arrow == "Down"){

        }
        else if(arrow = "Up"){
            element_to_go = document.getElementById("red")
            element_to_go.appendChild(player_one);
            actual_color = "red"
        };
    }


    
}