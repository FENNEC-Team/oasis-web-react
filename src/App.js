import logo from './logo.svg';
import './App.css';
import './style.css';
import logo2 from './image/mdi_location.png'
import profileFill from './image/iconamoon_profile-fill.svg'
import arrowDown from './image/iconoir_nav-arrow-down.svg'

import {useRef, useEffect} from 'react';
import React from 'react';
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

function App() {
  const ref = useRef(null);
  const switchButtons = useRef([]);
  const floorButtons = useRef([]);
  function switchButtonsFunc(event) {
    switchButtons.current.forEach((el) => {
      if(el!=event.target){
        el.className="switch-buttons"
      }else{
        el.className="switch switch-buttons";
      }
    })
  }
  function floorButtonsFunc(event) {
    floorButtons.current.forEach((el) => {
      if(el!=event.target){
        el.className="floor-button-inactive"
      }else{
        el.className="floor-button-inactive btn_aqua";
      }
    })
  }
  useEffect(() => {
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
    });
  }, []);
  return (
    <>
    <base href='https://fonts.googleapis.com/css2?family=Manrope&display=swap'>

    </base>
  <div ref={ref} className="grid_main">
    <menu>
      <div className="position_menu">
        <img src={logo2} alt="address" />
        <address>Каширское шоссе, 31</address>
      </div>
      <div className="flex_drop">
        <h2>Мой офис</h2>
        <a className="map-letter"><h3>Карта</h3></a>
        <a href="http://"><h3>Мои бронирования</h3></a>
      </div>
    </menu>
    <main style={{opacity: "0"}}>
      <h1>Карта офиса</h1>
      <div className="change_option">
        <button ref={(element) => {switchButtons.current[0] = element}} className="switch-buttons reservation-button" onClick={switchButtonsFunc}>Бронирование</button>

        <button ref={(element) => {switchButtons.current[1] = element}} className="switch-buttons" onClick={switchButtonsFunc}>Загруженность</button>
      </div>

      <div className="map room-selector" style={{opacity: "0"}} id="map">
        <svg
          className="wrapper"
          _ngcontent-qir-c274=""
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
          viewBox="-20 -20 618.88 407.99"
        >
          <defs _ngcontent-qir-c274="">
            <filter
              _ngcontent-qir-c274=""
              id="f2"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                _ngcontent-qir-c274=""
                result="blurOut"
                in="StrokePaint"
                stdDeviation="3"
              ></feGaussianBlur>
            </filter>
            <pattern
              _ngcontent-qir-c274=""
              id="New_Pattern_Swatch_1"
              data-name="New Pattern Swatch 1"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 60 60"
            >
              <line
                _ngcontent-qir-c274=""
                x1="-113.26"
                y1="123.26"
                x2="3.26"
                y2="6.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-103.26"
                y1="133.26"
                x2="13.26"
                y2="16.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-93.26"
                y1="143.26"
                x2="23.26"
                y2="26.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-83.26"
                y1="153.26"
                x2="33.26"
                y2="36.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-73.26"
                y1="163.26"
                x2="43.26"
                y2="46.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-63.26"
                y1="173.26"
                x2="53.26"
                y2="56.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-53.26"
                y1="123.26"
                x2="63.26"
                y2="6.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-43.26"
                y1="133.26"
                x2="73.26"
                y2="16.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-33.26"
                y1="143.26"
                x2="83.26"
                y2="26.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-23.26"
                y1="153.26"
                x2="93.26"
                y2="36.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-13.26"
                y1="163.26"
                x2="103.26"
                y2="46.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-3.26"
                y1="173.26"
                x2="113.26"
                y2="56.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="6.74"
                y1="123.26"
                x2="123.26"
                y2="6.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="16.74"
                y1="133.26"
                x2="133.26"
                y2="16.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="26.74"
                y1="143.26"
                x2="143.26"
                y2="26.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="36.74"
                y1="153.26"
                x2="153.26"
                y2="36.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="46.74"
                y1="163.26"
                x2="163.26"
                y2="46.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="56.74"
                y1="173.26"
                x2="173.26"
                y2="56.74"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-113.26"
                y1="63.26"
                x2="3.26"
                y2="-53.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-103.26"
                y1="73.26"
                x2="13.26"
                y2="-43.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-93.26"
                y1="83.26"
                x2="23.26"
                y2="-33.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-83.26"
                y1="93.26"
                x2="33.26"
                y2="-23.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-73.26"
                y1="103.26"
                x2="43.26"
                y2="-13.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-63.26"
                y1="113.26"
                x2="53.26"
                y2="-3.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-53.26"
                y1="63.26"
                x2="63.26"
                y2="-53.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-43.26"
                y1="73.26"
                x2="73.26"
                y2="-43.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-33.26"
                y1="83.26"
                x2="83.26"
                y2="-33.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-23.26"
                y1="93.26"
                x2="93.26"
                y2="-23.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-13.26"
                y1="103.26"
                x2="103.26"
                y2="-13.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-3.26"
                y1="113.26"
                x2="113.26"
                y2="-3.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="6.74"
                y1="63.26"
                x2="123.26"
                y2="-53.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="16.74"
                y1="73.26"
                x2="133.26"
                y2="-43.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="26.74"
                y1="83.26"
                x2="143.26"
                y2="-33.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="36.74"
                y1="93.26"
                x2="153.26"
                y2="-23.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="46.74"
                y1="103.26"
                x2="163.26"
                y2="-13.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="56.74"
                y1="113.26"
                x2="173.26"
                y2="-3.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-113.26"
                y1="3.26"
                x2="3.26"
                y2="-113.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-103.26"
                y1="13.26"
                x2="13.26"
                y2="-103.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-93.26"
                y1="23.26"
                x2="23.26"
                y2="-93.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-83.26"
                y1="33.26"
                x2="33.26"
                y2="-83.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-73.26"
                y1="43.26"
                x2="43.26"
                y2="-73.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-63.26"
                y1="53.26"
                x2="53.26"
                y2="-63.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-53.26"
                y1="3.26"
                x2="63.26"
                y2="-113.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-43.26"
                y1="13.26"
                x2="73.26"
                y2="-103.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-33.26"
                y1="23.26"
                x2="83.26"
                y2="-93.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-23.26"
                y1="33.26"
                x2="93.26"
                y2="-83.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-13.26"
                y1="43.26"
                x2="103.26"
                y2="-73.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="-3.26"
                y1="53.26"
                x2="113.26"
                y2="-63.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="6.74"
                y1="3.26"
                x2="123.26"
                y2="-113.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="16.74"
                y1="13.26"
                x2="133.26"
                y2="-103.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="26.74"
                y1="23.26"
                x2="143.26"
                y2="-93.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="36.74"
                y1="33.26"
                x2="153.26"
                y2="-83.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="46.74"
                y1="43.26"
                x2="163.26"
                y2="-73.26"
                className="stroke-pattern"
              ></line>
              <line
                _ngcontent-qir-c274=""
                x1="56.74"
                y1="53.26"
                x2="173.26"
                y2="-63.26"
                className="stroke-pattern"
              ></line>
            </pattern>
          </defs>
          <g _ngcontent-qir-c274="">
            <path
              _ngcontent-qir-c274=""
              className="room-border ng-star-inserted"
              d="M186.21,130.05H216.37V160H186.21Z"
            ></path>
          
          </g>
          <g _ngcontent-qir-c274="">
            <path
              _ngcontent-qir-c274=""
              className="stroked-element ng-star-inserted"
              fill="url(/StartUo/#New_Pattern_Swatch_1)"
              d="M562.71,225V354h-290V319H418.37a6.09,6.09,0,0,0,6.09-6.09V225Z"
            ></path>
            <path
              _ngcontent-qir-c274=""
              className="stroked-element ng-star-inserted"
              fill="url(/StartUo/#New_Pattern_Swatch_1)"
              d="M8.09,130V347.91A6.09,6.09,0,0,0,14.18,354h54V130Z"
            ></path>
            <path
              _ngcontent-qir-c274=""
              className="stroked-element ng-star-inserted"
              fill="url(/StartUo/#New_Pattern_Swatch_1)"
              d="M216.37,49.82H358.8V92.5H216.37Z"
            ></path>
           
          </g>
          <g _ngcontent-qir-c274="" id="0" className="ng-star-inserted">
            <path
              _ngcontent-qir-c274=""
              className="room-bg"
              d="M68.18,130V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V160H186.21V130Z"
            ></path>
            <path
              _ngcontent-qir-c274=""
              className="room-border"
              d="M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,130H186.21V160H218.5"
            ></path>
            <path
              _ngcontent-qir-c274=""
              className="room-border room-border-glow"
              d="M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,130H186.21V160H218.5"
            ></path>
            <text
              _ngcontent-qir-c274=""
              textAnchor="middle"
              className="room-text"
              x="142"
              y="240.8"
            >
              Kitchen
            </text>
          </g>
          <g _ngcontent-qir-c274="" id="1" className="ng-star-inserted">
            <path
              _ngcontent-qir-c274=""
              className="room-bg"
              d="M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09,6.09,0,0,0,8.09,130H96Z"
            ></path>
            <path
              _ngcontent-qir-c274=""
              className="room-border"
              d="M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09,6.09,0,0,0,8.09,130H96"
            ></path>
            <text
              _ngcontent-qir-c274=""
              textAnchor="middle"
              className="room-text"
              x="109"
              y="66"
            >
              Bedroom
            </text>
          </g>
          <g _ngcontent-qir-c274="" id="3" className="ng-star-inserted">
            <path
              _ngcontent-qir-c274=""
              className="room-bg"
              d="M216.37,354V92.5H358.8V225H424.39V319H272.71V354Z"
            ></path>
            <path
              _ngcontent-qir-c274=""
              className="room-border"
              d="M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,6.09,0,0,1,-6.09,6.09H272.71V356"
            ></path>
            <path
              _ngcontent-qir-c274=""
              className="room-border room-border-glow"
              d="M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,6.09,0,0,1,-6.09,6.09H272.71V356"
            ></path>
            <text
              _ngcontent-qir-c274=""
              textAnchor="middle"
              className="room-text"
              x="320"
              y="273"
            >
              Hallway
            </text>
          </g>
          <g _ngcontent-qir-c274="" className="ng-star-inserted" id="2">
            <path
              _ngcontent-qir-c274=""
              className="room-bg"
              d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212Z"
            ></path>
            <path
              _ngcontent-qir-c274=""
              className="room-border"
              d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212"
            ></path>
            <path
              _ngcontent-qir-c274=""
              className="room-border room-border-glow"
              d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212"
            ></path>
            <text
              _ngcontent-qir-c274=""
              textAnchor="middle"
              className="room-text"
              x="468"
              y="134"
            >
              Living Room
            </text>
          </g>
         
        </svg>
      </div>

      <div className="floor" style={{opacity: "0"}}>
        <div style={{textAlign: "center"}}>Этажи</div>
        <div style={{textAlign: "center"}} onClick={floorButtonsFunc} ref={(element) => {floorButtons.current[0] = element}} className="floor-button-inactive">1</div>
        <div style={{textAlign: "center"}} onClick={floorButtonsFunc} ref={(element) => {floorButtons.current[1] = element}}className="floor-button-inactive">2</div>
        <div style={{textAlign: "center"}} onClick={floorButtonsFunc} ref={(element) => {floorButtons.current[2] = element}}className="floor-button-inactive">3</div>
      </div>

      <div className="room" style={{opacity: "0"}}>
        <div className="grid_room">
          <div className="name_room room-number">Комната 1</div>
          <div className="status_room">
            <p>Статус помещения:</p>
            <p className="reserved room-status">Забронировано</p>
          </div>
          <div className="flex_between">
            <div className="status_room">
              <p>Температура</p>
              <p className="room-temperature">24 °C</p>
            </div>
            <div className="status_room">
              <p>Влажность</p>
              <p className="room-humidity">24 %</p>
            </div>
          </div>
          <div className="flex_between">
            <div className="status_room">
              <p>Загруженность</p>
              <p className="room-workload">1 человек</p>
            </div>
            <div className="status_room">
              <p>Вместимость</p>
              <p className="room-capacity">5 человек</p>
            </div>
          </div>
          <form action="">
            <button className="reserve btn_reserve">Забронировать</button>
          </form>
        </div>
      </div>

      <div className="profile">
        <p className="name_profile">Лебедев А.А.</p>
        <img src={profileFill} alt="icon profile" />
        <img src={arrowDown} alt="arrow" />
      </div>

     
    </main>
  </div>
    </>
  );
}

export default App;
