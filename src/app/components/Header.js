import React from 'react';
import WalletButton from './WalletButton';
import Link from 'next/link';

const Header = () => (
  <header style={{ padding: '1rem', backgroundColor: '#fff' }}>
    
    <Link href="/#">
      <h1 style={{ color: '#000' }}>KYOBI TRAVEL</h1>
    </Link>
    
    <WalletButton />
  </header>
);

export default Header;
