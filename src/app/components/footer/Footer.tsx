export default function Footer() {
    return (
        <footer style={{backgroundColor:'rgb(16 29 9)'}}>
    <div className="container pb-1 pb-lg-5">
      <div className="row content-space-t-2">
        <div className="col-lg-3 mb-7 mb-lg-0">
          {/* Logo */}
          <div className="mb-5">
            <a className="navbar-brand" href="./index.html" aria-label="Space">
              <img
                className="navbar-brand-logo"
                src="./paramlogo.svg"
                alt="img Description"
              />
            </a>
          </div>
          {/* End Logo */}
          {/* List */}
          <ul className="list-unstyled list-py-1">
            <li>
              <a className="link-sm link-light" href="#">
                <i className="bi-geo-alt-fill me-1" /> Corner Tyrwhitt and, 24 Cradock Ave
Rosebank,
Johannesburg, 2196
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="tel:1-062-109-9222">
                <i className="bi-telephone-inbound-fill me-1" /> (010) 346 5261
              </a>
            </li>
          </ul>
          {/* End List */}
        </div>
        {/* End Col */}
        <div className="col-sm mb-7 mb-sm-0">
          <h5 className="text-white mb-3">Company</h5>
          {/* List */}
          <ul className="list-unstyled list-py-1 mb-0">
            <li>
              <a className="link-sm link-light" href="#">
                About
              </a>
            </li>
           
            <li>
              <a className="link-sm link-light" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                Hire us
              </a>
            </li>
          </ul>
          {/* End List */}
        </div>
        {/* End Col */}
        <div className="col-sm mb-7 mb-sm-0">
          <h5 className="text-white mb-3">Features</h5>
          {/* List */}
          <ul className="list-unstyled list-py-1 mb-0">
            
            <li>
              <a className="link-sm link-light" href="#">
                Release Notes
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                Pricing
              </a>
            </li>
          </ul>
          {/* End List */}
        </div>
        {/* End Col */}
        <div className="col-sm">
          <h5 className="text-white mb-3">Resources</h5>
          {/* List */}
          <ul className="list-unstyled list-py-1 mb-5">
            <li>
              <a className="link-sm link-light" href="#">
                <i className="bi-question-circle-fill me-1" /> Help
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                <i className="bi-person-circle me-1" /> Your Account
              </a>
            </li>
          </ul>
          {/* End List */}
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
      <div className="border-top border-white-10 my-7" />
      <div className="row mb-7">
        <div className="col-sm mb-3 mb-sm-0">
          {/* Socials */}
          <ul className="list-inline list-separator list-separator-light mb-0">
            <li className="list-inline-item">
              <a className="link-sm link-light" href="#">
                Privacy &amp; Policy
              </a>
            </li>
            <li className="list-inline-item">
              <a className="link-sm link-light" href="#">
                Terms
              </a>
            </li>
            <li className="list-inline-item">
              <a className="link-sm link-light" href="#">
                Site Map
              </a>
            </li>
          </ul>
          {/* End Socials */}
        </div>
        <div className="col-sm-auto">
          {/* Socials */}
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              {/* Button Group */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-soft-light btn-xs"
                  id="footerSelectLanguage"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-dropdown-animation=""
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/us.svg"
                      alt="img description"
                      width={16}
                    />
                    <span>English (US)</span>
                  </span>
                </button>
              </div>
              {/* End Button Group */}
            </li>
          </ul>
          {/* End Socials */}
        </div>
      </div>
      {/* Copyright */}
      {/* End Copyright */}
    </div>
  </footer>
    )
}