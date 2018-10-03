export function convertDay(date) {
  // var numbers = [0, 1, 2, 3, 4, 5, 6];
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let splitDate = date.split("-");
  splitDate.toString();

  let convertedDate = new Date(splitDate);
  let result = convertedDate.getDay();

  let i;
  for (i = 0; i <= weekdays.length; i++) {
    let dayOfTheWeek = weekdays[result];
    return dayOfTheWeek;
  }
}
