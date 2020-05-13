myArray =   [
  { startTime: 0,  endTime: 1 },
  { startTime: 4,  endTime: 5 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 3,  endTime: 6 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

secondArray =   [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
];


// function mergeRanges(meetings) {
//
// // Create a deep copy of the meetings array
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
// const meetingsCopy = JSON.parse(JSON.stringify(meetings));
// console.log('meetings copy below')
// console.log(meetingsCopy)
//
// // Sort by start time
// const sortedMeetings = meetingsCopy.sort((a, b) => {
//   return a.startTime - b.startTime;
// });
// console.log("sroted meetings below")
// console.log(sortedMeetings)
//
// // Initialize mergedMeetings with the earliest meeting
// const mergedMeetings = [sortedMeetings[0]];
// console.log("Initialized merged meetings below")
// console.log(mergedMeetings)
//
// for (let i = 1; i < sortedMeetings.length; i++) {
//   console.log("i = " + i)
//   const currentMeeting    = sortedMeetings[i];
//   const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
//   console.log("currentMeeting")
//   console.log(currentMeeting)
//   console.log("lastMergedMeeting")
//   console.log(lastMergedMeeting)
//
//   // If the current meeting overlaps with the last merged meeting, use the
//   // later end time of the two
//   if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
//     console.log("overlap")
//     lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
//   } else {
//
//     // Add the current meeting since it doesn't overlap
//     console.log("no overlap")
//     mergedMeetings.push(currentMeeting);
//   }
// }
//
// return mergedMeetings;
// console.log("done")
// console.log(mergedMeetings)
// }




function mergeMtgs(mtgs) {
   const meetingsCopy = JSON.parse(JSON.stringify(mtgs));

  console.log("running function mergeMtgs")
  console.log(mtgs)
  console.log(meetingsCopy)

  const sortedMtgs = meetingsCopy.sort((a,b) => {
    return a.startTime - b.startTime //this sorts meetings by number (see sort docs)
  })

  console.log('meetings have been sorted:')
  console.log(sortedMtgs)

  const mergedMtgs = [sortedMtgs[0]];

  console.log("merging meetings")
  console.log(mergedMtgs)

  for (let i=0; i < sortedMtgs.length; i++) {
    const currentMtg = sortedMtgs[i];
    const lastMergedMtg = mergedMtgs[mergedMtgs.length-1];
    console.log(i)
    if(currentMtg.startTime <= lastMergedMtg.startTime) {
      lastMergedMtg.endTime = currentMtg.endTime;
      // i--;
    } else {
      mergedMtgs.push(currentMtg);
    }
    return mergedMtgs;
    console.log(mergedMtgs);
  }



}

mergeMtgs(myArray);

// mergeMtgs(secondArray);
