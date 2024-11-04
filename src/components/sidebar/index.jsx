import { useNavigate } from 'react-router-dom';
import './main.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = () => {
    const pathname = window.location.pathname;
    const navigate = useNavigate();

    const links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
        { path: '/company', label: 'Company' },
        { path: '/service', label: 'Service' },
        { path: '/works', label: 'Works' },
        { path: '/jobs', label: 'Jobs' },
        { path: '/fayzullo', label: 'fayzullo' },
    ];



    return (
        <div className="sidebar">


        </div>
    );
};

export default Sidebar;
