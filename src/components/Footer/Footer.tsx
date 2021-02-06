import React from 'react';

import './Footer.css';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <p>
                {' '}
                Designed & Developed By{' '}
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/nijinnazar/"
                >
                    Nijin Nazar.
                </a>{' '}
                Thanks To{' '}
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/madhavbahl/"
                >
                    Madhav Bahl
                </a>{' '}
                &{' '}
                <a
                    target="_blank"
                    href="https://www.youtube.com/user/projectevening"
                >
                    The Lean Programmer
                </a>
            </p>
        </div>
    );
};

export default Footer;
