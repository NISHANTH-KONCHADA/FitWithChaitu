import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import { AuthContext } from '../auth/AuthContext';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const linkClasses = "text-accent-cream/80 hover:text-accent-cream transition-colors duration-300 py-2";
    const activeLinkClasses = "text-accent-cream font-bold";

    const handleLogout = () => {
        logout();
        // FIX: Corrected typo from `setIsMenu-Open` to `setIsMenuOpen`.
        setIsMenuOpen(false);
        navigate('/');
    };

    const navLinks = (
      <>
        <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/programs" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses} onClick={() => setIsMenuOpen(false)}>Programs</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses} onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
      </>
    );

    return (
        <header className="bg-dark-bg/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <NavLink to="/" className="text-3xl font-heading text-accent-cream tracking-wider">
                    FitWithChaitu
                </NavLink>

                <div className="hidden md:flex items-center space-x-6">
                    {navLinks}
                    {isAuthenticated ? (
                        <>
                            <NavLink to="/dashboard">
                                <Button variant="secondary">Dashboard</Button>
                            </NavLink>
                            <Button variant="primary" onClick={handleLogout}>Logout</Button>
                        </>
                    ) : (
                        <NavLink to="/login">
                             <Button variant="secondary">Clients Login</Button>
                        </NavLink>
                    )}
                </div>
                
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-accent-cream focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-dark-bg">
                    <div className="px-6 pt-2 pb-4 flex flex-col space-y-3">
                        {navLinks}
                        {isAuthenticated ? (
                          <>
                            <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                              <Button variant="secondary" className="w-full">Dashboard</Button>
                            </NavLink>
                            <Button variant="primary" className="w-full" onClick={handleLogout}>Logout</Button>
                          </>
                        ) : (
                           <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                               <Button variant="secondary" className="w-full">Clients Login</Button>
                           </NavLink>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;