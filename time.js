function lifeInWeeks(age){
    const lifeSpan = 90;
    const daysInYear = 365;
    const daysInWeek = 7;
    const daysInMonth = 30;
  
    const daysLeft = (lifeSpan - age) * daysInYear;
    const weeksLeft = daysLeft / daysInWeek;
    const monthsLeft = daysLeft / daysInMonth;
  
    console.log(`You have ${Math.floor(daysLeft)} days, ${Math.floor(weeksLeft)} weeks, and ${Math.floor(monthsLeft)} months left.`);
  
}
lifeInWeeks(prompt("Enter your age pls"))