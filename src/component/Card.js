import React, { useState } from "react";
export default function Card() {
  const [months, setMonths] = useState(12);
  const [loanamount, setLoanAmount] = useState(0);
  const [amountPerMonth, setAmountPerMonth] = useState(0);
  const [product, setProduct] = useState("car");
  const [interest, setInterest] = useState({
    car: 10,
    home: 20,
    dollar: 15,
  });
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthByMs = 2629800000;

  const totalMonths = Date.now() + months * monthByMs;

  const d = new Date(totalMonths);
  console.log(d.getMonth(), "d.getMonth()");
  let monthName = month[d.getMonth()];
  console.log(monthName);
  let total = +loanamount + +loanamount * interest[product];
  return (
    <div className="py-5">
      <h6 className="text-primary">
        Lets plan your <span className="fw-bold">Loan</span>
      </h6>
      <div className="card shadow w-50 m-auto">
        <div className=" d-flex justify-content-center">
          <div className="rounded-circle" style={{backgroundColor:product=="car"? "blue": "white"}} onClick={() => setProduct("car")} >
            <i className="fa-solid fa-car fs-2 m-3"></i>
          </div>
          <div className="rounded-circle" style={{backgroundColor:product=="home"? "blue": "white"}} onClick={() => setProduct("home")} >
            <i className="fa-solid fa-house-chimney fs-2 m-3"></i>
          </div>
          <div className="rounded-circle" style={{backgroundColor:product=="dollar"? "blue": "white"}} onClick={() => setProduct("dollar")}>
            <i className="fa-solid fa-dollar-sign fs-2 m-3"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <label className="text-md-start">Loan amount</label>
            <div>
              <input
                className="py-1 mt-2"
                type="number"
                value={loanamount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <label className="text-md-start">Number of Monthly</label>
            <div>
              <button
                className="btn"
                onClick={() =>
                  setMonths((state) => (state > 1 ? state - 1 : state))
                }
              >
                <i class="fa-solid fa-less-than"></i>
              </button>
              <span className="mx-3">{months}</span>
              <button
                className="btn"
                onClick={() =>
                  setMonths((state) => (state < 12 ? state + 1 : state))
                }
              >
                <i class="fa-solid fa-greater-than"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-7">
            <label className="w-400">Monthly amount</label>
          </div>
          <div className="col-md-4">
            <span>Total Amount</span> <span> {total}</span>
          </div>
          <div>
            <span>Monthly installment</span>
            <span> {total / months}</span>
          </div>
          <div>
            <span>Target month</span>
            <span> {total / months}</span>
          </div>
          <div>
            <span>monthName</span>
            <span> {monthName}</span>
          </div>
        </div>
        <div className="col-11 py-5">
          <p>
            You’re planning 12{" "}
            <span className="fw-bold">monthly deposits </span> to reach your{" "}
            <span className="fw-bold">$25,000</span> goal by{" "}
            <span className="fw-bold">July 2022</span>. The total amount loaned
            will be <span className="fw-bold">$26,300</span>
          </p>
        </div>
        <div className="col-4 d-grid gap-2 col-3 mx-auto br-23">
          <button class="btn btn-primary" type="button">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
