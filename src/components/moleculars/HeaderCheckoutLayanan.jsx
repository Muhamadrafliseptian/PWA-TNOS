import React from "react";
import ContentTitleValue from "./ContentTitleValue";
import { icon } from "../utils/IconLayananService";
import { t } from "i18next";
import PAS from "../../assets/images/TRIGGER.svg";
import Trigger from "../../assets/images/PAS.svg";
function HeaderCheckoutLayanan({ layanan, payment_status }) {
  // console.log(payment_status);
  const renderStatusOrder = () => {
    switch (payment_status) {
      case "002":
        return (
          <ContentTitleValue
            type="waiting"
            title="Status Order:"
            value={t("status_order2")}
          />
        );
      case "011":
        return (
          <ContentTitleValue
            type="cancel"
            title="Status Order:"
            value={t("status_order4")}
          />
        );
      default:
        return (
          <ContentTitleValue
            type="cart"
            title="Status Order:"
            value={t("status_order1")}
          />
        );
    }
  };
  //gambar darisini
  return (
    <div className="detail-riwayat-container">
      {layanan === "Triger_Pengamanan_Bisnis" ?
        <>
          <img src={Trigger} alt="not internet connection" />
          <div className="content-detail">
            <div className="title-f" style={{ fontWeight: 'bold' }} >TRIGER</div>
          </div> 
        </> : 
        layanan === "PAS_Pengamanan_Bisnis" ? 
        <>
          <img src={PAS} alt="not internet connection" />
          <div className="content-detail">
            <div className="title-f" style={{ fontWeight: 'bold' }} >PAS</div>
          </div> 
        </>:
        layanan === "Pembayaran Lainnya" ? 
        <>
          <img src={PAS} alt="not internet connection" />
          <div className="content-detail">
            <div className="title-f" style={{ fontWeight: 'bold' }} >PAS</div>
          </div> 
        </>: 
        <>
          <img src={icon(layanan)} alt="not internet connection" />
          <div className="content-detail">
            <div className="title-f">{layanan}</div>
            {renderStatusOrder()}
          </div>
        </>
      }
    </div>
  );
}

export default HeaderCheckoutLayanan;
