import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PropertyDetailsPage from './components/PropertyDetailsPage';
import LandlordDashboard from './components/OwnerDashboard';
import TenantDashboard from './components/TenantDashboard';
import OwnerDashboard from './components/OwnerDashboard';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import ManageListing from './components/ManageListing';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Properties from './components/Properties'; 
import TenantInquiries from './components/TenantInquiries'; 
import TenantApplicationPage from './components/TenantApplicationPage';
import Lease from "./components/Lease";
import Support from "./components/Support";
import Notification from "./components/Notification";
import Profile from "./components/Profile";
import OwnerNotifications from "./components/OwnerNotifications";
import OwnerProfile from "./components/OwnerProfile";
import ManageOwners from './components/ManageOwners';
import ManageTenants from './components/ManageTenant';
import ManagePayments from './components/ManagePayment';
import AdminProfile from './components/AdminProfile';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
        <Route path="/tenant-dashboard" element={<TenantDashboard />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/property-list" element={<Properties />} />
        <Route path="/apply" element={< TenantApplicationPage/>} />
        <Route path="/support" element={<Support />} />
        <Route path="/lease-management" element={<Lease />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manage-listing" element={<ManageListing />} />
        <Route path="/tenant-inquiries" element={<TenantInquiries />} />
        <Route path="/notifications" element={<OwnerNotifications />} />
        <Route path="/owner-profile" element={<OwnerProfile />} />
        <Route path="/manage-owners" element={<ManageOwners />} />
        <Route path="/manage-tenants" element={<ManageTenants />} />
        <Route path="/manage-payments" element={<ManagePayments />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
