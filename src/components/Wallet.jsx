import React from "react";

export default function Wallet(props) {
  const { wallet } = props;
  return (
    <div className="wallet">
      <div className="row">
        <div className="wallet-container">
          <div className="wallet-header">
            <p>{wallet && wallet.title}</p>
            <p>
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="wallet-center">
            <div className="walletcenter-c">
              <p>{wallet && wallet.balance.title}</p>
              <h1>
                <span>{wallet && wallet.balance.currency}</span>{" "}
                {wallet && wallet.balance.value}
              </h1>
            </div>
          </div>

          <div className="wallet-footer">
            <a href="/withdraw" className="wallet-footer-item">
              <i className="far fa-credit-card"></i>
              <span>Withdraw</span>
            </a>

            <a href="/fund-wallet" className="wallet-footer-item">
              <i className="fas fa-exchange-alt"></i>
              <span>Fund Wallet</span>
            </a>

            <a href="/transactions" className="wallet-footer-item">
              <i className="fas fa-chart-line"></i>
              <span>Transactions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
