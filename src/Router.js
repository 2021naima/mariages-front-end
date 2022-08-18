
import React, { useState, useEffect } from "react";
import { Routes, Route, Link,  BrowserRouter  } from "react-router-dom";
import MonMariage from "./pages/MonMariage";
import PrestatairesDash from "./pages/PrestatairesDash";
import Taches from "./pages/Taches";
import Invites from "./pages/Invites";
import Table from "./pages/Table";
import Budget from "./pages/Budget";
import RobesDash from "./pages/RobeDash";
import Reception from "./pages/Reception";
import Prestataires from "./pages/Prestataires";
import Mariee from "./pages/Mariee";
import Marie from "./pages/Marie";
import Robes from "./pages/Robes";
import Login from "./Athentication/Connexion";
import Inscription from "./Athentication/Inscription";
import Landing from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import DashboardNav from "./components/DashboardNav";
import Vendor from "./pages/VendorCategorie";

function Router() {
  return (
    
   

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/DashNav" element={<DashboardNav />} />
          <Route path="/Reception" element={<Reception />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/PrestatairesDash" element={<PrestatairesDash />} />
          <Route path="/taches" element={<Taches />} />
          <Route path="/Invites" element={<Invites />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Budget" element={<Budget />} />
          <Route path="/RobesDash" element={<RobesDash />} />
          <Route path="/Prestataires" element={<Prestataires />} />
          <Route path="/Mariee" element={<Mariee />} />
          <Route path="/Marie" element={<Marie />} />
          <Route path="/Robes" element={<Robes />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/connexion" element={<Login />} />
        </Routes>
      </BrowserRouter>

  );
}

export default Router;
