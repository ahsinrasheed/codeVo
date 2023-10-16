import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-8 md: text-center">
      <div className="container mx-auto">
        <div className="md:flex md:justify-around">
          {/* Quick Links */}
          <div className="md:w-1/8	">
            <h2 className="text-xl font-semibold mb-4">Company</h2>
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
                <Link href="/contact">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:w-1/8	 mt-6 md:mt-0">
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Graphic Design</li>
              <li>Web Design</li>
              <li>CMR Development</li>
            </ul>
          </div>

          {/* Address */}
          <div className="md:w-1/8	 mt-6 md:mt-0">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p>
              House No. 607 Johar Town <br />
              Lahore, Pakistan
            </p>
          </div>

          {/* Social Media Links */}
          <div className="md:w-1/8 mt-6 md:mt-0">
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
