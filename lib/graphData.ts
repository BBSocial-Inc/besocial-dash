export const formatGraphData = (users:any) => {
    // Find the earliest date in the data
    let earliestDate = null;
  
    for (const user of users) {
      const date = new Date(user.dateAdded);
      if (!earliestDate || date < earliestDate) {
        earliestDate = date;
      }
    }
  
    if (!earliestDate) {
      // No data in the array, return an empty result
      return [];
    }
  
    const currentDate = new Date();
    const twelveMonthsAgo = new Date(currentDate);
    twelveMonthsAgo.setMonth(currentDate.getMonth() - 11); // Calculate date 12 months ago
  
    const allMonths = [];
    let monthIterator = new Date(earliestDate);
  
    for (let i = 0; i < 12; i++) {
      const year = monthIterator.getFullYear();
      const month = monthIterator.getMonth() + 1;
      const key = `${year}-${month.toString().padStart(2, '0')}`;
      const monthName = monthIterator.toLocaleString('en-us', { month: 'short' });
  
      // Initialize the monthly total to 0 for each month
      let total = 0;
  
      for (const user of users) {
        const date = new Date(user.dateAdded);
  
        if (date.getFullYear() === year && date.getMonth() + 1 === month) {
          total++;
        }
      }
  
      allMonths.push({
        name: `${monthName}`,
        total: total,
      });
  
      monthIterator.setMonth(monthIterator.getMonth() + 1); // Move to the next month
    }
  
    return allMonths;
  };
  