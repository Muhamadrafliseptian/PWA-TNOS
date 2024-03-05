import { t } from "i18next";
import solusi_hukum from "../../assets/images/new pwa icon/riwayat/iconsSolusiHukum.svg";
import legalitas_lainnya from "../../assets/images/new pwa icon/riwayat/legalitas_lainnya.svg";
import pengamanan from "../../assets/images/new pwa icon/riwayat/pengamanan.svg";
import PAS from "../../assets/images/TRIGGER.svg";
import TRIGER from "../../assets/images/PAS.svg"

const icon = (layanan) => {
  // console.log(layanan);
  switch (layanan) {
    case t("sublayanan1"):
      return legalitas_lainnya;
    case t("sublayanan2"):
      return legalitas_lainnya;
    case t("sublayanan3"):
      return legalitas_lainnya;
    case t("sublayanan4"):
      return legalitas_lainnya;
    case t("sublayanan5"):
      return legalitas_lainnya;
    case t("sublayanan6"):
      return pengamanan;
    case t("sublayanan7"):
      return solusi_hukum;
    case t("PAS_Pengamanan_Bisnis"):
      return PAS;
    case t("Triger_Pengamanan_Bisnis"):
      return TRIGER
    default:
      return;
  }
};

export { icon };
