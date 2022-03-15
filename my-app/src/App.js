import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="container">
      <Navbar name="Header(fixed)"/>
      <Sidebar name="Middle Pane"/>
      <Footer name="Footer(fixed)" />
    </div>
  )
}
