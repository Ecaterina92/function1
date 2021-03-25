
function kelvinToFahrenheit(kelvin){

let fahrenheit;
let celsius;

celsius = kelvin - 273;
fahrenheit = celsius * (9/5) + 32;

return fahrenheit;
}
console.log(kelvinToFahrenheit(293));

function humanAgeInDogYears(myAge) {
    
let earlyYears = 2 * 10.5;
let laterYears = (myAge - 2) * 4;
return earlyYears + laterYears;
}

console.log(humanAgeInDogYears(28));


function answerMyQuestion(userName, userQuestion) {
   
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    if(randomNumber === 0) {
        eightBall = 'It is certain';
    } 
        else if(randomNumber === 1) {
           eightBall = 'It is decidedly so';
       }
        else if(randomNumber === 2) {
            eightBall = 'Reply hazy try again';
        }
        else if(randomNumber === 3) {
            eightBall = 'Cannot predict now';
        }
        else if(randomNumber === 4) {
            eightBall = 'Do not count on it';
        }
        else if(randomNumber === 5) {
            eightBall = 'My sources say no';
        }
        else if(randomNumber === 6) {
            eightBall = 'Outlook not so good';
        }
        else if(randomNumber === 7) {
            eightBall = 'Signs point to yes';
        }
        return eightBall;
}

console.log(answerMyQuestion('Ecaterina', 'Should I continue to study code?' ));


function raceTime(userAge, registeredEarly) {
    let time = '';
    if(userAge > 18 && registeredEarly) {
        time = 'Race will start at 9:30';
        } else if(userAge > 18 && !registeredEarly) {
        time = 'Late adults run at 11:00 am';
    } else if(userAge < 18) {
        time = 'Youth registrants run at 12:30 am';
}
        return time;

}
console.log(raceTime(30, true));
console.log(raceTime(59, false));