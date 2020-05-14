const carMakers = ['ford', 'toyato', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompotable values
carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
