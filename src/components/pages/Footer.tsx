const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer bg-base-200 container mx-auto text-base-content p-10">
        <nav>
          <h6 className="footer-title">Products</h6>
          <a className="link link-hover">Tents</a>
          <a className="link link-hover">Backpacks</a>
          <a className="link link-hover">Sleeping Bags</a>
          <a className="link link-hover">Camping Furniture</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press Kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Shipping & Returns</a>
          <a className="link link-hover">Warranty</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>
      </footer>

      <footer className="footer bg-base-200 text-base-content container mx-auto border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          {/* <img
            src="/images/campers-logo.png"
            alt="Campers Shop Logo"
            className="h-12 mr-4"
          /> */}
          <p>
            Campers Shop
            <br />
            Your trusted partner for outdoor adventures since 2005
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end ">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://facebook.com/campersshop"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V7c0-.955.192-1.333 1.115-1.333H18V1h-3.808C10.596 1 9 2.583 9 5.615V8z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/campersshop"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775C21.017 4.723 21.798 3.758 22.165 2.608c-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555C13.266 2.248 11.45 3.207 11.45 6.276c0 .448.045.884.128 1.3C7.64 7.437 4.091 5.477 1.662 2.498c-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212C18.571 20.606 23.735 12.885 23.423 6.961c.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/campersshop"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.316 3.608 1.291.975.975 1.229 2.242 1.291 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.316 2.633-1.291 3.608-.975.975-2.242 1.229-3.608 1.291-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.316-3.608-1.291-.975-.975-1.229-2.242-1.291-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.316-2.633 1.291-3.608.975-.975 2.242-1.229 3.608-1.291C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.755 0 8.343.012 7.054.071 5.76.131 4.57.377 3.575 1.372c-1.016 1.015-1.242 2.231-1.302 3.529C2.012 6.343 2 6.755 2 10s.012 3.657.071 4.946c.06 1.297.286 2.514 1.302 3.529 1.016 1.016 2.231 1.242 3.529 1.302C8.343 21.988 8.755 22 12 22s3.657-.012 4.946-.071c1.297-.06 2.514-.286 3.529-1.302 1.016-1.016 1.242-2.231 1.302-3.529.06-1.29.071-1.701.071-4.946s-.012-3.657-.071-4.946c-.06-1.297-.286-2.514-1.302-3.529C19.514.377 18.297.131 17 .071 15.657.012 15.245 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.133A3.971 3.971 0 0 1 8.029 12 3.971 3.971 0 0 1 12 8.029 3.971 3.971 0 0 1 15.971 12 3.971 3.971 0 0 1 12 15.971zm4.406-10.845a1.44 1.44 0 1 1 0-2.882 1.44 1.44 0 0 1 0 2.882z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
