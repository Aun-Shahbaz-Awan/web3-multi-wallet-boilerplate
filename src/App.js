import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [signer, setSigner] = useState({});
  // Get Signer
  // useEffect(() => {
  //   if (window.ethereum)
  //     setSigner(new ethers.providers.Web3Provider(window.ethereum).getSigner());
  //   else return;
  // }, []);
  // console.log("Signer:", signer);
  return (
    <div className="App">
      <nav className="Nav">
        <span className="Heading">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>WEB3 BOILERPLATE</h3>
        </span>
        <ConnectButton />
      </nav>
    </div>
  );
}

export default App;
