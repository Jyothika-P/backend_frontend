import Sidebar from "./components/sidebar";
import './Paymentpage.css'
import { useState } from "react";
// import dotenv from "dotenv";
// dotenv.config();

export default function Paymentpage() {
    const [Normalhistory,setNormalhistory] = useState([]);
    const [Internalhistory,setIntenalhistory] = useState([]);
    
    async function check(){
        var data1,data2;
       const api = ""
    const address = "0x9217aBD6cD0a54ef915944Ff4bE80A6915EE9086";
    fetch(
    `https://api-testnet.bscscan.com/api?module=account&action=txlist&address=${address}&startblock=1&endblock=99999999&sort=asc&apikey=${api}`,
    ).then(async (res)=>{
        data1 = await res.json();
        var Normalhistory = data1.result;
        console.log(Normalhistory);
        setNormalhistory(Normalhistory);
        console.log(Normalhistory);
    })
    .catch((e)=>{console.log(e)});
    fetch(
        `https://api-testnet.bscscan.com/api?module=account&action=txlistinternal&address=${address}&startblock=1&endblock=99999999&sort=asc&apikey=${api}`,
        ).then(async (res)=>{
            data2 = await res.json();
            var Internalhistory = data2.result;
            console.log(Internalhistory);
            setIntenalhistory(Internalhistory);
            console.log(Internalhistory);
        })
        .catch((e)=>{console.log(e)});
        console.log(Normalhistory);
        console.log(Internalhistory);
    }
    return (
        <div className="paymentpage">
            <Sidebar />
            <div className="pp-main">
                <div className="pp-navbar">
                    <div className="text">
                        Payments
                    </div>
                    <div className="sub-text">
                        Start sending people crypto through their numbers
                    </div>
                </div>
                <div className="pp-btn">
                    <div className="btn1">
                        <button>Virtual Number</button>
                    </div>
                    <div className="btn2">
                        <button>Real Number</button>
                    </div>
                </div>
                <div className="pp-input">
                    <input type="number" placeholder="+999 93598 94703"></input>
                    <button onClick={check}>Proceed</button>
                </div>
                <div className="pp-transaction">
                    <div className="text">
                        Transaction history
                    </div>
                    <div className="sub-text">
                        Track all of your past transactions here
                    </div>
                    <div className="container">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}