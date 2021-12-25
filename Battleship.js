
console.log(alert ("do you want to play!"));
//accuracy to determine a hit
var bottomRow = document.getElementById("bottomRow");
var stats = document.getElementsByClassName("stats");
var megaStats = document.getElementById("megaStats");
var megaManHP = document.getElementById('megaManHP');
var veigHP = document.getElementById("veigHP");



function beginBattle(){
    bottomRow.innerHTML = "Pick Megaman's ability by clicking the button above" 
    // stats[0].style.visibility = "visibile";
    // stats[1].style.visibility = "visibilite";
    for (var x=0; x<stats.length; x++){
        stats[x].style.visibility="visible";
    }

}
function blast(){
    var hitChance = Math.round(Math.random()*10);
    if (hitChance<=7){
        var dmg = Math.round(Math.random()*10)+10;
        veigarHP -=dmg;
        if (veigarHP<0){
            veigarHP = 0;
        }
        bottomRow.innerHTML = "You hit Battle Boss Veigar with your blast, doing" + dmg + "damage.Veigar now has" + veigarHP +
        var veigHPBarWidth = (veigarHP/100);
        veigHP.style.width = veigarHP + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (veigarHP == 0){
        bottomRow.innerHTML+= "<br> you have successfully defeated Battle Boss Veigar!!!"
    }


    }

}



if(Math.random() < alien[0].accuracy) {
    console.log('you have hit:');
}