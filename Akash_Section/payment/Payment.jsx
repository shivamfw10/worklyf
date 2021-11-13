import { useState } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./payment.css";

import { RiTicket2Line, RiWhatsappLine } from "react-icons/ri";
import { Button } from "./Button";

export const Payment = ({ name, price }) => {
  const [date, setDate] = useState(new Date());
  const [promo, setPromo] = useState("");

  const [rate, setRate] = useState(price);

  const handleChange = (e) => {
    setDate(date);
  };

  const handlePromoInp = (e) => {
    setPromo(e.target.value);
  };
  const handleClickPromo = () => {
    if (promo === "Work") {
      let e = document.getElementById("extra");
      e.style.display = "block";

      let eD = document.getElementById("extraDiscount");
      eD.style.display = "block";

      document.getElementById("promoBox").style.color = "#027858";

      setRate(Number(price) - 900);
    }
  };
  return (
    <>
      <div className="mainDiv">
        <div className="passType">
          <p className="passTypeTitle">Pass Type: </p>
          <p className="passTypeContent">{` <${name}/>`}</p>
        </div>
        <div>
          <label className="selectDatetitle">Select Start Date: </label>
          <DatePickerComponent
            className="datePicker"
            placeholder="dd/mm/yy"
            onChange={handleChange}
            value={date}
            format="dd MMMM yyyy"
          />
        </div>
        <div className="promocode">
          <RiTicket2Line className="promocodeIcon" />
          <label className="promoCodeText" onClick={handleClickPromo}>
            Apply Promo Code{" "}
          </label>
          <input
            type="text"
            id="promoBox"
            className="promocodeInput"
            value={promo}
            onChange={handlePromoInp}
          />
        </div>
        <p id="extra" className="promoApplied">
          Congratulations, you get an Exclusive Discount!
        </p>
        <div className="paymentSection">
          <h3>Payment Details</h3>
          <div className="paymentDetail">
            <p>Total Ammount </p>
            <p>{` ₹${price}`}</p>
          </div>
          <div className="paymentDetail extraoff" id="extraDiscount">
            <p>Worklyf Discount </p>
            <p className="discountPrice">{`- ₹${900}`}</p>
          </div>
          <div className="paymentDetail">
            <p>Convenience Fee </p>
            <p>{`+ ₹${99}`}</p>
          </div>
          <div className="paymentDetail totalPayable">
            <p>Total Amount Payable: </p>
            <p>{`₹${Number(rate) + 99}`}</p>
          </div>
          <div className="stayConnect">
            <input type="checkbox" className="checkbox" />
            <label>Stay Updated, Get Notifications via WhatsApp</label>
            <label className="whIcon">
              <RiWhatsappLine className="whatsappIcon" />
            </label>
          </div>
        </div>
        <Button />
      </div>
    </>
  );
};
