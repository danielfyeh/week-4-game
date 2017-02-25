var strider = {
    hp: 2000,
    attack: 5000,
    hc: 4000
}
var wolvie = {
    hp: 4500,
    attack: 60,
    hc: 4000

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

var audio1 = new Audio('playerSelect.mp3')
var fightMusic = new Audio('fightTheme.mp3')
var heroSelect = false;
var opponentSelect = false;
var striderSelected = false;
var wolvieSelected = false;
var cyclopsSelected = false;
var ryuSelected = false;
var opponent;
var hero;
var attackCount = 0;
var heroHP;
var enemyHP;
var opponentDmg=0;

function heroAttack(str) {
    if (str === strider) {
        return 10;
    }
}
function heroDamage(dmg){
	//confirm("You took damage!");
	//confirm(heroHP + " left");
	heroHP = heroHP - dmg;
	console.log(heroHP);
	if(heroHP <= 0){
		alert("you lose!");
	}
	
}
function enemyAttack(str){
	if(heroHP>0){
	heroDamage(opponentDmg);}
}

function striderReturn() {
    $("#heroSelected").html('<img id="heroEntry" src="assets/images/strider-stand.gif"/>');
    $(".attack").removeClass("disabled");
    console.log("strider returned");
}

function wolvieReturn() {
    $("#heroSelected").html('<img id="heroEntry" src="assets/images/wolvieStand.gif"/>');
    $(".attack").removeClass("disabled");
    console.log("wolvie returned");
}

function cyclopsReturn() {
    $("#heroSelected").html('<img id="heroEntry" src="assets/images/cyclopsStand.gif"/>');
    $(".attack").removeClass("disabled");
    console.log("cyclops returned");
}

function ryuReturn() {
    $("#heroSelected").html('<img id="heroEntry" src="assets/images/ryuStand.gif"/>');
    $(".attack").removeClass("disabled");
    console.log("ryu returned");
}

function OpponentDamage(dmg) {
    console.log(dmg);
    enemyHP = enemyHP - dmg;
    console.log(enemyHP);
    if (enemyHP <= 0) {
        alert("you win!");
        opponentSelect = false;
        $("#opponentSelected").html("");
        fightMusic.pause();
        audio1.play();
        $(".heroOpponent").html("Select your destiny");

    }

}




$(document).ready(function() {
    /////////////////////////////////////Music Select////////////////////////////////////
    if (opponentSelect === false) {
        fightMusic.pause();
        audio1.play();
    }

    $(document).on("click", "button", function() {

        /////////////////////////////////////Hero Select/////////////////////////////////////
        if ($(this).hasClass("selectHero") && heroSelect === false) {
            $(".heroOpponent").html("Select your Opponent");

            if ($(this).hasClass("striderSelect")) {
                heroSelect = true;
                hero = "strider";
                heroHP = strider.hp;
                console.log(heroHP);
                console.log(hero);

                $("#heroSelected").prepend('<img id="heroEntry" src="assets/images/strider-stand.gif"/>');
            } else if ($(this).hasClass("wolvieSelect")) {
                heroSelect = true;
                hero = "wolvie";
                heroHP = wolvie.hp;
                console.log("Wolvie");
                $("#heroSelected").prepend('<img id="heroEntry" src="assets/images/wolvieStand.gif"/>');
            } else if ($(this).hasClass("cyclopsSelect")) {
                heroSelect = true;
                hero = "cyclops";
                heroHP = cyclops.hp;
                console.log("cyclops");
                $("#heroSelected").prepend('<img id="heroEntry" src="assets/images/cyclopsStand.gif"/>');
            } else if ($(this).hasClass("ryuSelect")) {
                heroSelect = true;
                console.log("ryu");
                hero = "ryu";
                heroHP = ryu.hp;
                $("#heroSelected").prepend('<img id="heroEntry" src="assets/images/ryuStand.gif"/>');
            }
        }

        /////////////////////////////////////Opponent Select/////////////////////////////////////
        else if ($(this).hasClass("selectHero") && heroSelect === true && opponentSelect === false) {
            if ($(this).hasClass("striderSelect")) {
                $("#opponentSelected").prepend('<img id="heroEntry" src="assets/images/rotatedStriderstand.gif"/>');
                opponentSelect = true;
                enemyHP = strider.hp;
                opponentDmg = strider.attack;
                console.log("opponent is strider");
            } else if ($(this).hasClass("wolvieSelect")) {
                $("#opponentSelected").prepend('<img id="heroEntry" src="assets/images/wolvieStandmirror.gif"/>');
                opponentSelect = true;
                enemyHP = wolvie.hp;
                opponentDmg = wolvie.attack;
                console.log("opponent is wolvie");
            } else if ($(this).hasClass("cyclopsSelect")) {
                $("#opponentSelected").prepend('<img id="heroEntry" src="assets/images/cyclopsStandmirror.gif"/>');
                opponentSelect = true;
                enemyHP = cyclops.hp;
                opponentDmg = cyclops.attack;
                console.log("opponent is  cyclops");
            } else if ($(this).hasClass("ryuSelect")) {
                $("#opponentSelected").prepend('<img id="heroEntry" src="assets/images/ryuStandmirror.gif"/>');
                opponentSelect = true;
                enemyHP = ryu.hp;
                opponentDmg = ryu.attack;
                console.log("opponent is ryu");
            }
            $(".heroOpponent").html("Fight!");
            audio1.pause();
            setTimeout(fightMusic.play(), 500);
            setInterval(enemyAttack, 1500);
            /////////////////////////////////////Attack/////////////////////////////////////
        } else if ($(this).hasClass("attack") && opponentSelect === true) {
            var damage;
            attackCount++;
            console.log(attackCount);
            console.log(hero + " is attacking");


            if (attackCount < 200) {
                if (hero === "strider") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/striderAttack.gif"/>');
                    damage = strider.attack;

                    $(".attack").addClass("disabled");
                    setTimeout(striderReturn, 1500);
                    setTimeout(OpponentDamage(damage), 3000);

                } else if (hero === "wolvie") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/wolvieAttack.gif"/>');
                    damage = wolvie.attack;
                    $(".attack").addClass("disabled");
                    setTimeout(wolvieReturn, 3000);
                    setTimeout(OpponentDamage(damage), 3000);
                } else if (hero === "cyclops") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/cyclopsAttack.gif"/>');
                    damage = cyclops.attack;
                    $(".attack").addClass("disabled");
                    setTimeout(cyclopsReturn, 1500);
                    setTimeout(OpponentDamage(damage), 3000);
                } else if (hero === "ryu") {
                    $("#heroSelected").html('<img id="heroAttacked" src="assets/images/ryuAttack.gif"/>');
                    damage = ryu.attack;
                    $(".attack").addClass("disabled");
                    setTimeout(ryuReturn, 1000);
                    setInterval(OpponentDamage(damage), 3000);
                }
                if (attackCount > 9) {
                    $(".hc").removeClass("disabled");
                }
                ////////////////////////////////////Hyper Combo Attack////////////////////////////////
            }
            console.log(damage);

        } else if ($(this).hasClass("hc") && attackCount >= 10) {



            if (hero === "strider") {
                $("#heroSelected").html('<img id="heroAttacked" src="assets/images/striderHC.gif"/>');
                damage = strider.hc;
                setTimeout(striderReturn, 3200);
                setTimeout(OpponentDamage(damage), 3000);
            } else if (hero === "wolvie") {
                $("#heroSelected").html('<img id="heroAttacked" src="assets/images/wolvieHC.gif"/>');
                damage = wolvie.hc;
                setTimeout(wolvieReturn, 2500);
                setTimeout(OpponentDamage(damage), 3000);
            } else if (hero === "cyclops") {
                $("#heroSelected").html('<img id="heroAttacked" src="assets/images/cyclopsHC.gif"/>');
                damage = cyclops.hc;
                setTimeout(cyclopsReturn, 2500);
                setTimeout(OpponentDamage(damage), 3000);
            } else if (hero === "ryu") {
                $("#heroSelected").html('<img id="heroAttacked" src="assets/images/ryuHC.gif"/>');
                damage = ryu.hc;
                setTimeout(ryuReturn, 1500);
                setTimeout(OpponentDamage(damage), 3000);
            }

        }
    });


});
