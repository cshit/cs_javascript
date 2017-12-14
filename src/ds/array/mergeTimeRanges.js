const mergeTimeRanges = (metings) => {
  let sortedMeetings = metings.sort((a, b)=> a.startTime - b.startTime);
  let merged = [];
  let range;

  sortedMeetings.forEach((meeting, index) => {
    if (index === 0){
      range = meeting;
      return;
    }

    if (range.endTime < meeting.startTime) {
      merged.push(range);
      range = meeting;
    } else if (meeting.endTime <= range.endTime) {
      return;
    } else {
      range.endTime = meeting.endTime;
    }
  });

  merged.push(range);

  return merged;
};

exports.mergeTimeRanges = mergeTimeRanges;
