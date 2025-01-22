const StockPortfolio = require('../stockPortfolio'); 

test('Stock portfolio starts empty', () => {
  const portfolio = new StockPortfolio();
  expect(portfolio.isEmpty()).toBe(true);
});

test('Make a purchase', () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase('AAPL', 10); 
  expect(portfolio.getShares('AAPL')).toBe(10);
});

test('Make a sale', () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase('AAPL', 10);
  portfolio.sale('AAPL', 5); 
  expect(portfolio.getShares('AAPL')).toBe(5); 
});

test('Count unique ticker symbols', () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase('AAPL', 10);
  portfolio.purchase('GOOG', 5);
  expect(portfolio.uniqueSymbolsCount()).toBe(2); 
});

test('Remove zero-share symbols', () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase('AAPL', 10);
  portfolio.sale('AAPL', 10);
  portfolio.removeZeroShares(); 
  expect(portfolio.uniqueSymbolsCount()).toBe(0); 
});

// Were you able to follow the test-first approach going over the red-green-refactor cycle?  
// Yes, I was able to follow the test-first approach and went over the red-green-refactor cycle.
// Red: First, I wrote tests that would fail because the functionality wasn't implemented yet (e.g., checking if the portfolio is empty, making purchases and sales, etc.).
// Green: Then, I wrote just enough code to pass those tests (e.g., implementing the isEmpty(), purchase(), and sale() methods).
// Refactor: After that, I reviewed the code and cleaned it up by removing duplicates and improving clarity, ensuring that it followed best practices.

// Yes/No, Why? What's your opinion about the TDD practice after exercising it in this assignment?
// Yes, I was able to follow the test-first approach and went through the red-green-refactor cycle. 
// I wrote failing tests first (red), then implemented the minimum code to make them pass (green), 
// and refactored afterward for clarity and best practices. I find TDD helpful because it encourages focused development, 
// provides immediate feedback, and promotes regular refactoring, leading to cleaner code. 

