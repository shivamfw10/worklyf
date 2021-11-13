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
        <p className={styled.p}>To Pay: {cardData.price}</p>
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
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>GooglePay</label>
        </div>
        <div className={styled.line}></div>
        <label>Wallets</label>
        <div className={styled.line}></div>
        <div>
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Mobikwik</label>
        </div>
        <div className={styled.line}></div>
        <div>
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Paytm</label>
        </div>
        <div className={styled.line}></div>
        <div>
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Pay U</label>
        </div>
        <div className={styled.line}></div>
        <label>Net Banking</label>
        <div className={styled.line}></div>
        <div className={styled.netBanking}>
          <div>
            <img src="./sbi.png" alt="googlePay" />
            <p className={styled.netbankingText}>SBI</p>
          </div>
          <div>
            <img src="./sbi.png" alt="googlePay" />
            <p className={styled.netbankingText}>SBI</p>
          </div>
          <div>
            <img src="./sbi.png" alt="googlePay" />
            <p className={styled.netbankingText}>SBI</p>
          </div>
          <div>
            <img src="./sbi.png" alt="googlePay" />
            <p className={styled.netbankingText}>SBI</p>
          </div>
          <div>
            <img src="./sbi.png" alt="googlePay" />
            <p className={styled.netbankingText}>SBI</p>
          </div>
          <div>
            <img src="./sbi.png" alt="googlePay" />
            <p className={styled.netbankingText}>SBI</p>
          </div>
        </div>
        <div className={styled.line}></div>
        <label>View All Banks</label>
        <div className={styled.line}></div>
        <div>
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>UPI</label>
        </div>
        <div>
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Others Options</label>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
