function getTime() {
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = String(date.getSeconds()).padStart(2,"0");
    let format = HH >= 12 ? 'PM' : 'AM';
    HH = (HH % 12) || 12;
    MM =MM < 10 ? "0"+MM:MM;
    if(HH < 10){
        HH = "0"+HH;
    }
    document.getElementsByClassName("flex2")[0].innerText =HH ;
    document.getElementsByClassName("flex4")[0].innerText = MM;
    document.getElementsByClassName("flex6")[0].innerText = SS;
    document.getElementsByClassName("flex7")[0].innerText = format;
    if(format=="AM"){
        document.getElementsByClassName("div13")[0].innerText ="GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementsByClassName("div1")[0].innerText ="GOOD MORNING!! WAKE UP !!"
        document.getElementsByClassName("img1")[0].src = "./Component 30 – 1.jpg"
    }
    if(HH>=1&&HH<=3&&format=="PM"){
        document.getElementsByClassName("div13")[0].innerText ="LET'S HAVE SOME LUNCH !!"
        document.getElementsByClassName("div1")[0].innerText ="GOOD AFTERNOON !! TAKE SOME SLEEP"
        document.getElementsByClassName("img1")[0].src = "./lunch.png"
    }
    if(HH>=4&&HH<=7&&format=="PM"){
        document.getElementsByClassName("div13")[0].innerText ="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        document.getElementsByClassName("div1")[0].innerText ="GOOD EVENING !!"
        document.getElementsByClassName("img1")[0].src = "./evng.png"
    }
    if(HH>=8&&HH<=11&&format=="PM"){
        document.getElementsByClassName("div13")[0].innerText ="CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementsByClassName("div1")[0].innerText ="GOOD NIGHT !!"
        document.getElementsByClassName("img1")[0].src = "./good_night.png"
    }
    setTimeout(getTime,1000);
    }
 getTime();

function execute(){
     let sel = document.getElementById("select1");
     let text =sel.options[sel.selectedIndex].innerText
    document.getElementById("text").innerText =text 
    let sel1 = document.getElementById("select2");
     let text1 =sel1.options[sel1.selectedIndex].innerText
    document.getElementById("text1").innerText =text1 
    let sel2 = document.getElementById("select3");
     let text2 =sel2.options[sel2.selectedIndex].innerText
    document.getElementById("text2").innerText =text2 
    let sel3 = document.getElementById("select4");
     let text3 =sel3.options[sel3.selectedIndex].innerText
    document.getElementById("text3").innerText =text3 
    
} 

