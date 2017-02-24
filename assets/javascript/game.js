var heroArray = ["strider", "wolverine", "cyclops", "ryu"]

var strider = {
    hp: 2000,
    attack: 50,
    hc: 2000
}
var wolvie = {
    hp: 4500,
    attack: 60,
    hc: 2000

}
var cyclops = {
    hp: 2000,
    attack: 50,
    hc: 2000

}
var ryu = {
    hp: 2000,
    attack: 70,
    hc: 2000
}

var heroSelect = false;
var opponentSelect = false;
var striderSelected = false;
var wolvieSelected = false;
var cyclopsSelected = false;
var ryuSelected = false;
var opponent;
var hero;
var attackCount = 0;

function heroAttack(str) {
    if (str === strider) {
        return 10;
    }
}
function striderReturn(){
	 $("#heroSelected").html('<img id="heroEntry" src="assets/images/strider-stand.gif"/>');
	 console.log("strider returned");
}
function wolvieReturn(){
	 $("#heroSelected").html('<img id="heroEntry" src="assets/images/wolvieStand.gif"/>');
	 console.log("strider returned");
}
function cyclopsReturn(){
	 $("#heroSelected").html('<img id="heroEntry" src="assets/images/cyclopsStand.gif"/>');
	 console.log("strider returned");
}
function ryuReturn(){
	 $("#heroSelected").html('<img id="heroEntry" src="assets/images/ryuStand.gif"/>');
	 console.log("strider returned");
}

$(document).ready(function() {

    $(document).on("click", "button", function() {
        /////////////////////////////////////Hero Select/////////////////////////////////////
        if ($(this).hasClass("selectHero") && heroSelect === false) {

            if ($(this).hasClass("striderSelect")) {
                heroSelect = true;
                hero = "strider";
                console.log(hero);

                $("#heroSelected").prepend('<img id="heroEntry" src="assets/images/strider-stand.gif"/>');
            } else if ($(this).hasClass("wolvieSelect")) {
                heroSelect = true;
                hero = "wolvie";
                console.log("Wolvie");
                $("#heroSelected").prepend('<img id="heroEntry" src="assets/images/wolvieStand.gif"/>');
            } else if ($(this).hasClass("cyclopsSelect")) {
                heroSelect = true;
                hero = "cyclops";
                console.log("cyclops");
                $("#heroSelected").prepend('<img id="heroEntry" src="assets/images/cyclopsStand.gif"/>');
            } else if ($(this).hasClass("ryuSelect")) {
                heroSelect = true;
                console.log("ryu");
                hero = "ryu";
                $("#heroSelected").prepend('<img id="heroEntry" src="assets/images/ryuStand.gif"/>');
            }
        }

        /////////////////////////////////////Opponent Select/////////////////////////////////////
        else if ($(this).hasClass("selectHero") && heroSelect === true && opponentSelect === false) {
            if ($(this).hasClass("striderSelect")) {
                $("#opponentSelected").prepend('<img id="heroEntry" src="assets/images/rotatedStriderstand.gif"/>');
                opponentSelect = true;
                console.log("opponent is strider");
            } else if ($(this).hasClass("wolvieSelect")) {
                $("#opponentSelected").prepend('<img id="heroEntry" src="assets/images/wolvieStandmirror.gif"/>');
                opponentSelect = true;
                console.log("opponent is wolvie");
            } else if ($(this).hasClass("cyclopsSelect")) {
                $("#opponentSelected").prepend('<img id="heroEntry" src="assets/images/cyclopsStandmirror.gif"/>');
                opponentSelect = true;
                console.log("opponent is  cyclops");
            } else if ($(this).hasClass("ryuSelect")) {
                $("#opponentSelected").prepend('<img id="heroEntry" src="assets/images/ryuStandmirror.gif"/>');
                opponentSelect = true;
                console.log("opponent is ryu");
            }
            /////////////////////////////////////Attack/////////////////////////////////////
        } else if ($(this).hasClass("attack") && opponentSelect === true) {
            var damage;
            attackCount++;
            console.log(attackCount);
            console.log(hero + " is attacking");
            if (attackCount < 9) {
                if (hero === "strider") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/striderAttack.gif"/>');
                    damage = strider.attack;
                    setTimeout(striderReturn, 1500);

                } else if (hero === "wolvie") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/wolvieAttack.gif"/>');
                    damage = wolvie.attack;
                    setTimeout(wolvieReturn, 3000);
                } else if (hero === "cyclops") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/cyclopsAttack.gif"/>');
                    damage = cyclops.attack;
                    setTimeout(cyclopsReturn, 1500);
                } else if (hero === "ryu") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/ryuAttack.gif"/>');
                    damage = ryu.attack;
                    setTimeout(ryuReturn, 1000);
                }
                ////////////////////////////////////Hyper Combo Attack////////////////////////////////
            } else {
                if (hero === "strider") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/striderHC.gif"/>');
                    damage = strider.hc;
                } else if (hero === "wolvie") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/wolvieHC.gif"/>');
                    damage = wolvie.hc;
                } else if (hero === "cyclops") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/cyclopsHC.gif"/>');
                    damage = cyclops.hc;
                } else if (hero === "ryu") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/ryuHC.gif"/>');
                    damage = ryu.hc;
                }
                attackCount = 0;
            }
            console.log(damage);

        }
    });


});
