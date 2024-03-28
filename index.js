// code your solution here
function superbowlWin(superbowlRecords) {
const winningRecord = superbowlRecords.find(record => record.result === 'W');
 if(winningRecord) {
    return winningRecord.year;
} else {
    return undefined;
   }
}