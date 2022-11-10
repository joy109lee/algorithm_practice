/*
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.




*/

// sort by starti
// for all in array
// if current endi > next starti ? return false
// after all passed return true

const meetingTimes = (times) => {
  if (times.length <= 1) return true;
  times.sort((a, b) => {
    return a[0] > b[0] ? 1 : -1;
  });
  for (let i = 0; i + 1 < times.length; i++) {
    if (times[i][1] > times[i + 1][0]) return false;
  }
  return true;
};

console.log(
  meetingTimes([
    [1, 3],
    [8, 9],
    [4, 5],
    [5, 7],
    [7, 10],
  ])
); // => false
console.log(
  meetingTimes([
    [1, 3],
    [4, 5],
    [5, 7],
    [7, 10],
  ])
); // => true
