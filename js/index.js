"use strikt"
import users from './users.js'

// Завдання 1
// Отримати масив імен всіх користувачів (поле name).

const getUserNames = users => {
  const userName = users.map(users => users.name);
  return userName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Завдання 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const userEyeColor = users.filter(user => user.eyeColor === color)
  return userEyeColor;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users, gender) => {
 const userGender = users.filter(user => user.gender === gender).map(users => users.name)
 return userGender
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Завдання 4
// Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users => {
  const userActive = users.filter(user => !user.isActive);
  return userActive;
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// Завдання 5
// Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => {
  const userEmail = users.find(user => user.email === email);
  return userEmail
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

// Завдання 6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const getUsersWithAge = (users, min, max) => {
  const userAge = users.filter(user => user.age > min && user.age < max);
  return userAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]