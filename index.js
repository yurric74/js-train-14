// Завдання 1
/**
 * Функція `getDateDetails` отримує об'єкт дати та повертає об'єкт з деякими деталями про дату.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт, який містить такі властивості:
 *  year - рік,
 *  month - місяць,
 *  day - день місяця.
 */
function getDateDetails(date) {
  if (!(typeof date.getTime === "function")); { // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
    return "Помилка: вхідне значення має бути об'єктом Date";}// Якщо date не є об'єктом Date, повертаємо рядок
    const year = date.getUTCYear(); const month = date.getUTCMonth(); const day = date.getUTCDate(); // "Помилка: вхідне значення має бути об'єктом Date"
    return {year: year, month: month, day: day,};// Повертаємо об'єкт, що містить деякі деталі про вхідний об'єкт Date.
}

console.log("Завдання: 1 ==============================");
const now = new Date("2023-12-25T00:00:00Z");
console.log(getDateDetails(new Date("2023-12-25T00:00:00Z")));
//Виведе { year: 2023, month: 11, day: 25 }

// Завдання 2
/**
 * Функція `setDateDetails` приймає об'єкт Date і рядок ISO дати, і встановлює дату з ISO рядка в об'єкт Date.
 *
 * date - Об'єкт Date, в який потрібно встановити дату.
 * isoString - Рядок дати в форматі ISO.
 *
 * Повертає об'єкт Date з встановленою датою, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setDateDetails(date, isoString) {
  if (!(typeof date.getTime === "function")) {// Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
    return "Помилка: вхідне значення має бути об'єктом Date";}// Якщо date не є об'єктом Date, повертаємо рядок
    const isoDate = new Date(isoString);// "Помилка: вхідне значення має бути об'єктом Date"
    if (isNaN(isoDate.getTime())) {return "Помилка: недійсний ISO рядок";}// Перевірка, чи є вхідний ISO рядок валідним, отримавши дату з рядка та перевірити чи є результат числом,
    date.setTime(isoDate.getTime());//  якщо ні виводимо повідомлення "Помилка: недійсний ISO рядок"
  // Встановлюємо дату з ISO рядка в об'єкт Date.
  return date;// Повертаємо об'єкт Date з встановленою датою.
}

console.log("Завдання: 2 ==============================");
const date = new Date();
console.log(setDateDetails(date, "2023-12-25T00:00:00Z"));
//Виведе 2023-12-25T00:00:00.000Z

// Завдання 3
/**
 * Функція `dateToUTC` приймає об'єкт Date та повертає рядок, що представляє дату в UTC форматі.
 *
 * date - Об'єкт Date.
 *
 * Повертає рядок з датою в UTC форматі, якщо вхідне значення є дійсним об'єктом Date. Якщо ні, виводить повідомлення про помилку.
 */
function dateToUTC(date) {
  if (!(typeof date.getTime === "function")) {// Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
    return "Помилка: вхідне значення має бути об'єктом Date";}// Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  return date.toUTCString();// Повертаємо рядок з датою в UTC форматі.
}

console.log("Завдання: 3 ==============================");
console.log(dateToUTC(new Date()));
//Виведе Tue, 27 Jun 2023 07:15:47 GMT

// Завдання 4
/**
 * Функція `setSpecificTime` приймає об'єкт Date та встановлює конкретний час.
 *
 * date - Об'єкт Date.
 * hours - Кількість годин.
 * minutes - Кількість хвилин.
 * seconds - Кількість секунд.
 * milliseconds - Кількість мілісекунд.
 *
 * Повертає об'єкт Date з встановленим часом, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setSpecificTime(date, hours, minutes, seconds, milliseconds) {
  if (!(typeof date.getTime === "function")) {// Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
    return "Помилка: вхідне значення має бути об'єктом Date";}// Якщо date не є об'єктом Date, повертаємо рядок
  date.setHours(hours) ;// "Помилка: вхідне значення має бути об'єктом Date"
  date.setMinutes(minutes);// Встановлюємо конкретний час в об'єкті Date за допомогою setHours.
  date.setSeconds(seconds);// Повертаємо об'єкт Date з встановленим часом.
  date.setMilliseconds(milliseconds);
  return date;
}

console.log("Завдання: 4 ==============================");
console.log(
  setSpecificTime(new Date("2023-12-25T00:00:00.000Z"), 12, 30, 0, 0)
);
//Виведе 2023-12-25T09:30:00.000Z

// Завдання 5

/**
 * Функція `nextNewYear` приймає об'єкт Date і повертає час до наступного Нового року.
 *
 *
 * Повертає об'єкт з інформацією про час до наступного Нового року:
 * {
 *   days: // Кількість днів до Нового року.
 *   hours: // Кількість годин до Нового року, не включаючи повні дні.
 *   minutes: // Кількість хвилин до Нового року, не включаючи повні години.
 *   seconds: // Кількість секунд до Нового року, не включаючи повні хвилини.
 *   milliseconds: // Кількість мілісекунд до Нового року, не включаючи повні секунди.
 * }
 */
