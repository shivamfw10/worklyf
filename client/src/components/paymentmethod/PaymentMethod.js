import React from "react";
import CardPaymentNavbar from "../cardPaymentNavbar/CardPaymentNavbar";
import styled from "./paymentMethod.module.css";
import { MdCreditCard } from "react-icons/md";
import { Link } from "react-router-dom";
function PaymentMethod({ price }) {
  const cardData = JSON.parse(window.localStorage.getItem("card"));
  const addCard = () => {
    let btn = document.getElementById("addCardBtn");
    btn.style.display = "block";
  };
  return (
    <>
      <CardPaymentNavbar link="/payment" />
      <div className={styled.main}>
        <p className={styled.pay}>To Pay: <span className={styled.price}>₹ {cardData.price}</span></p>
        <div className={styled.line}></div>
        <div className={styled.cardDiv}>
          <MdCreditCard className={styled.cardLogo} />
          <label className={styled.cardIconText}>Credit & Debit Cards</label>
          <button className={styled.cardBtn} onClick={addCard}>
            + Add New Card
          </button>
          <div id="addCardBtn" className={styled.card}>
            <MdCreditCard className={styled.secondCardLogo} />
            <div className={styled.cardNoName}>
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Name on Card" />
              <div className={styled.cvvEtc}>
                <input type="text" placeholder="MM" />
                <input type="text" placeholder="YYYY" />
                <input className={styled.cvv} type="text" placeholder="CVV" />
              </div>
            </div>
            <Link to="/thankyou">
              <button className={styled.makePaymentBtn}>Make Payment</button>
            </Link>
          </div>
        </div>
        <div className={styled.line}></div>
        <div>
          <img src="./upi_icon/Gpay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>GooglePay</label>
        </div>
        <div className={styled.line}></div>
        <label>Wallets</label>
        <div className={styled.line}></div>
        <div>
          <img src="./upi_icon/Mobikwik.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Mobikwik</label>
        </div>
        <div className={styled.line}></div>
        <div>
          <img src="./upi_icon/paytm.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Paytm</label>
        </div>
        <div className={styled.line}></div>
        <div>
          <img src="./upi_icon/payu.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Pay U</label>
        </div>
        <div className={styled.line}></div>
        <label>Net Banking</label>
        <div className={styled.line}></div>
        <div className={styled.netBanking}>
          <div>
            <img src="./upi_icon/sbi.png" alt="googlePay" />
            <p className={styled.netbankingText}>SBI</p>
          </div>
          <div>
            <img src="./upi_icon/citi.png" alt="googlePay" />
            <p className={styled.netbankingText}>CITI</p>
          </div>
          <div>
            <img src="./upi_icon/hsbc.png" alt="googlePay" />
            <p className={styled.netbankingText}>HSBC</p>
          </div>
          <div>
            <img src="./upi_icon/icici.png" alt="googlePay" />
            <p className={styled.netbankingText}>ICICI</p>
          </div>
          <div>
            <img src="./upi_icon/axis.png" alt="googlePay" />
            <p className={styled.netbankingText}>AXIS</p>
          </div>
          <div>
            <img src="./upi_icon/yes.png" alt="googlePay" />
            <p className={styled.netbankingText}>YES</p>
          </div>
        </div>
        <div className={styled.line}></div>
        <label>View All Banks</label>
        <div className={styled.line}></div>
        <div>
          <img src="./upi_icon/UPI.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>UPI</label>
        </div>
        <div>
          <img src="./upi_icon/Other.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Others Options</label>
        </div>
      </div>
    </>
  );
}
export default PaymentMethod;