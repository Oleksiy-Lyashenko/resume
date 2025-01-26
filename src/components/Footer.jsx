import React from 'react';
import "../style/footer.css";

const Footer = () => {
    return (
      <div className="footer-container" id="contact">
        <div className="footer-card">
            <div className="footer-left">
                <h1 className="footer-heading">
                    Let's make your ideas <br />
                    look as good as they sound.
                </h1>
                <p className="footer-subheading">
                    Get in touch with me, I'm more fun in person!
                </p>
            </div>
            <div className="footer-right">
                <div className="footer-contact-info">
                    <p className='footer-contact-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <g clip-path="url(#clip0_51_65)">
                                <path d="M5.47519 0.817057C5.21953 0.199479 4.54551 -0.129232 3.90137 0.0467447L0.979492 0.84362C0.401758 1.00299 0 1.5276 0 2.12526C0 10.3397 6.66055 17.0003 14.875 17.0003C15.4727 17.0003 15.9973 16.5985 16.1566 16.0208L16.9535 13.0989C17.1295 12.4548 16.8008 11.7807 16.1832 11.5251L12.9957 10.1969C12.4545 9.97116 11.827 10.1272 11.4584 10.5821L10.117 12.219C7.77949 11.1133 5.88691 9.22077 4.78125 6.88327L6.41816 5.54518C6.87305 5.17331 7.0291 4.54909 6.80332 4.00788L5.47519 0.820378V0.817057Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_51_65">
                                    <rect width="17" height="17" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <a href="tel:709.763.9959" className="footer-contact-link">709.763.9959</a>
                    </p>
                    <p className='footer-contact-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <g clip-path="url(#clip0_51_67)">
                                <path d="M1.64062 2.1875C0.734863 2.1875 0 2.92236 0 3.82812C0 4.34424 0.242676 4.82959 0.65625 5.14062L8.09375 10.7188C8.4834 11.0093 9.0166 11.0093 9.40625 10.7188L16.8438 5.14062C17.2573 4.82959 17.5 4.34424 17.5 3.82812C17.5 2.92236 16.7651 2.1875 15.8594 2.1875H1.64062ZM0 6.01562V13.125C0 14.3315 0.980957 15.3125 2.1875 15.3125H15.3125C16.519 15.3125 17.5 14.3315 17.5 13.125V6.01562L10.0625 11.5938C9.2832 12.1782 8.2168 12.1782 7.4375 11.5938L0 6.01562Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_51_67">
                                    <rect width="17.5" height="17.5" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <a href="mailto:irynahealey@gmail.com" className="footer-contact-link">irynahealey@gmail.com</a>
                    </p>
                </div>

                <div className='footer-contact-line'></div>
            </div>
        </div>
      </div>
    );
  };

export default Footer;