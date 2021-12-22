import React from "react";

export default function Transactions(props) {
  const { transData } = props;
  return (
    <div className="transactions">
      {transData.map((item, index) => (
        <div className="trans" key={item.id}>
          <div className="img-txt">
            <img src={item.photo} alt="" />
            <p>{item.name}</p>
          </div>

          <div className="content">
            <p>{item.category}</p>
            <p>{item.date}</p>
            <p className={`status ${item.status}`}>{item.status}</p>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
      ))}
    </div>
  );
}
