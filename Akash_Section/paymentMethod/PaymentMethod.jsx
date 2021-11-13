import styled from "./payment.module.css";
import { MdCreditCard } from "react-icons/md";

export const PaymentMethod = ({ price }) => {
  const addCard=()=>{
    let btn=document.getElementById("addCardBtn")
    btn.style.display="block"
  }
  return (
    <>
      <div className={styled.main}>
        <p>To Pay: {price}</p>
        <hr />
        <MdCreditCard className={styled.cardLogo} />
        <div className={styled.cardDiv}>
          <label className={styled.cardIconText}>Credit & Debit Cards</label>
          <button className={styled.cardBtn} onClick={addCard}>+ Add New Card</button>
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
            <button className={styled.makePaymentBtn}>Make Payment</button>
          </div>
        </div>
        <hr />
        <div>
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>GooglePay</label>
        </div>
        <hr />
        <label>Wallets</label>
        <hr />
        <div >
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Mobikwik</label>
        </div>
        <hr />
        <div >
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Paytm</label>
        </div>
        <hr />
        <div>
          <img src="./gPay.png" alt="googlePay" />
          <label className={styled.paymentOptionText}>Pay U</label>
        </div>
        <hr />
        <label>Net Banking</label>
        <hr />
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
        <hr/>
        <label >View All Banks</label>
        <hr/>
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
};
