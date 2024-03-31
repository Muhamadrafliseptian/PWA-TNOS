import React from "react";
import ContentTitleValue from "./ContentTitleValue";
import { icon } from "../utils/IconLayananService";
import { t } from "i18next";
import PAS from "../../assets/images/TRIGGER.svg";
import Trigger from "../../assets/images/PAS.svg";
import Lainnya from "../../assets/images/new pwa icon/dashboard/iconPembayaranLainnya.png";
function HeaderCheckoutLayanan({ layanan, payment_status }) {
  const renderStatusOrder = () => {
    switch (payment_status) {
      case "RUN":
        return (
          <ContentTitleValue
            type="waiting"
            title="Status Order:"
            value="Sedang Diproses"
          />
        );
      case "WAIT":
        return (
          <ContentTitleValue
            type="waiting"
            title="Status Order:"
            value="Menunggu Pembayaran"
          />
        );
      case "START":
        return (
          <ContentTitleValue
            type="success"
            title="Status Order:"
            value="Siap Bertugas"
          />
        );
      case "FINISH":
        return (
          <ContentTitleValue
            type="success"
            title="Status Order:"
            value="Selesai"
          />
        );
      default:
        return (
          <ContentTitleValue
            type="waiting"
            title="Status Order:"
            value="Memesan"
          />
        );
    }
  };
  //gambar darisini
  return (
    <div className="detail-riwayat-container">
      <img
        src={icon(layanan)}
        alt="not internet connection"
        style={layanan == t("layanan7") ? {width: "50px"} : {  }}
      />
      <div className="content-detail">
        <div className="title-f">{layanan}</div>
        {renderStatusOrder()}
      </div>
      {/* {layanan === t("partner2") ?
        <>
          <img src={Trigger} alt="not internet connection" />
          <div className="content-detail">
            <div className="title-f" style={{ fontWeight: 'bold' }} >{t('partner2')}</div>
          </div> 
        </> : 
        layanan === "PAS_Pengamanan_Bisnis" ? 
        <>
          <img src={PAS} alt="not internet connection" />
          <div className="content-detail">
            <div className="title-f" style={{ fontWeight: 'bold' }} >PAS</div>
          </div> 
        </>:
        layanan === t("layanan7") ? 
        <>
          <img src={Lainnya} alt="not internet connection" style={{width: '50px'}} />
          <div className="content-detail">
            <div className="title-f" style={{ fontWeight: 'bold' }} >{t("layanan7")}</div>
          </div> 
        </>: 
        <>
          <img
            src={icon(layanan)}
            alt="not internet connection"
            style={layanan == t("layanan7") ? { } : {width: '50px'}}
          />
          <div className="content-detail">
            <div className="title-f">{layanan}</div>
            {renderStatusOrder()}
          </div>
        </>
      } */}
    </div>
  );
}

export default HeaderCheckoutLayanan;
