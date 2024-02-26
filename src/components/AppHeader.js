import React from 'react';
import { Layout } from 'antd';
import Logo from '../assets/images/surveyr-logo.png';

const { Header } = Layout;
const AppHeader = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
      <img
        src={Logo} // Replace with the path to your logo image
        alt='Logo'
        style={{ height: '50px' }} // Adjust the height as needed
      />
    </Header>
  );
};

export default AppHeader;
