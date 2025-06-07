var speed1 = document.getElementById('trip1');

var trip1 = {
  distance: 150,
  time: 2,
  speed: function() {
    return this.distance / this.time;
  }
}

speed1.innerHTML = "Trip 1: speed: " +  trip1.speed();

var printTrip2 = document.getElementById('trip2');
var distance = 20, time = 10;

var trip2 = {
    distance: 150,
    time: 2,
    speed: function(){return distance/time}
}

printTrip2.innerHTML = "Trip 2: speed: " +  trip2.speed();

var printTrip3 = document.getElementById('trip3');

var trip3 = new Object();

trip3.distance = 120;
trip3.time = 3;
trip3.speed = function(){return this.distance / this.time};

printTrip3.innerHTML = "Trip 3: speed: " +  trip3.speed();


// Creating an object to use a constructor function
var printTrip4 = document.getElementById('trip4');
var printTrip5 = document.getElementById('trip5');

function traveling(distanceT, timeT){
    this.distance = distanceT;
    this.time = timeT;
    this.speed4 = function(){return this.distance / this.time}
}

var trip4 = new traveling(150, 5);
printTrip4.innerHTML = "Trip 4: Distance: " + trip4.distance + ", Time: " + trip4.time + ", Speed: " + trip4.speed4();

var f1 = new traveling(140, 4);

printTrip5.innerHTML = "Trip 5: Distance: " + f1.distance + ", Time: " + f1.time + ", Speed: " + f1.speed4();

traveling.prototype.velocity = function(){return this.time/this.distance};

var trip6 = new traveling(656, 98);
document.getElementById('trip6').innerHTML  = "Trip 6: Distance: " + trip6.distance + "Time: " + trip6.time + " Speed: " + trip6.velocity().toFixed(3);








