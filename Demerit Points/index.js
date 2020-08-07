
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

// const output = checkSpeed(75.2);
// console.log(output);

// function checkSpeed(speed) {
//     if(speed < 70){
//         return "OK";
//     }
//     else if(speed > 70 && speed < 135){
//         speed = (speed -70) / 5;
//        
//         return  Math.floor(speed)+ " points"  
//     }
//     else if(speed > 135){
//         return  "suspended"  
//     }
// }
const output = checkSpeed(85.6);
 console.log(output);

function checkSpeed(speed) {
    if(speed < 70){
      return "OK";
      }

        const speedLimit = 70;
        const points =(speed - speedLimit) / 5;

      if(points < 12){
        return Math.floor(points);
      } else{
      return  "suspended"  
      }
}