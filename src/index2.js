const main = document.querySelector("main")
if(main){
const roomsParent = document.querySelector(".wrapper");
const rooms = [...document.querySelectorAll("g.ng-star-inserted")];

let active = null;
const roomNumber = document.querySelector(".room-number");
const roomStatus = document.querySelector(".room-status");
const roomTemperature = document.querySelector(".room-temperature");
const roomHumidity = document.querySelector(".room-humidity");
const roomWorkload = document.querySelector(".room-workload");
const roomCapacity = document.querySelector(".room-capacity");
rooms.forEach((x) => {
  x.addEventListener("click", (event) => {
    if (active === null) {
      active = x;
      active.classNameList.toggle("selected-room");
      active = x;
    } else {
      active.classNameList.toggle("selected-room");
      active = x;
      active.classNameList.toggle("selected-room");
    }
    roomsParent.insertBefore(active, null);
    
  })
});


for(let i =0; i<rooms.length; i++){
  console.log(rooms[i])
  rooms[i].addEventListener("click", (event) => {
    document.querySelector(".room").style.opacity = 1;
    roomNumber.textContent = `Комната ${cards[i].roomNumber}`;
    roomStatus.textContent = cards[i].status;

    if(cards[i].status == "Свободно"){
      roomStatus.style.backgroundColor = "green";
      roomStatus.style.color = "white";
    } 
    else{
      roomStatus.style.backgroundColor = "#EE777F";
      roomStatus.style.color = "black";
    }
    roomTemperature.textContent = cards[i].temperature;  
    roomHumidity.textContent = cards[i].humidity;  
    roomWorkload.textContent = cards[i].workload;  
    roomCapacity.textContent = cards[i].capacity;  
  });
}

const floorButtons = [...document.querySelectorAll(".floor-button-inactive")];
floorButtons.forEach((x) =>
  x.addEventListener("click", (event) => {
    floorButtons.forEach((x) =>
      x.classNameList.remove("btn_aqua")
    );
      active = x;
      active.classNameList.toggle("btn_aqua");
  })
);

const switchButtons = [...document.querySelectorAll(".switch-buttons")];
switchButtons.forEach((x) =>
  x.addEventListener("click", (event) => {
    switchButtons.forEach((x) =>
      x.classNameList.remove("switch")
    );
      active = x;
      active.classNameList.toggle("switch");
  })
);

const mapLetter = document.querySelector(".map-letter");
mapLetter.addEventListener("click", (event) => {
  document.querySelector("main").style.opacity = 1;
})
const reservationButton = document.querySelector(".reservation-button");
reservationButton.addEventListener("click", (event) => {
  document.querySelector(".map").style.opacity = 1;
  document.querySelector(".floor").style.opacity = 1;
  
})

document.addEventListener( 'click', (e) => {
  const withinBoundaries = e.target.closest(".room");
  const withinBoundaries2 = e.target.closest(".map");
  if ( ! (withinBoundaries||withinBoundaries2)) {
    document.querySelector(".room").style.opacity = 0;
  }
})


const cards = [];
cards[0] = {
roomNumber: "1",
status: "Свободно",
temperature: "10 °C",
humidity: "15%",
workload: "2",
capacity: "4"
};
cards[1] = {
roomNumber: "2",
status: "Забронировано",
temperature: "15 °C",
humidity: "12%",
workload: "1",
capacity: "8"
};
cards[2] = {
roomNumber: "3",
status: "Свободно",
temperature: "20 °C",
humidity: "13%",
workload: "4",
capacity: "9"
};
cards[3] = {
roomNumber: "4",
status: "Забронировано",
temperature: "21 °C",
humidity: "14%",
workload: "3",
capacity: "12"
};
cards[4] = {
roomNumber: "5",
status: "Забронировано",
temperature: "24 °C",
humidity: "16%",
workload: "1",
capacity: "5"
};
};