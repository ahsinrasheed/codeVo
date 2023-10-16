import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8 md: text-center">
      <div className="container mx-auto">
        <div className="md:flex md:justify-around">
          {/* Quick Links */}
          <div className="md:w-1/12	">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:w-1/12	 mt-6 md:mt-0">
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <ul>
              <li>Web Design</li>
              <li>Graphic Design</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Address */}
          <div className="md:w-1/12	 mt-6 md:mt-0">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p>
              House No. 607 Johar Town <br />
              Lahore, Pakistan
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 md:mt-0">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