function nextNewYear() {
  const currentDate = new Date();// Створюєму змінну в яку записуємо поточну дату
  const currentYear = currentDate.getFullYear();// Визначення поточного року.
  const nextNewYearDate = new Date(currentYear + 1, 0, 1);// Визначення дати наступного Нового року. Для цього створюємо новий об`єкт Date в якому збільшуємо поточний рік на 1, встановлюємо місяць на 0 а дату на 1
  const diff = nextNewYearDate - currentDate;// Визначаємо кількість мілісекунд до наступного Нового року в змінну diff.
  // Розраховуємо кількість повних днів, годин, хвилин і секунд.
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));// Дні:diff / (1000 * 60 * 60 * 24)
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);// Години:(diff / (1000 * 60 * 60)) % 24
  const minutes = Math.floor((diff / (1000 * 60)) % 60);// Хвилини: (diff / (1000 * 60)) % 60;
  const seconds = Math.floor((diff / 1000) % 60);// Секунди:(diff / 1000) % 60;
  const milliseconds = diff % 1000;// Мілісекунди:  diff % 1000;
  return { days, hours, minutes, seconds, milliseconds };
}

console.log("Завдання:5  ==============================");

console.log(nextNewYear());
//Виведе

// Завдання 6
/**
 * Функція `isLeapYear` перевіряє, чи є рік високосним.
 *
 * year - Рік, який треба перевірити.
 *
 * Повертає об'єкт:
 * {
 *   year: // Рік, який був перевірений.
 *   isLeap: // Чи є рік високосним.
 * }
 */
function isLeapYear(year) {
  if (typeof year !== 'number') {return 'Помилка: вхідне значення має бути числом';}// Перевірка, чи є вхідне значення числом якщо ні повертаємо рядок .
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);// Перевірка, чи є рік високосним.
  // Високосним вважається рік, який ділиться націло на 4
  return { year: year, isLeap: isLeap };// Повертаємо об'єкт з роком та інформацією про те, чи є він високосним.
}
console.log("Завдання: 6 ==============================");

console.log(isLeapYear(2020));
//Виведе { year: 2020, isLeap: true }

// Завдання 7
/**
 * Функція `addDays` додає задану кількість днів до вказаної дати.
 *
 * date - Об'єкт Date.
 * days - Кількість днів, які треба додати.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   addedDays: // Кількість доданих днів.
 *   resultDate: // Результуюча дата в форматі 'гггг-мм-дд'.
 * }
 */
function addDays(date, days) {
  if (!(typeof date.getTime === "function")) {return "Помилка: кількість днів має бути числом";}// Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  const inputDate = date.toISOString();
  date.setDate(date.getDate() + days);// Перевірка, чи є кількість днів числом.
  const resultDate = date.toISOString();// Якщо days не є числом, функція поверне рядок
  // "Помилка: кількість днів має бути числом" та повертає undefined.
  // Збереження початкової дати для виведення в форматі ISO.
  // Додавання заданої кількості днів до дати.
  // Збереження результуючої дати для виведення в форматі ISO.
  return {inputDate: inputDate, addedDays: days, resultDate: resultDate};// Повертаємо об'єкт з початковою датою, кількістю доданих днів та результуючою датою.
}

console.log("Завдання: 7 ==============================");

console.log(addDays(new Date("2023-01-01"), 7));
//Виведе
// {
//   inputDate: '2023-01-01T00:00:00.000Z',
//   addedDays: 7,
//   resultDate: '2023-01-08T00:00:00.000Z'
// }

