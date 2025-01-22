class StockPortfolio {
    constructor() {
      this.stocks = {};
    }
  
    isEmpty() {
      return Object.keys(this.stocks).length === 0;
    }
  
    purchase(symbol, shares) {
      if (this.stocks[symbol]) {
        this.stocks[symbol] += shares;
      } else {
        this.stocks[symbol] = shares;
      }
    }
  
    sale(symbol, shares) {
      if (this.stocks[symbol] >= shares) {
        this.stocks[symbol] -= shares;
      } else {
        throw new Error('Not possible to sell this number of shares.');
      }
    }
  
    getShares(symbol) {
      return this.stocks[symbol] || 0;
    }
  
    uniqueSymbolsCount() {
      return Object.keys(this.stocks).length;
    }
  
    removeZeroShares() {
      for (const symbol in this.stocks) {
        if (this.stocks[symbol] === 0) {
          delete this.stocks[symbol];
        }
      }
    }
  }
  
  module.exports = StockPortfolio;
  