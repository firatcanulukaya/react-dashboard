import { React, useEffect, useState } from 'react';
import './assets/style/style.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Wallet from './components/Wallet';
import Loan from './components/Loan';
import MakePayment from './components/MakePayment'
import Transactions from './components/Transactions';

export default function App() {

  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('https://601d848abe5f340017a19c29.mockapi.io/menu')
      .then(response => response.json())
      .then(json => setMenu(json))
      .catch(error => console.log(error));
  }, []);

  const [user, setUser] = useState();
  const [wallet, setWallet] = useState();
  const [loan, setLoan] = useState();
  useEffect(() => {
    fetch('https://601d848abe5f340017a19c29.mockapi.io/dashboard')
      .then(response => response.json())
      .then(json => {
        setUser(json.user)
        setWallet(json.wallet)
        setLoan(json.loan)
      })
      .catch(error => console.log(error));
  }, []);

  const sidebarCollapse = () => {
    const sidebar = document.querySelector('.sidebar')
    const mainContent = document.querySelector('.main-content')
    sidebar.classList.toggle('sidebar-collapse')
    mainContent.classList.toggle('main-content-collapse')
  }

  const transData = [
    {
      id: 1,
      photo: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2014%2F11%2F7b084eaf9d7d564dd2667094c3dd1260a5e4d646.jpeg",
      name: "Cheescake",
      category: "Cupcakes",
      date: "09.04.2018",
      status: "processed"
    },
    {
      id: 2,
      photo: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/rainbow-cake600x600_2.jpg?ext=.jpg",
      name: "Rainbow Cake",
      category: "Cakes",
      date: "09.04.2018",
      status: "onhold"
    },
  ];

  const paysData = [
    {
      "id": "12",
      "title": "Donations",
      "icon": "fas fa-hand-holding-usd",
    },
    {
      "id": "13",
      "title": "Airtime",
      "icon": "fas fa-phone"
    },
    {
      "id": "14",
      "title": "Internet",
      "icon": "fas fa-wifi"
    },
    {
      "id": "15",
      "title": "Data",
      "icon": "fas fa-database"
    },
    {
      "id": "16",
      "title": "Electricity",
      "icon": "fas fa-bolt"
    },
    {
      "id": "17",
      "title": "Betting",
      "icon": "fas fa-clipboard-list"
    },
    {
      "id": "18",
      "title": "Water",
      "icon": "fas fa-tint"
    },
    {
      "id": "19",
      "title": "Rent",
      "icon": "fas fa-home"
    },
    {
      "id": "20",
      "title": "Transport",
      "icon": "fas fa-bus"
    },
    {
      "id": "21",
      "title": "Ad",
      "icon": "fab fa-google"
    },
    {
      "id": "22",
      "title": "Insurance",
      "icon": "fas fa-shield-alt"
    },
    {
      "id": "23",
      "title": "Hospital",
      "icon": "fas fa-hospital"
    }
  ]

  return (
    <div className="wrapper">
      <Navbar sidebarCollapse={sidebarCollapse} />
      <Sidebar user={user} menu={menu} sidebarCollapse={sidebarCollapse} />
      <div className="main-content">

        <div className="container">
          <div className="row">
            <div className="col-50">
              <Wallet wallet={wallet} />
            </div>
            <div className="col-50">
              <Loan loan={loan} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <MakePayment data={paysData} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Transactions transData={transData} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );

}
