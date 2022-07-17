import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
//import 'json-loader';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn REERERE
        </a>
      </header>
    </div>
  );
}

export function Layout() {
  return (
    <Outlet />
  )
}

export function Price() {
  return (
    <div>
      <h1>HALAMAN PRICING</h1>
    </div>
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
    <div>
      {isFound ? <Page /> :
        <p>halaman {nama} tidak ditemukan 404</p>}
    </div>
  )
}

export function Page() {
  var nama = window.location.pathname.replace(/\//g, "");
  return (
    <div>
      <h1>HALAMAN {nama}</h1>
    </div>
  )
}
