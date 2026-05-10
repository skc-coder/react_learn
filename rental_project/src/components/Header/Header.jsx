import "./Header.css";
import { House, Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    // Added className="header" to the header element
    <header className="header">
      <div className="item brand">
        <House className="icon" />
        <span>Rentals</span>
      </div>
      <div className="item contact">
        {" "}
        {/* Changed 'brand' to 'contact' */}
        <Phone className="icon" />
        <span>(+91) 8233 949 673</span>
      </div>
      <div className="item contact">
        {" "}
        {/* Changed 'brand' to 'contact' */}
        <Mail className="icon" />
        <span>xshe@duck.com</span>
      </div>
    </header>
  );
};

export default Header;
