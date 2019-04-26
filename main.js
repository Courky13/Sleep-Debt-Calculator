const getSleepHours = day => {
  if (day === 'Monday') {
    return 7;
  } else if (day === 'Tuesday') {
    return 6;
  } else if (day === 'Wednesday') {
    return 7;
  } else if (day === 'Thursday') {
    return 6;
  } else if (day === 'Friday') {
    return 7;
  } else if (day === 'Saturday') {
    return 8;
  } else if (day === 'Sunday') {
    return 9;
  }
  else {console.log('Error!');
       }
};

const getActualSleepHours = () => 
  getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday'); 


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got too much sleep. You slept ' + (actualSleepHours - idealSleepHours) + ' hours over.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest. You got ' + (idealSleepHours - actualSleepHours) + ' hours less than needed.');
  } else {
    console.log('Error! Check your answers');
  }
};

console.log(calculateSleepDebt());
