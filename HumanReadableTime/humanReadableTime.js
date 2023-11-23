 humanReadable  = (value) => {
 let seconds = 0;
 let minutes = 0;
 let hours = 0;
 if (value <= 59){
          if (value<10){
          return `00:00:0${value}`
          }
  return `00:00:${value}`;
 } else if (value <= 3599 && value > 59){
   minutes = Math.floor(value / 60)
   seconds = value % 60
          if (minutes < 10 && seconds < 10){
          return `00:0${minutes}:0${seconds}`;
          }else if (minutes < 10){
           return `00:0${minutes}:${seconds}`;
          }
  return `00:${minutes}:${seconds}`
  } else if (value <= 359999 && value > 60){
    hours = Math.floor(value/3600);
    minutes = Math.floor( (value % 3600) / 60);
    seconds = value % 60;
          if(hours < 10){
              return `0${hours}:0${minutes}:0${seconds}`
          }else if (seconds < 10 && minutes < 10){
              return `${hours}:0${minutes}:0${seconds}`
          }else return `${hours}:${minutes}:${seconds}`
 }
}

 humanReadable = (value) => {
     let hours = Math.floor(value / 3600);
     let minutes = Math.floor((value % 3600) / 60);
     let seconds = value % 60;

     if (hours < 10) {
         hours = "0" + hours;
     }
     if (minutes < 10) {
         minutes = "0" + minutes;
     }
     if (seconds < 10) {
         seconds = "0" + seconds;
     }

     return `${hours}:${minutes}:${seconds}`;
 }