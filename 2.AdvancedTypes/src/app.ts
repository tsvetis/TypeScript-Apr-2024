enum WorkWeekDays {
  Monday = 1,
  Tuesday,
  Wedneday,
  Thursday,
  Friday,
}

console.log(WorkWeekDays["Monday"]);
console.log(WorkWeekDays["1"]);
console.log(WorkWeekDays.Monday);
// console.log(WorkWeekDays.Tuesday);
// console.log(WorkWeekDays.Wedneday);
// console.log(WorkWeekDays.Thursday);
// console.log(WorkWeekDays.Friday);

// type SimpleUser = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: string;
//   phone: string;
//   website: string;
//   company: string;
// };

// type KeyOfSimpleUser = keyof SimpleUser;

// const simpleUser = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: "asdasdasdas",
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: "harness real-time e-markets",
// };

// Object.keys(simpleUser).forEach((key: KeyOfSimpleUser) => {
//   console.log(simpleUser[key]);
// });
