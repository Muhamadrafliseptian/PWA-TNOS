import { t } from "i18next";

const getNameLayanan = (tnos_service_id, tnos_subservice_id) => {
  console.log(tnos_service_id + " " + tnos_subservice_id);
  let name = "";

  if (tnos_service_id === "1" && tnos_subservice_id === "1") {
    name = "Konsultasi Hukum";
  } else if (tnos_service_id === "1" && tnos_subservice_id === "2") {
    name = "Pendampingan Hukum";
  } else if (tnos_service_id === "2" && tnos_subservice_id === "1") {
    name = "Pengamanan Perorangan";
  } else if (tnos_service_id === "2" && tnos_subservice_id === "2") {
    name = t("sublayanan6");
  } else if (tnos_service_id === "3" && tnos_subservice_id === "1") {
    name = t("sublayanan1");
  } else if (tnos_service_id === "3" && tnos_subservice_id === "2") {
    name = t("sublayanan2");
  } else if (tnos_service_id === "3" && tnos_subservice_id === "3") {
    name = t("sublayanan3");
  } else if (tnos_service_id === "3" && tnos_subservice_id === "4") {
    name = t("sublayanan4");
  } else if (tnos_service_id === "3" && tnos_subservice_id === "5") {
    name = "Badan Usaha Asosiasi";
  } else if (tnos_service_id === "3" && tnos_subservice_id === "6") {
    name = t("sublayanan5");
  } else if (tnos_service_id === "3" && tnos_subservice_id === "7") {
    name = t("sublayanan7");
  } else if (tnos_service_id === "3" && tnos_subservice_id === "8" ) {
    name = t("Pembayaran Lainnya");
  } else if (tnos_service_id === "4" && tnos_subservice_id === "1") {
    name = t("PAS_Pengamanan_Bisnis");
  } else if (tnos_service_id === "5" && tnos_subservice_id === "1") {
    name = t("Triger_Pengamanan_Bisnis");
  } else {
    name = "tidak ada";
  }
  return name;
};

const getStatusPayment = (payment_status) => {
  let name = "";
  if (payment_status === "ORDER") {
    name = t("payment_status1");
  } else if (payment_status === "UNPAID") {
    name = t("payment_status2");
  } else if (payment_status === "PAID" || payment_status === "SETTLED") {
    name = t("payment_status3");
  } else {
    name = t("payment_status4");
  }
  return name;
};

const getTypeStatusPayment = (payment_status) => {
  let status = "";
  if (payment_status === "ORDER") {
    status = "cart";
  } else if (payment_status === "UNPAID") {
    status = "waiting";
  } else if (payment_status === "PAID" || payment_status === "SETTLED") {
    status = "success";
  } else {
    status = "cancel";
  }
  return status;
};

const getStatusOrder = (status_order) => {
  let name = "";
  if (status_order === "WAIT") {
    name = "Menunggu Pembayaran"
  } else if (status_order === "RUN") {
    name = "Sedang Diproses"
  } else if (status_order === "START") {
    name = "Siap Bertugas"
  } else if (status_order === "AKTA") {
    name = "Proses Pembuatan Akta"
  } else if (status_order === "SKMENKUMHAM") {
    name = "Proses SKMENKUMHAM"
  } else if (status_order === "NPWP") {
    name = "Proses NPWP"
  } else if (status_order === "NIB") {
    name = "Proses NIB"
  } else if (status_order === "WORK") {
    name = "Sedang Bertugas"
  } else if (status_order === "FINISH") {
    name = "Selesai"
  } else if (status_order === "WORK") {
    name = "Sedang Bertugas"
  } else {
    name = "Gagal"
  }
  return name;
};
export {
  getNameLayanan,
  getStatusPayment,
  getTypeStatusPayment,
  getStatusOrder,
};
