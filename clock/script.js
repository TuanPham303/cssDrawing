var d = new Date()
var hours = d.getHours()
var minutes = d.getMinutes()
var seconds = d.getSeconds()
if (hours>12) {
   hours-=12
}
var hourDeg = hours*30
var minDeg = minutes*6
var secDeg = seconds*6
console.log(hours)