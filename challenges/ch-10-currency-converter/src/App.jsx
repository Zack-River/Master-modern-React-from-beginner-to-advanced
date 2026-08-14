// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);
  const [showError, setShowError] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(true);

  function handleAmountChange(e) {
    if (isNaN(Number(e.target.value))) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setAmount(e.target.value);
  }

  function handleFromCurrencyChange(e) {
    setFromCurrency(e.target.value);
    console.log("from Currency changed to", e.target.value);
  }

  function handleToCurrencyChange(e) {
    setToCurrency(e.target.value);
    console.log("to Currency changed to", e.target.value);
  }

  useEffect(
    function () {
      setIsLoading(true);
      async function convert() {
        const controller = new AbortController();
        const signal = controller.signal;

        try {
          const res = await fetch(
            `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
            { signal },
          );
          const data = await res.json();
          if (data.rates) {
            setConvertedAmount(data.rates[toCurrency]);
          }
          console.log(data);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }

      if (fromCurrency === toCurrency) {
        setConvertedAmount(amount);
        setIsLoading(false);
        return;
      }
      if (!amount || amount <= 0) {
        setAmount(0);
        setConvertedAmount(0);
        setIsLoading(false);
        return;
      }
      convert();
    },
    [amount, fromCurrency, toCurrency],
  );

  return (
    <div className="converter-card">
      <div className="card-header">
        <h1 className="card-title">Live Exchange</h1>
        <p className="card-subtitle">Fast, accurate currency conversion</p>
      </div>

      <div className="input-section">
        <label className="input-label">Amount</label>
        <div className="input-row">
          <input
            className="amount-input"
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e)}
            placeholder="0.00"
          />
          <select
            className="currency-select"
            value={fromCurrency}
            onChange={(e) => handleFromCurrencyChange(e)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>
        {showError && <span className="error-text">Only numbers are accepted</span>}
      </div>

      <div className="input-section">
        <label className="input-label">Convert To</label>
        <div className="input-row">
          <select
            className="currency-select"
            style={{ width: '100%' }}
            value={toCurrency}
            onChange={(e) => handleToCurrencyChange(e)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </div>

      <div className="result-box">
        <div className="result-label">Converted Amount</div>
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <div className="result-value">
            {convertedAmount} <span className="result-currency">{toCurrency}</span>
          </div>
        )}
      </div>
    </div>
  );
}
