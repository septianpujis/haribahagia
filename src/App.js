import { Outlet } from 'react-router-dom';
import './theme.css';
// //import 'json-loader';
// import url('https://www.w3schools.com/w3css/4/w3.css'); 
// import 'https://fonts.googleapis.com/css?family=Raleway';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
// import './theme.css';

export function Layout() {
  return (
    <Outlet />
  )
}

export function Price() {
  return (
    <>
      <h1>HALAMAN PRICING</h1>
    </>
  )
}

export function CariNama(nama) {

  var list =
    [
      {
        "link": "septian",
        "tipe": 1,
        "judul": "Pesta Ulang tahun"
      },
      {
        "link": "ruthgrace",
        "tipe": 2,
        "judul": "Wedding Ruth & Grace"
      }
    ];

  var isFound = false
  for (var i = 0; i < list.length; i++) {
    if (list[i].link === nama) {
      isFound = true
    }
  };

  return isFound;
}

export function Search() {
  var nama = window.location.pathname.replace(/\//g, "");
  nama = nama.toLowerCase();
  var isFound = false;
  isFound = CariNama(nama);

  return (
    <>
      {isFound ? <Page /> :
        <p>halaman {nama} tidak ditemukan 404</p>}
    </>
  )
}

export function Page() {
  const smallLinkStyle = {
    width : "25%"
  }

  const width = {
    width : "20%"
  }

  const largeLinkStyle = {
    margin : "0px 10px 0px 10px",
  }

  return (
    <>
      <div className="w3-bottom w3-hide-large w3-hide-medium">
        <div className="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
          <a href="#home" style={smallLinkStyle} className="w3-bar-item w3-button"><i className="fa fa-home w3-xxlarge"></i></a>
          <a href="#us" style={smallLinkStyle} className="w3-bar-item w3-button"><i className="fa fa-home w3-xxlarge"></i></a>
          <a href="#wedding" style={smallLinkStyle} className="w3-bar-item w3-button"><i className="fa fa-home w3-xxlarge"></i></a>
          <a href="#rsvp" style={smallLinkStyle} className="w3-bar-item w3-button"><i className="fa fa-home w3-xxlarge"></i></a>
        </div>
      </div>

      <div className="w3-bottom w3-row w3-center w3-hide-small" style={{bottom:"20px"}}>
        <div className="w3-row">
          <div className="w3-col w3-left w3-container " style={width}></div>
          <div className="w3-col w3-right w3-container" style={width}></div>
          <div className="w3-rest w3-container">
            <a href="#home" className="w3-button w3-xlarge w3-circle w3-teal" style={largeLinkStyle}><i className="fa fa-home w3-xlarge"></i></a>
            <a href="#us" className="w3-button w3-xlarge w3-circle w3-teal" style={largeLinkStyle}><i className="fa fa-home w3-xlarge"></i></a>
            <a href="#wedding" className="w3-button w3-xlarge w3-circle w3-teal" style={largeLinkStyle}><i className="fa fa-home w3-xlarge"></i></a>
            <a href="#rsvp" className="w3-button w3-xlarge w3-circle w3-teal" style={largeLinkStyle}><i className="fa fa-home w3-xlarge"></i></a>
          </div>
        </div>
      </div>

      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      
    </>
  )
}

function Header() {
  return (
    <header className="w3-display-container w3-wide bgimg w3-grayscale-min" id="home">
      <div className="w3-display-middle w3-text-white w3-center">
        <h1 className="w3-jumbo">Ruth & Grace</h1>
        <h2>Are getting married</h2>
        <h2><b>17.07.2017</b></h2>
      </div>
    </header>
  )
}