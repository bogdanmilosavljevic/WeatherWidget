const weatherData = {"tempUnit":"C","windSpeedUnit":"m/s","days":[{"day":"Mon","temp":26,"windDirection":"north-east","windSpeed":10,"type":"sunny"},{"day":"Tue","temp":14,"windDirection":"east","windSpeed":14,"type":"rainy"},{"day":"Wed","temp":17,"windDirection":"south-east","windSpeed":20,"type":"cloudy"},{"day":"Thu","temp":14,"windDirection":"south","windSpeed":14,"type":"rainy"},{"day":"Fri","temp":14,"windDirection":"south-west","windSpeed":14,"type":"rainy"},{"day":"Sat","temp":14,"windDirection":"west","windSpeed":15,"type":"cloudy"},{"day":"Sun","temp":22,"windDirection":"north-west","windSpeed":14,"type":"sunny"}]};
let days = weatherData.days; //izvlacimo listu dana sa podacima o vremenu u zaseban objekat

//za svaki dostupan dan uzimamo dan i temperaturu i upisujemo u listu kao list item
//svaki list item takodje ima ID, ovo se koristi za izvlacenje podataka za popunjavanje vidzeta
let listHTML = ""; //ovo ce biti html kod liste
for (i in days){ 
    listHTML += "<li id=\"" +i+ "\" onmouseover=\"listHover(this)\" onmouseout=\"listUnhover(this)\">" + days[i].day +" "+ days[i].temp+"°C"+ "</li>" 
};
document.getElementById("dataList").innerHTML = listHTML;
popuniZaPrvi(); //automatski popunjava vidzet za prvi dan pre nego sto korisnik klikne na neki dan

//ova funkcija automatski popunjava vidzet za prvi dan
function popuniZaPrvi(){
    document.getElementById("day").innerHTML = days[0].day;
    document.getElementById("temp").innerHTML = days[0].temp + "°C";
    document.getElementById("windDirection").innerHTML = "<img src=\"https://i.imgur.com/iWDQ3EW.png\" width=\"100\" height=\"100\" id =\"windArrow\"></img>";
    document.getElementById("windSpeed").innerHTML = days[0].windSpeed + "km/h";
    document.getElementById("type").innerHTML = days[0].type;
    //rotiranje strelice za smer vetra
    let windArrowRot = 0;
    let windDir = days[0].windDirection;
    let windArrowImg = document.getElementById("windArrow");
    if(windDir == "north-east") windArrowImg.style.transform = 'rotate(45deg)';
    if(windDir == "east") windArrowImg.style.transform = 'rotate(90deg)';
    if(windDir == "south-east") windArrowImg.style.transform = 'rotate(135deg)';
    if(windDir == "south") windArrowImg.style.transform = 'rotate(180deg)';
    if(windDir == "south-west") windArrowImg.style.transform = 'rotate(225deg)'; 
    if(windDir == "west") windArrowImg.style.transform = 'rotate(270deg)';
    if(windDir == "north-west") windArrowImg.style.transform = 'rotate(315deg)';   
}

//popunjavanje vidzeta prilikom klika na listu
dataList.onclick = function(event){
    let id = (event.target.id);
    document.getElementById("day").innerHTML = days[id].day;
    document.getElementById("temp").innerHTML = days[id].temp + "°C";
    document.getElementById("windDirection").innerHTML = "<img src=\"https://i.imgur.com/iWDQ3EW.png\" width=\"100\" height=\"100\" id =\"windArrow\"></img>";
    document.getElementById("windSpeed").innerHTML = days[id].windSpeed + "km/h";
    document.getElementById("type").innerHTML = days[id].type;
    //rotiranje strelice za smer vetra
    let windArrowRot = 0;
    let windDir = days[id].windDirection;
    let windArrowImg = document.getElementById("windArrow");
    if(windDir == "north-east") windArrowImg.style.transform = 'rotate(45deg)';
    if(windDir == "east") windArrowImg.style.transform = 'rotate(90deg)';
    if(windDir == "south-east") windArrowImg.style.transform = 'rotate(135deg)';
    if(windDir == "south") windArrowImg.style.transform = 'rotate(180deg)';
    if(windDir == "south-west") windArrowImg.style.transform = 'rotate(225deg)'; 
    if(windDir == "west") windArrowImg.style.transform = 'rotate(270deg)';
    if(windDir == "north-west") windArrowImg.style.transform = 'rotate(315deg)';
}

//highlight-ovanje elementa liste kada korisnik predje misem preko elementa
function listHover(obj){
    obj.style = "font-weight: bold;";
}
function listUnhover(obj){
    obj.style = "font-weight: normal;";
}