// Завдання 8
/**
 * Функція `getDayOfWeek` повертає день тижня вказаної дати українською мовою.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   dayOfWeek: // День тижня українською мовою.
 * }
 */
let daysOfWeek = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п’ятниця",
  "субота",
];

function getDayOfWeek(date) {
  if (!(typeof date.getTime === "function")) {return "Помилка: вхідне значення має бути об'єктом Date";}// Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  const inputDate = date.toISOString();// Збереження початкової дати для виведення  в форматі ISO.
  const dayIndex = date.getDay();// Отримання дня тижня як числа (0 - неділя, 1 - понеділок, ..., 6 - субота).
  const dayOfWeek = daysOfWeek[dayIndex];
  return {inputDate: inputDate, dayOfWeek: dayOfWeek,};// Отримання назви дня тижня з масиву daysOfWeek за індексом.
  // Повертаємо об'єкт з початковою датою та днем тижня.
}

console.log("Завдання: 8 ==============================");

console.log(getDayOfWeek(new Date("2023-01-01")));
//Виведе { inputDate: '2023-01-01T00:00:00.000Z', dayOfWeek: 'неділя' }

// Завдання 9
/**
 * Функція `getDaysInMonth` повертає кількість днів у місяці вказаної дати.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   daysInMonth: // Кількість днів у місяці.
 * }
 */
function getDaysInMonth(date) {
  if (!(typeof date.getTime === "function")) {return "Помилка: вхідне значення має бути об'єктом Date";}
    // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  const inputDate = date.toISOString();// Збереження початкової дати для виведення  в форматі ISO.
  const currentMonth = date.getMonth();// Отримання поточного місяця.
  const currentYear = date.getFullYear();// Отримання поточного року.
  const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);// Створення об'єкта Date для першого дня наступного місяця.
  const lastDayOfCurrentMonth = new Date(nextMonthDate.getTime() - 1);// Віднімання одного дня від наступного місяця, щоб отримати останній день поточного місяця.
  const daysInMonth = lastDayOfCurrentMonth.getDate();// Отримання числа останнього дня поточного місяця - це кількість днів у місяці.
  return {inputDate: inputDate, daysInMonth: daysInMonth,}; // Повертаємо об'єкт з початковою датою та кількістю днів у місяці.
}
console.log("Завдання: 9 ==============================");

console.log(getDaysInMonth(new Date("2023-02-01")));
//Виведе { inputDate: '2023-02-01T00:00:00.000Z', daysInMonth: 28 }

// Завдання 10
/**
 * Функція `getFormattedTime` повертає час в форматі 'гг:хх:сс'.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   formattedTime: // Час в форматі 'гг:хх:сс'.
 * }
 */
function getFormattedTime(date) {
  if (!(typeof date.getTime === "function")) {return "Помилка: вхідне значення має бути об'єктом Date";}// Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  const inputDate = date.toISOString();// Збереження початкової дати для виведення  в форматі ISO.
  const hours = date.getHours() + 1;// Отримання годин.
  const minutes = date.getMinutes();// Отримання хвилин.
  const seconds = date.getSeconds();// Отримання секунд.
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;// Форматування часу у вигляді 'гг:хх:сс', ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.
  return {inputDate: inputDate, formattedTime: formattedTime,};// Повертаємо об'єкт з початковою датою та отформатованим часом.
}
console.log("Завдання: 10 ==============================");

console.log(getFormattedTime(new Date("2023-12-25T09:30:00.000Z")));
//Виведе { inputDate: '2023-12-25T09:30:00.000Z', formattedTime: '12:30:00' }

// Завдання 11
/**
 * Функція `getAge` обчислює вік на підставі вказаної дати народження.
 *
 * birthDate - Об'єкт Date, представляє дату народження.
 *
 * Повертає об'єкт:
 * {
 *   birthDate: // Дата народження в форматі 'гггг-мм-дд'.
 *   age: // Обчислений вік.
 * }
 */
