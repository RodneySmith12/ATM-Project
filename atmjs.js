var nonChar = '';
var users = {
    user : {
        Name: "Rod",
        Pin: 1234,
        Balance: 2000,
    }
};

function balance(){
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Your balance is :</h2><br>" + 'users.user.newbalance' ;
    change[2].setAttribute("onClick", " ");
};

function cancel(){
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Pin Accepted</h2><br>" + '<h5>Withdrawl</h5><br><h5>Deposit</h5><br><h5>Balance</h5>';
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "deposit()");
    change[2].setAttribute("onClick", "balance()");
    change[3].setAttribute("onClick", "");
    change[4].setAttribute("onClick", "");
    change[5].setAttribute("onClick", "");
};

function startScreen() {
    var block = document.getElementById('output');
    block.innerHTML = '<input type="password" name="" id="pin" class="keyinputed" placeholder="Enter Pin">';
    // console.log('Here');
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "validPin()");
    change[1].setAttribute("onClick", "validPin()");
    change[2].setAttribute("onClick", "validPin()");
    change[3].setAttribute("onClick", "validPin()");
    change[4].setAttribute("onClick", "validPin()");
    change[5].setAttribute("onClick", "validPin()");
};

function validPin(){
    var pin = document.getElementById('pin');
    if (Number(pin.value) === users.user.Pin){
        var block = document.getElementById('output');
        block.innerHTML = "<h2>Pin Accepted</h2><br>" + '<h5>Withdrawl</h5><br><h5>Deposit</h5><br><h5>Balance</h5>';
        var change = document.getElementsByTagName("button");
        change[0].setAttribute("onClick", "withdraw()");
        change[1].setAttribute("onClick", "deposit()");
        change[2].setAttribute("onClick", "balance()");
        change[3].setAttribute("onClick", "");
        change[4].setAttribute("onClick", "");
        change[5].setAttribute("onClick", "");
    }else{
        alert("Invalid Pin");
    }
};

function withdraw(){
    var block = document.getElementById('output');
    block.innerHTML =  '<h5>$20 <span class="right">$80</span></h5><br><h5>$40 <span class="right">$100</span></h5><br><h5>$60 <span class="right">$120</span></h5>';
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "w20()");
    change[1].setAttribute("onClick", "w40()");
    change[2].setAttribute("onClick", "w60()");
    change[3].setAttribute("onClick", "w80()");
    change[4].setAttribute("onClick", "w100()");
    change[5].setAttribute("onClick", "w120()");
};

function w20(){
    var newbalance = users.user.Balance - 20;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");
};

function w40(){
    var newbalance = users.user.Balance - 40;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");
};

function w60(){
    var newbalance = users.user.Balance - 60;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");
};

function w80(){
    var newbalance = users.user.Balance - 80;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");

};


function deposit(){
    var block = document.getElementById('output');
    block.innerHTML =  '<h4>What amount whould you like to deposit</h4><br><h5>$20</h5><br><h5>$40</h5><br><h5>$60</h5><br><h5>$80</h5><br><h5>$100</h5><br><h5>$120</h5>';
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "d20()");
    change[1].setAttribute("onClick", "d40()");
    change[2].setAttribute("onClick", "d60()");
    change[3].setAttribute("onClick", "d80()")
    change[4].setAttribute("onClick", "d100()");
    change[5].setAttribute("onClick", "d120()");
};

function d20(){
    var newbalance = users.user.Balance + 20;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");
};

function d40(){
    var newbalance = users.user.Balance + 40;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");
};

function d60(){
    var newbalance = users.user.Balance + 60;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");
};

function d80(){
    var newbalance = users.user.Balance + 80;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");
};

function d100(){
    var newbalance = users.user.Balance + 100;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");
};

function d120(){
    var newbalance = users.user.Balance + 120;
    users.user.Balance = newbalance;
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Withdraw Complete Your Current balance is:<br>" + newbalance + "<br>Would you like to Continue(left hand side) or Cancel(right hand side) </h2>" ;
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "withdraw()");
    change[1].setAttribute("onClick", "withdraw()");
    change[2].setAttribute("onClick", "withdraw()");
    change[3].setAttribute("onClick", "cancel()");
    change[4].setAttribute("onClick", "cancel()");
    change[5].setAttribute("onClick", "cancel()");
};


function ShowPressedButton(btn){
    PressedButton(nonChar+=btn)
    console.log(btn);
};

function PressedButton(btn){
    var key = document.querySelector(".keyinputed");
    key.value = btn
    console.log(btn);
};     

function FourthScreen(){
    var block = document.getElementById('output');
    block.innerHTML = "<h2>Would you like to Deposit?</h2>";
};
