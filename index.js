
var artist=String['Botticelli', 'Leonardo Da vinci', 'Vicent Van Gogh']; 
var userChoice= new Array();

function getRandomImage() {  
    //declare an array to store the images  
    let paintings = new Array();  
     
    //insert the URL of images in array  
    for(i=0;i<3; i++){
        paintings[i]=new Image();
        paintings[i].src='./assets/painting/painting'+i+'.jpg';
        console.log("painting #: "+ paintings[i].src);
    }
        
    //generate a number and provide to the image to generate randomly  
    let number = Math.floor(Math.random()*paintings.length);  
    console.log("current painting #: "+ number);
    if (number==0){
        
    }  
    //return the images link generated by a random number  
    return "background-image:url('"+paintings[number].src+"')"; 
    //document.body.style.backgroundImage= "url("+paintings[number]+"')";
}    

createTable();
createChoices();
// create and assign images value to array pics   
var pics=new Array();
for(i=0;i<=8;i++){
    pics[i]=new Image(); pics[i].src='./assets/images/image'+i+'.gif';
}

var map=new Array(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8)
var user=new Array();
var temparray=new Array();
var clickarray=new Array(0,0);
var ticker, sec, min, ctr, id=0, oktoclick, finished;
let Points=200;
//set initial
function init(){
clearTimeout(id);
for(i=0;i<=15;i++){user[i]=0;}
//ticker=0; min=0; sec=0; 
ctr=0; finished=0;
oktoclick=true;
document.forms["f"].b.value="Your score: "+ Points;
scramble();
//id=setInterval('runclk()', 995);
for(i=0;i<=15;i++){
document.images[('img'+i)].src="./assets/images/image0.gif";
document.images[('img'+i)].alt="";
}}
//create Point Count

//create timer
/*function runclk(){
    min=Math.floor(ticker/60);
    sec=(ticker-(min*60))+'';
    if(sec.length==1){sec="0"+sec};
    ticker++;
    //document.forms["f"].b.value="    "+min+":"+sec+"    ";
}*/
//comparision
function scramble(){
    for(z=0;z<5;z++){
        for(x=0;x<=15;x++){
        temparray[0]=Math.floor(Math.random()*16);
        temparray[1]=map[temparray[0]];
        temparray[2]=map[x];
        map[x]=temparray[1];
        map[temparray[0]]=temparray[2];
    }}
}
//Flip condition
function showimage(but){
    
    if(oktoclick){
        oktoclick=false;
        Points= Points - 5;
        console.log(Points);
        document.forms["f"].b.value="  Your score: " + Points;
        document.images[('img'+but)].src='./assets/images/image'+map[but]+'.gif';
        document.images[('img'+but)].alt='Image'+map[but];
    if(ctr==0){
        ctr++;
        Points=Points + 5;
        document.forms["f"].b.value="  Your score: " + Points;
        console.log(Points);
        clickarray[0]=but;
        oktoclick=true;
        
    }else{
        clickarray[1]=but;
        ctr=0;
        setTimeout('returntoold()', 600);
    }}
}
//condition to hold-fade and flip back
function returntoold(){
    if((clickarray[0]==clickarray[1])&&(!user[clickarray[0]])){
        document.images[('img'+clickarray[0])].src="./assets/images/image0.gif";
        document.images[('img'+clickarray[0])].alt="";
        oktoclick=true;
    }
    else{
        if(map[clickarray[0]]!=map[clickarray[1]]){
        if(user[clickarray[0]]==0){
            document.images[('img'+clickarray[0])].src="./assets/images/image0.gif";
            document.images[('img'+clickarray[0])].alt="";
        }
    if(user[clickarray[1]]==0){
        document.images[('img'+clickarray[1])].src="./assets/images/image0.gif";
        document.images[('img'+clickarray[1])].alt="";
    }}
    if(map[clickarray[0]]==map[clickarray[1]]){
    if(user[clickarray[0]]==0&&user[clickarray[1]]==0)finished++;
        user[clickarray[0]]=1;
        user[clickarray[1]]=1;
        document.images[('img'+clickarray[0])].style.opacity = 0;
        document.images[('img'+clickarray[1])].style.opacity = 0;
        //make the right couple images invisible
}
    if(finished>=8){
        alert('You did it in '+document.forms["f"].b.value+' !');
        init();
}   else{
        oktoclick=true;

        
}}}

//create a table of images 4x4
function createTable(){
    var t='<table cellpadding="0" cellspacing="0" border="0" style="'+ getRandomImage() +'">';
    for(r=0;r<=3;r++){
    t+='<tr>';
    for(c=0;c<=3;c++)t+='<td align="center"><a href="javascript:showimage('+((4*r)+c)+')" onClick="this.blur()"><img src="./assets/images/image0.gif" name="img'+((4*r)+c)+'" alt="" border="0"></a></td>';
    t+='</tr>';
    }
    t+='</table><br><br><form name="f"><input type="button" value="Downloading images...." name="b" onClick="init()"></form><br/>';

    document.write(t);

    window.onload=init;
}
function createChoices(){
    
    
}