import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function NavBar() {
    return (
        <div className="sidebar">
            <ul>
                <li><FaGithub size={24} /> Github</li>
                <li><FaLinkedin size={24} /> LinkedIn</li>
                <li><MdEmail size={24} /> Email</li>
            </ul>
        </div>

    );
}

