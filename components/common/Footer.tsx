import React from 'react';
import Logo from "../../public/images/zooperlogo.png"
import Image from 'next/image';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="px-6 py-4 bg-[#1C1F3E] text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* First Column */}
        <div className="flex flex-col items-start">
        <Image src={Logo} height={200} width={200} alt='Zooper Brand Logo'/>
          <address className="mb-2">
          Zopper Insurance Brokers Private Limited
(CIN no U66000DL2020PTC373851)

Principal Officer : Bhushan Harendra Sheth
          </address>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-start">
          <h4 className="mb-2 font-semibold text-lg">Quick Links</h4>
          <ul className='space-y-2'>
            <li>Privacy Policy</li>
            <li>Grievance Policy </li>
            <li>Fraud Detection</li>
            <li>Shipping Policy</li>
            <li>Terms of Use</li>
            <li>Cancellation And Refund</li>
            <li>E-Insurance Account</li>

          </ul>
        </div>

        <div className="flex flex-col items-center">
  <h4 className="mb-2  font-semibold text-lg">Address</h4>
  <div className="text-center max-w-xs">
    Registered Office Address
    <br />
    101. Pratap Nagar Mayur Vihar
    <br />
    Phase 1. New Delhi - 110091
    <br />
    <br />
    Corporate Office Address
    <br />
    7th Floor. Plot no 1. BGR Tower.
    <br />
    Sector 16 A, NOIDA U.P. 201301
  </div>
</div>

        <div className="flex flex-col items-start items-center">
          <h4 className="mb-2  font-semibold text-lg">Contact Us</h4>
          <div>
          care@zopperinsurance.com
          </div>
          <div>
          +91 7669248641
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
