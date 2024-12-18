import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Header.css'; // Import custom styles

import siteLogo from '../../assets/logo.png' 
import { useAuth } from '../../context/AuthContext';
import { InputText } from 'primereact/inputtext';
const Header = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (login(username, password)) {
      setShowLoginDialog(false);
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid credentials');
    }
  };
  const items = [
    {
      label: 'HOME',
      icon: 'pi pi-home',
      template: () => <Link to="/">HOME</Link>,
    },
    {
      label: 'INVENTORY',
      icon: 'pi pi-list',
      items: [
        { label: 'PRE-OWNED INVENTORY', template: () => <Link to="/cars">PRE-OWNED INVENTORY</Link> },
        { label: 'FEATURED VEHICLES', template: () => <Link to="/cars/special">FEATURED VEHICLES</Link> },
        { label: 'CAR FINDER', template: () => <Link to="/forms/car-finder">CAR FINDER</Link> },
        { label: 'APPRAISE MY TRADE', template: () => <Link to="/forms/value-your-trade">APPRAISE MY TRADE</Link> },
        { label: 'BOOK APPOINTMENT', template: () => <Link to="/forms/book-appointment">BOOK APPOINTMENT</Link> },
      ],
    },
    {
      label: 'FINANCING',
      icon: 'pi pi-credit-card',
      items: [
        { label: 'FINANCE DEPARTMENT', template: () => <Link to="/forms/finance/department">FINANCE DEPARTMENT</Link> },
        { label: 'CAR LOAN CALCULATOR', template: () => <Link to="/forms/finance/calculator">CAR LOAN CALCULATOR</Link> },
        { label: 'APPLY FOR CREDIT', template: () => <Link to="/forms/finance">APPLY FOR CREDIT</Link> },
      ],
    },
    {
      label: 'ABOUT US',
      icon: 'pi pi-info-circle',
      template: () => <Link to="/about-us">ABOUT US</Link>,
    },
  ];

  const end = (
    <div className="flex items-center gap-3">
      {isLoggedIn ? (
        <Button label="Logout" icon="pi pi-sign-out" className="p-button-text custom-button text-white" onClick={logout} />
      ) : (
        <Button label="Login" icon="pi pi-sign-in" className="p-button-text custom-button text-white" onClick={() => setShowLoginDialog(true)} />
      )}
      <Button icon="pi pi-question-circle" className="p-button-text custom-button" />
    </div>
  )

  return (
    <header className="custom-header bg-gray-900 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img src={
              siteLogo
            } alt="Motor Superkings" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Centered Menu Items */}
        <div className="flex-grow flex justify-center">
          <Menubar
            model={items}
            className="bg-transparent border-none custom-menubar menu-item-text-white"
          />
        </div>

        {/* End buttons */}
        <div className="flex items-center gap-3">
          {end}
        </div>

      <Dialog header="Login" visible={showLoginDialog} onHide={() => setShowLoginDialog(false)} className="w-[300px]">
        <div className="flex flex-col gap-4">
          <InputText value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" feedback={false} />
          <Button label="Login" onClick={handleLogin} />
        </div>
      </Dialog>
      </div>
    </header>
  );
};

export default Header;

