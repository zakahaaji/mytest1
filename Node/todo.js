const { DateTime } = require('luxon');

function calculateSalesTarget(startDateString, endDateString, monthlyTarget) {
  const startDate = DateTime.fromISO(startDateString);
  const endDate = DateTime.fromISO(endDateString);

  // Calculate the number of working days in the specified date range
  let numWorkingDays = 0;
  let currentDate = startDate;
  while (currentDate <= endDate) {
    if (currentDate.weekday !== 5) { // Exclude Fridays (where Monday is 1 and Sunday is 7)
      numWorkingDays++;
    }
    currentDate = currentDate.plus({ days: 1 });
  }

  // Calculate the daily sales target
  const dailySalesTarget = monthlyTarget / numWorkingDays;

  // Calculate the total target sales within the specified date range
  const totalSalesTarget = dailySalesTarget * numWorkingDays;

  return {
    dailySales: dailySalesTarget.toFixed(6),
    totalTarget: totalSalesTarget.toFixed(2)
  };
}

// Example usage
const startDateString = '2023-01-01';
const endDateString = '2023-02-02';
const monthlyTarget = 435;

const { dailySales, totalTarget } = calculateSalesTarget(startDateString, endDateString, monthlyTarget);

console.log("DAILY SALES:", dailySales);
console.log("Total Target in accordance with the date range:", totalTarget);

// Function to safely write to a file
function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Example usage:
readFile('input.txt')
  .then((data) => {
    console.log('File contents:', data);
    // Modify the data if needed

    // Write the modified data to a new file
    return writeFile('output.txt', data);
  })
  .then(() => {
    console.log('File written successfully!');
  })
  .catch((err) => {
    console.error('Error:', err);
  });