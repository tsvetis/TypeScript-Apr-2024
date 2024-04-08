var WorkWeekDays;
(function (WorkWeekDays) {
    WorkWeekDays[WorkWeekDays["Monday"] = 1] = "Monday";
    WorkWeekDays[WorkWeekDays["Tuesday"] = 2] = "Tuesday";
    WorkWeekDays[WorkWeekDays["Wedneday"] = 3] = "Wedneday";
    WorkWeekDays[WorkWeekDays["Thursday"] = 4] = "Thursday";
    WorkWeekDays[WorkWeekDays["Friday"] = 5] = "Friday";
})(WorkWeekDays || (WorkWeekDays = {}));
console.log(WorkWeekDays["Monday"]);
console.log(WorkWeekDays["1"]);
console.log(WorkWeekDays.Monday);
console.log(WorkWeekDays);
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
//# sourceMappingURL=app.js.map