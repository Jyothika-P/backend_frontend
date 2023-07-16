import Sidebar from "../components/sidebar";
import './Cryptopage1.css'

export default function Cryptopage1() {
    return (
        <div className="cryptopage1">
            <Sidebar />
            <div className="cp1-main">
                <div className="cp1-navbar">
                    <div className="text">
                        Sending Crypto
                    </div>
                </div>
                <div className="cp1-content">
                    <div className="text">
                        Transaction in progress
                    </div>
                    <div className="sub-text">
                        You are about to send crypto to +999 93598 94703
                    </div>
                    <div className="cp1-box">
                        <div className="box1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1.67078 7.5H17.5041C17.9644 7.5 18.3375 7.8731 18.3375 8.33333V16.6667C18.3375 17.1269 17.9644 17.5 17.5041 17.5H2.50411C2.04388 17.5 1.67078 17.1269 1.67078 16.6667V7.5ZM2.50411 2.5H15.0041V5.83333H1.67078V3.33333C1.67078 2.8731 2.04388 2.5 2.50411 2.5ZM12.5041 11.6667V13.3333H15.0041V11.6667H12.5041Z" fill="#5F6A85"/>
                            </svg>
                            <div className="text">
                                Virtual phone number
                            </div>
                            <div className="sub-text">
                                +999 93598 94703
                            </div>
                        </div>
                        <div className="box2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1.67078 7.5H17.5041C17.9644 7.5 18.3375 7.8731 18.3375 8.33333V16.6667C18.3375 17.1269 17.9644 17.5 17.5041 17.5H2.50411C2.04388 17.5 1.67078 17.1269 1.67078 16.6667V7.5ZM2.50411 2.5H15.0041V5.83333H1.67078V3.33333C1.67078 2.8731 2.04388 2.5 2.50411 2.5ZM12.5041 11.6667V13.3333H15.0041V11.6667H12.5041Z" fill="#5F6A85"/>
                            </svg>
                            <div className="text">
                                Connected wallet
                            </div>
                            <div className="sub-text">
                                0x423673403749736434635467
                            </div>
                        </div>
                        <div className="selection">
                            <label>Select Blockchain</label>
                            <select className="blockchain">
                                <option>Binance</option>
                            </select>
                        </div>
                        <div className="selection">
                            <label>Select Token</label>
                            <select className="blockchain">
                                <option>BUSD</option>
                            </select>
                        </div>
                        <div className="selection">
                            <label>Enter Amount</label>
                            <input type="number" className="blockchain" />
                        </div>
                    </div>
                    <div className="cp1-btn">
                        <button>Confirm Transaction</button>
                    </div>
                </div>
            </div>
        </div>
    )
}