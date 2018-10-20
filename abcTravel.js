//home page js

var locations = {
  ames : {id: "ames", weather: "", dayCost: 25, inUS: true, transTo: "Carz", transAt: "Walk Public Carz", activity: "Outdoors Kids Pets Free"},
  minneapolis : {id: "minneapolis", weather: "Snow", dayCost: 50, inUS: true, transTo: "Carz Bus", transAt: "Scooter Walk Public", activity: "Sports Shopping Eat"},
  newYork : {id: "newYork", weather: "Snow", dayCost: 75, inUS: true, transTo: "Plane", transAt: "Walk Public", activity: "Shopping Eat"},
  tampa : {id: "tampa", weather: "Hot", dayCost: 50, inUS: true, transTo: "Plane", transAt: "Scooter Walk", activity: "Outdoors Kids"}

}

function submitA() {
  var i;
  for (i = 0; i < document.forms["answers"].length; i++) {
    console.log(document.forms["answers"].elements[i]);
    if (document.forms["answers"].elements[i].parentElement.id == "q1") {
      console.log("yay!");
    }
  }
}
