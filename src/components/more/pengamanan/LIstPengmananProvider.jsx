import React, { useEffect, useRef, useState } from "react";
import TopNewNav from "../../moleculars/TopNewNav";
import TitleHeader from "../../utils/TitleHeader";
import { t } from "i18next";
import PAS from "../../../assets/images/PAS.svg"
import Trigger from "../../../assets/images/TRIGGER.svg"
import {Button} from "react-bootstrap";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Guard from "../../../assets/images/GUARD-01.png";

function ListPengamananProvider() {
  TitleHeader("Halaman Pengamanan");
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState({open:false, mitra: ""})
  const [previousMitra, setPreviousMitra] = useState('');

  useEffect(() => {
    setPreviousMitra(drawerOpen.mitra)
  }, [drawerOpen.mitra])

  const handleCloseDrawer = () => {
    setDrawerOpen({open: false, mitra: previousMitra})
  }

  return (
    <>
      <TopNewNav title="Security Provider" path={`/dashboard`} />
      <div className="container-class">
        <div className="responsive-class">
          <div className="res-class">
            <div className="flexcol">
                <div className="flexbox">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <img src={Trigger} alt="pas" style={{ width: '60px', height: '60px', padding:'4px', backgroundColor:'white', borderRadius:'8px' }}/>
                      <span style={{ alignSelf: 'center', marginLeft: '24px' }}>PAS</span>
                    </div>
                    <Button onClick={() => setDrawerOpen({open: true, mitra: "PAS"})} style={{ backgroundColor:'#E3E8ED', border: 0 }}> <ArrowForward style={{ color:'#777777', fontSize:'18px', fontWeight:600 }}/> </Button>
                </div>
                <div className="flexbox">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <img src={PAS} alt="pas" style={{ width: '60px', height: '60px', padding:'4px', backgroundColor:'white', borderRadius:'8px' }}/>
                      <span style={{ alignSelf: 'center', marginLeft: '24px' }}>TRIGER</span>
                    </div>
                    <Button onClick={() => setDrawerOpen({open: true, mitra: "Trigger"})} style={{ backgroundColor:'#E3E8ED', border: 0 }}> <ArrowForward style={{ color:'#777777', fontSize:'18px', fontWeight:600 }}/> </Button>
                </div>
                <div className="flexbox">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <img src={Guard} alt="pas" style={{ width: '60px', height: '60px', padding:'4px', backgroundColor:'white', borderRadius:'8px' }}/>
                      <span style={{ alignSelf: 'center', marginLeft: '24px' }}>VENDOR LAINNYA</span>
                    </div>
                    <Button onClick={() => setDrawerOpen({open: true, mitra: "LAINNYA"})} style={{ backgroundColor:'#E3E8ED', border: 0 }}> <ArrowForward style={{ color:'#777777', fontSize:'18px', fontWeight:600 }}/> </Button>
                </div>
            </div>
            <Drawer
            anchor='bottom'
            open={drawerOpen?.open}
            onClose={handleCloseDrawer}
            >
              <div className="container-class">
                <div className="responsive-class">
                    <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                      <div style={{ backgroundColor:'#C4C4C4'}}/>
                      <div style={{ backgroundColor:'#C4C4C4', height: '4px', width: '30px' }}/>
                      <div onClick={handleCloseDrawer}><CloseIcon style={{ cursor: 'pointer' }}/></div>
                    </div>
                    <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                      <img 
                        src={drawerOpen?.mitra === 'Trigger' ? PAS : (drawerOpen?.mitra === "PAS" ? Trigger : Guard )} 
                        alt="pas"
                        style={drawerOpen?.mitra === "LAINNYA" ? {width: '50px'} : {}}
                      />
                      <span style={{ fontWeight:600, marginLeft: '24px' }} >{drawerOpen?.mitra === 'Trigger' ? "TRIGER": (drawerOpen?.mitra === "PAS" ? "PAS" : "VENDOR LAINNYA" ) }</span>
                    </div>
                    <div style={{ padding: '22px', fontSize:'14px', textAlign:'justify' }}>
                      {drawerOpen?.mitra === 'PAS' ? 
                        <p style={{ textAlign: 'justify' }}><b>PT. Putra Abadi Sejati (PAS) </b>adalah perusahaan Badan Usaha Jasa Pengamanan (BUJP) hadir untuk memenuhi standart kebutuhan pasar dalam bidang jasa keamanan secara optimal dengan didukung oleh perangkat kerja dan tenaga profesional yang berpengalaman serta kompeten dalam penanganan permasalahan teknologi dan sumber daya manusia.</p> 
                        : (drawerOpen?.mitra === "LAINNYA" ? (
                          <p style={{ textAlign: 'justify' }}>
                            Silahkan hubungi kontak CRM kami untuk penjelasan lebih lanjut.
                          </p>
                        ) : (
                          <p style={{ textAlign: 'justify' }}><b>PT. Tribuana Garda Reksa </b>merupakan perusahaan jasa pengamanan yang dibentuk dan dikembangkan untuk turut serta berpartisipasi dalam peningkatan perekonomian di era globalisasi dengan memberikan pelayanan khusus di bidang jasa keamanan (Profesional Guard).</p>
                        ) )
                      }
                      {drawerOpen?.mitra === "LAINNYA" ? (
                        <button style={{ padding: '8px 10px', justifyContent:'center', alignItems:'center', borderRadius:'4px', backgroundColor:'#F99F1B', border:0, color: 'white', fontWeight:'600px', width: '100%' }} >
                          <a target="_blank" href="https://api.whatsapp.com/send?phone=08119595493&text=Hallo admin, saya ingin mengetahui informasi lebih lanjut mengenai pengamanan event" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} >
                          HUBUNGI KAMI
                          </a>
                        </button>
                      ) : (
                        <button onClick={() => {navigate(`/services-list/${drawerOpen?.mitra}`); setDrawerOpen({open: false, mitra: ''}) }} style={{ padding: '8px 10px', justifyContent:'center', alignItems:'center', borderRadius:'4px', backgroundColor:'#F99F1B', border:0, color: 'white', fontWeight:'600px', width: '100%' }} >Lanjut</button>
                      ) }
                    </div>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>

    </>
  );
}

export default ListPengamananProvider;
