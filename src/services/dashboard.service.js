// src/services/dashboard.service.js
function getSummary(records) {
  let income = 0;
  let expense = 0;

  records.forEach(r => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  };
}

function categoryBreakdown(records) {
  const result = {};

  records.forEach(r => {
    if (!result[r.category]) result[r.category] = 0;
    result[r.category] += r.amount;
  });

  return result;
}

function monthlyTrends(records) {
  const months = {};

  records.forEach(r => {
    const month = new Date(r.date).toLocaleString("default", { month: "short" });
    if (!months[month]) months[month] = 0;
    months[month] += r.amount;
  });

  return months;
}

module.exports = { getSummary, categoryBreakdown, monthlyTrends };