// src/utils/validator.js
function validateRecord(data) {
  const { amount, type } = data;

  if (!amount || amount <= 0) {
    return "Amount must be positive";
  }

  if (!["income", "expense"].includes(type)) {
    return "Type must be income or expense";
  }

  return null;
}

module.exports = { validateRecord };