function getAge(birthDate) {
  if (!(typeof date.getTime === "function")) {return "Помилка: вхідне значення має бути об'єктом Date";}// Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є birthDate.getTime по типу функція .
  // Якщо birthDate не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  const currentDate = new Date()// Отримання поточної дати.
  const birthYear = birthDate.getFullYear()// Вираховування різницю років між поточною датою та датою народження.
  const currentYear = currentDate.getFullYear();// Перевірка, чи поточна дата ще не пройшла день народження, тобто поточний місяць має бути менше, а якщо дорівнює дата має бути менше.
  let age = currentYear - birthYear;// Якщо день народження ще не пройшов, вік потрібно зменшити на 1.
  const currentMonth = currentDate.getMonth();// Збереження дати народження для виведення в форматі ISO.
  const birthMonth = birthDate.getMonth();// Повертаємо об'єкт з датою народження та обчисленим віком.
  const currentDay = currentDate.getDate();
  const birthDay = birthDate.getDate();
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {age--;}
  const formattedBirthDate = birthDate.toISOString().slice(0, 10);
  return {birthDate: formattedBirthDate, age: age,};
}
console.log("Завдання: 11 ==============================");

console.log(getAge(new Date("1990-05-15")));
//Виведе { birthDate: '1990-05-15T00:00:00.000Z', age: 33 }

// Завдання 12
/**
 * Функція `compareDates` порівнює дві дати і повертає результат порівняння.
 *
 * date1 - Об'єкт Date.
 * date2 - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   date1: // Перша дата в форматі 'гггг-мм-дд'.
 *   date2: // Друга дата в форматі 'гггг-мм-дд'.
 *   comparison: // Результат порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
 * }
 */
function compareDates(date1, date2) {
  if (!(typeof date1.getTime === "function") || !(typeof date2.getTime === "function")) {return "Помилка: вхідне значення має бути об'єктом Date";}// Перевірка, чи є вхідні значення об'єктами Date.
  // Якщо date1 або date2 не є об'єктами Date, повертаємо рядок
  let comparison;// "Помилка: вхідне значення має бути об'єктом Date"
  if (date1 < date2) {comparison = -1;}// Порівняння дат і отримання результату порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
  else if (date1 > date2) {comparison = 1;}// Збереження дат для виведення  в форматі ISO.
  else {comparison = 0;}// Повертаємо об'єкт з порівнюваними датами та результатом порівняння.
  const formattedDate1 = date1.toISOString();
  const formattedDate2 = date2.toISOString();
  return {date1: formattedDate1, date2: formattedDate2, comparison: comparison,};
}
console.log("Завдання: 12 ==============================");

console.log(compareDates(new Date("2023-01-01"), new Date("2022-12-31")));
//Виведе
// {
//   date1: '2023-01-01T00:00:00.000Z',
//   date2: '2022-12-31T00:00:00.000Z',
//   comparison: 1
// }

// Завдання 13
/**
 * Функція `getDaysDifference` обчислює різницю в днях між двома датами.
 *
 * startDate - Початкова дата.
 * endDate - Кінцева дата.
 *
 * Повертає об'єкт:
 * {
 *   startDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   endDate: // Кінцева дата в форматі 'гггг-мм-дд'.
 *   daysDifference: // Різниця в днях між двома датами.
 * }
 */
function getDaysDifference(startDate, endDate) {
  if (!(typeof startDate.getTime === "function") ||  !(typeof endDate.getTime === "function")) {return "Помилка: вхідне значення має бути об'єктом Date";}// Перевірка, чи є вхідні значення об'єктами Date.
  // Якщо startDate або endDate не є об'єктами Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  const startMilliseconds = startDate.getTime();// Отримання часу в мілісекундах для початкової та кінцевої дати.
  const endMilliseconds = endDate.getTime();// Різниця в мілісекундах між двома датами.
  const millisecondsDifference = endMilliseconds - startMilliseconds;// Перетворення різниці в мілісекундах у дні поділивши мілісекунди на (1000 * 60 * 60 * 24).
  const daysDifference = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));// Збереження дат для виведення в форматі ISO.
  const formattedStartDate = startDate.toISOString();// Повертаємо об'єкт з початковою та кінцевою датами та різницею в днях.
  const formattedEndDate = endDate.toISOString();
  return {startDate: formattedStartDate, endDate: formattedEndDate, daysDifference: daysDifference,};
}
console.log("Завдання: 13 ==============================");

console.log(getDaysDifference(new Date("2023-01-01"), new Date("2023-01-10")));
//Виведе
// {
//   startDate: '2023-01-01T00:00:00.000Z',
//   endDate: '2023-01-10T00:00:00.000Z',
//   daysDifference: 9
// }
