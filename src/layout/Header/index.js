import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="app-header">
      <h5 className="my-0 mr-md-auto font-weight-normal">타임라인</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/timeline">타임라인</Link>
        <Link className="p-2 text-dark" to="/friends">친구목록</Link>
      </nav>
      <Link className="btn btn-sm btn-outline-primary" to="/login">로그인</Link>
    </div>
  );
}

export default Header;