'use client'
import { useEffect } from "react";
import HeroSection from "./components/hero/Hero";
// import '../public/assets/js/custom.js'; // Adjust based on your file structure

export default function Home() {

  useEffect(() => {
  }, []);
  
  return (
    <div>
      <>
    <HeroSection />
    {/* Step */}
    <div className="container content-space-t-2 content-space-t-lg-3 content-space-b-lg-2">
      {/* Heading */}
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <span className="text-cap">ALWAYS INNOVATING</span>
        <h2>Solutions Rooted in Technology and Growth</h2>
      </div>
      {/* End Heading */}
      {/* Step */}
      <ul className="step step-md step-centered">
        <li className="step-item">
          <div className="step-content-wrapper">
            <span className="step-icon step-icon-soft-primary">1</span>
            <div className="step-content">
              <h3>Custom Software Development</h3>
              <p>
              Design, build, and deploy high-performance applications for enterprises and startups.
              </p>
            </div>
          </div>
        </li>
        <li className="step-item">
          <div className="step-content-wrapper">
            <span className="step-icon step-icon-soft-primary">2</span>
            <div className="step-content">
              <h3>QCTO-Compliant LMS</h3>
              <p>
                Empowering training providers with an accredited learning management system.
              </p>
            </div>
          </div>
        </li>
        <li className="step-item">
          <div className="step-content-wrapper">
            <span className="step-icon step-icon-soft-primary">3</span>
            <div className="step-content">
              <h3>Video Digitization & AI Content</h3>
              <p>Transforming traditional content into engaging, AI-powered digital media.</p>
            </div>
          </div>
        </li>
      </ul>
      {/* End Step */}
    </div>
    {/* End Step */}
    {/* Card Grid */}
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          {/* Card */}
          <a
            className="card card-transition align-items-end flex-wrap flex-row bg-img-start h-100 aos-init aos-animate"
            href="#"
            style={{
              backgroundImage: "url(./assets/svg/components/card-4.svg)",
              minHeight: "25rem"
            }}
            data-aos="fade-up"
          >
            <div className="card-body">
              <h2 className="card-title text-white">
                Revolutionizing the way start-ups win new customers
              </h2>
              <p className="card-text text-white">
                Automate best strategies and focus more on generating hq
                creatives.
              </p>
              <span className="card-link link-light">
                Learn more <i className="bi-chevron-right small ms-1" />
              </span>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-3 mb-4 mb-sm-0">
          {/* Card */}
          <a
            className="card card-transition align-items-end flex-wrap flex-row bg-img-start h-100 aos-init aos-animate"
            href="#"
            style={{
              backgroundImage: "url(./assets/svg/components/card-5.svg)",
              minHeight: "25rem"
            }}
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="card-body">
              <h3 className="card-title text-white">
                How we helped building the industry of the future
              </h3>
              <span className="card-link link-light">
                Learn more <i className="bi-chevron-right small ms-1" />
              </span>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-3">
          {/* Card */}
          <a
            className="card card-transition align-items-end flex-wrap flex-row bg-img-start h-100 aos-init aos-animate"
            href="#"
            style={{
              backgroundImage: "url(./assets/svg/components/card-6.svg)",
              minHeight: "25rem"
            }}
            data-aos="fade-up"
            data-aos-delay={150}
          >
            <div className="card-body">
              <h3 className="card-title text-white">
                How to save hundreds of thousands
              </h3>
              <span className="card-link link-light">
                Learn more <i className="bi-chevron-right small ms-1" />
              </span>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
    {/* End Card Grid */}
    {/* Clients */}
    <div className="container content-space-2 content-space-b-lg-3">
      {/* Swiper Slider */}
      <div className="js-swiper-clients swiper text-center swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-66abb661020232fc7"
          aria-live="polite"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 5"
            style={{ width: "211.2px", marginRight: 15 }}
          >
            <img
              className="avatar avatar-lg avatar-4x3"
              src="./assets/svg/brands/fitbit-dark.svg"
              alt="Logo"
            />
          </div>
          {/* End Slide */}
          <div
            className="swiper-slide swiper-slide-next"
            role="group"
            aria-label="2 / 5"
            style={{ width: "211.2px", marginRight: 15 }}
          >
            <img
              className="avatar avatar-lg avatar-4x3"
              src="./assets/svg/brands/forbes-dark.svg"
              alt="Logo"
            />
          </div>
          {/* End Slide */}
          <div
            className="swiper-slide"
            role="group"
            aria-label="3 / 5"
            style={{ width: "211.2px", marginRight: 15 }}
          >
            <img
              className="avatar avatar-lg avatar-4x3"
              src="./assets/svg/brands/mailchimp-dark.svg"
              alt="Logo"
            />
          </div>
          {/* End Slide */}
          <div
            className="swiper-slide"
            role="group"
            aria-label="4 / 5"
            style={{ width: "211.2px", marginRight: 15 }}
          >
            <img
              className="avatar avatar-lg avatar-4x3"
              src="./assets/svg/brands/layar-dark.svg"
              alt="Logo"
            />
          </div>
          {/* End Slide */}
          <div
            className="swiper-slide"
            role="group"
            aria-label="5 / 5"
            style={{ width: "211.2px", marginRight: 15 }}
          >
            <img
              className="avatar avatar-lg avatar-4x3"
              src="./assets/svg/brands/hubspot-dark.svg"
              alt="Logo"
            />
          </div>
          {/* End Slide */}
        </div>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        />
      </div>
      {/* End Swiper Slider */}
    </div>
    {/* End Clients */}
    {/* Card Grid */}
    <div
      className="bg-dark rounded-2 mx-3 mx-xl-10"
      style={{
        backgroundImage: "url(./assets/svg/components/wave-pattern-light.svg)"
      }}
    >
      <div className="container-xl container-fluid content-space-1 content-space-md-2 px-4 px-md-8 px-lg-10">
        <div className="px-3">
          {/* Heading */}
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
            <span className="text-cap text-white-70">Success stories</span>
            <h2 className="text-white">
            See how our venture studio is transforming industries
            </h2>
          </div>
          {/* End Heading */}
          {/* Swiper Slider */}
          <div className="js-swiper-card-blocks swiper swiper-equal-height swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-699a4c65342dbaf3"
              aria-live="polite"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              {/* Slide */}
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 5"
                style={{ width: "311.333px", marginRight: 15 }}
              >
                {/* Card */}
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="./assets/img/480x320/img7.jpg"
                    alt="Image Description"
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      {/* <img
                        className="avatar avatar-lg avatar-4x3"
                        src="./assets/svg/brands/airbnb-dark.svg"
                        alt="Logo"
                      /> */}
                      <h4>
                      Enterprise Software Development
                      </h4>
                    </div>
                    <p className="card-text">
                    🚀 Helping companies launch scalable tech solutions Our custom-built applications power businesses across industries, driving innovation and efficiency.
                    </p>
                  </div>
                  <div className="card-footer pt-0">
                    <a className="card-link" href="./page-customer-story.html">
                      Read story <i className="bi-chevron-right small ms-1" />
                    </a>
                  </div>
                </div>
                {/* End Card */}
              </div>
              {/* End Slide */}
              {/* Slide */}
              <div
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="2 / 5"
                style={{ width: "311.333px", marginRight: 15 }}
              >
                {/* Card */}
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="./assets/img/480x320/img6.jpg"
                    alt="Image Description"
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      {/* <img
                        className="avatar avatar-lg avatar-4x3"
                        src="./assets/svg/brands/shopify-dark.svg"
                        alt="Logo"
                      /> */}
                      <h4>QCTO LMS Solutions</h4>
                    </div>
                    <p className="card-text">
                      🎓 Enabling seamless online training & accreditation A platform designed to simplify training provider operations, from learner management to compliance.
                    </p>
                  </div>
                  <div className="card-footer pt-0">
                    <a className="card-link" href="./page-customer-story.html">
                      Read story <i className="bi-chevron-right small ms-1" />
                    </a>
                  </div>
                </div>
                {/* End Card */}
              </div>
              {/* End Slide */}
              {/* Slide */}
              <div
                className="swiper-slide"
                role="group"
                aria-label="3 / 5"
                style={{ width: "311.333px", marginRight: 15 }}
              >
                {/* Card */}
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="./assets/img/480x320/img14.jpg"
                    alt="Image Description"
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      {/* <img
                        className="avatar avatar-lg avatar-4x3"
                        src="./assets/svg/brands/forbes-dark.svg"
                        alt="Logo"
                      /> */}
                      <h4>
                      AI-Powered Content & Video Digitization
                      </h4>
                    </div>
                    <p className="card-text">
                    🎥 Revolutionizing learning with next-gen digital experiences We convert traditional training materials into engaging AI-driven content, making education more accessible.
                    </p>
                  </div>
                  <div className="card-footer pt-0">
                    <a className="card-link" href="./page-customer-story.html">
                      Read story <i className="bi-chevron-right small ms-1" />
                    </a>
                  </div>
                </div>
                {/* End Card */}
              </div>
              {/* End Slide */}
              {/* End Slide */}
            </div>
          </div>
          {/* End Swiper Slider */}
        </div>
      </div>
    </div>
    {/* End Card Grid */}
    {/* Features */}
    <div className="overflow-hidden">
      <div className="container content-space-2 content-space-lg-3">
        {/* Heading */}
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
          <span className="text-cap">How we work</span>
          <h2>
          Bringing ideas to life and building scalable ventures
          </h2>
        </div>
        {/* End Heading */}
        <div className="w-md-75 mx-md-auto">
          <div className="row justify-content-lg-center align-items-md-center">
            <div className="col-md-5 mb-7 mb-md-0">
              {/* List Checked */}
              <ul className="list-checked list-checked-soft-bg-primary list-checked-lg mb-5">
                <li className="list-checked-item">End-to-end software development</li>
                <li className="list-checked-item">AI-driven content transformation</li>
                <li className="list-checked-item">Cloud-based platforms for scale</li>
                <li className="list-checked-item">Seamless integration into business workflows</li>
                <li className="list-checked-item">UX-first approach to digital innovation</li>
              </ul>
              {/* End List Checked */}
              <a className="link" href="./page-services.html">
                Our services <i className="bi-chevron-right small ms-1" />
              </a>
            </div>
            {/* End Col */}
            <div className="col-md-7 col-lg-5">
              <div className="position-relative">
                {/* Card */}
                <div className="card">
                  <div className="card-body">
                    <span className="svg-icon text-primary mb-4">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M22.0318 8.59998C22.0318 10.4 21.4318 12.2 20.0318 13.5C18.4318 15.1 16.3318 15.7 14.2318 15.4C13.3318 15.3 12.3318 15.6 11.7318 16.3L6.93177 21.1C5.73177 22.3 3.83179 22.2 2.73179 21C1.63179 19.8 1.83177 18 2.93177 16.9L7.53178 12.3C8.23178 11.6 8.53177 10.7 8.43177 9.80005C8.13177 7.80005 8.73176 5.6 10.3318 4C11.7318 2.6 13.5318 2 15.2318 2C16.1318 2 16.6318 3.20005 15.9318 3.80005L13.0318 6.70007C12.5318 7.20007 12.4318 7.9 12.7318 8.5C13.3318 9.7 14.2318 10.6001 15.4318 11.2001C16.0318 11.5001 16.7318 11.3 17.2318 10.9L20.1318 8C20.8318 7.2 22.0318 7.59998 22.0318 8.59998Z"
                          fill="#035A4B"
                        />
                        <path
                          d="M4.23179 19.7C3.83179 19.3 3.83179 18.7 4.23179 18.3L9.73179 12.8C10.1318 12.4 10.7318 12.4 11.1318 12.8C11.5318 13.2 11.5318 13.8 11.1318 14.2L5.63179 19.7C5.23179 20.1 4.53179 20.1 4.23179 19.7Z"
                          fill="#035A4B"
                        />
                      </svg>
                    </span>
                    <h3 className="card-title">
                    We tackle the challenges businesses face
                    </h3>
                    <p className="card-text">From early-stage MVPs to enterprise solutions, our team builds market-ready products that solve real-world problems.
                    </p>
                  </div>
                </div>
                {/* End Card */}
                {/* SVG Shape */}
                <figure
                  className="position-absolute bottom-0 end-0 zi-n1 mb-n7 me-n7"
                  style={{ width: "12rem" }}
                >
                  <img
                    className="img-fluid"
                    src="./assets/svg/components/dots-lg.svg"
                    alt="Image Description"
                  />
                </figure>
                {/* End SVG Shape */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
    </div>
    {/* End Features */}
    {/* Card Grid */}
    <div className="container">
      <div className="w-lg-75 mx-lg-auto">
        <div className="row">
          <div
            className="col-md-6 mb-3 mb-lg-0 aos-init aos-animate"
            data-aos="fade-up"
          >
            {/* Icon Block */}
            <a className="card card-transition h-100" href="#">
              <div className="card-body">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <span className="svg-icon text-primary">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.1671 18.1421C22.4827 18.4577 23.0222 18.2331 23.0206 17.7868L23.0039 13.1053V5.52632C23.0039 4.13107 21.8729 3 20.4776 3H8.68815C7.2929 3 6.16183 4.13107 6.16183 5.52632V9H13C14.6568 9 16 10.3431 16 12V15.6316H19.6565L22.1671 18.1421Z"
                          fill="#035A4B"
                        />
                        <path
                          opacity="0.3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.98508 18V13C1.98508 11.8954 2.88051 11 3.98508 11H11.9851C13.0896 11 13.9851 11.8954 13.9851 13V18C13.9851 19.1046 13.0896 20 11.9851 20H4.10081L2.85695 21.1905C2.53895 21.4949 2.01123 21.2695 2.01123 20.8293V18.3243C1.99402 18.2187 1.98508 18.1104 1.98508 18ZM5.99999 14.5C5.99999 14.2239 6.22385 14 6.49999 14H11.5C11.7761 14 12 14.2239 12 14.5C12 14.7761 11.7761 15 11.5 15H6.49999C6.22385 15 5.99999 14.7761 5.99999 14.5ZM9.49999 16C9.22385 16 8.99999 16.2239 8.99999 16.5C8.99999 16.7761 9.22385 17 9.49999 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H9.49999Z"
                          fill="#035A4B"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h4 className="card-title">Ask a question</h4>
                    <p className="card-text text-body">
                    Connect with our team for expert guidance on tech solutions.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
          <div
            className="col-md-6 mb-3 mb-lg-0 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {/* Icon Block */}
            <a className="card card-transition h-100" href="#">
              <div className="card-body">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <span className="svg-icon text-primary">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.85714 1H11.7364C12.0911 1 12.4343 1.12568 12.7051 1.35474L17.4687 5.38394C17.8057 5.66895 18 6.08788 18 6.5292V19.0833C18 20.8739 17.9796 21 16.1429 21H4.85714C3.02045 21 3 20.8739 3 19.0833V2.91667C3 1.12612 3.02045 1 4.85714 1ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                          fill="#035A4B"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.85714 3H14.7364C15.0911 3 15.4343 3.12568 15.7051 3.35474L20.4687 7.38394C20.8057 7.66895 21 8.08788 21 8.5292V21.0833C21 22.8739 20.9796 23 19.1429 23H6.85714C5.02045 23 5 22.8739 5 21.0833V4.91667C5 3.12612 5.02045 3 6.85714 3ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                          fill="#035A4B"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h4 className="card-title">Read documentation</h4>
                    <p className="card-text text-body">
                    Explore our frameworks, best practices, and venture insights.</p>
                  </div>
                </div>
              </div>
            </a>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
    </div>
    {/* End Card Grid */}
    {/* Subscribe */}
    <div className="container content-space-2 content-space-lg-3">
      <div className="w-md-75 w-lg-50 text-center mx-md-auto">
        <div className="row justify-content-lg-between">
          {/* Heading */}
          <div className="mb-5">
            <span className="text-cap">Stay Ahead in the Digital Landscape</span>
            <h2>Subscribe for updates on software innovation and venture building.</h2>
          </div>
          {/* End Heading */}
          <form>
            {/* Input Card */}
            <div className="input-card input-card-sm border mb-3">
              <div className="input-card-form">
                <label
                  htmlFor="subscribeForm"
                  className="form-label visually-hidden"
                >
                  Enter email
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="subscribeForm"
                  placeholder="Enter email"
                  aria-label="Enter email"
                />
              </div>
              <button type="button" className="btn btn-primary btn-lg">
                Subscribe
              </button>
            </div>
            {/* End Input Card */}
          </form>
          <p className="small">
            You can unsubscribe at any time. Read our{" "}
            <a href="./page-privacy.html">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  {/* ========== FOOTER ========== */}
  <footer className="bg-dark">
    <div className="container pb-1 pb-lg-5">
      <div className="row content-space-t-2">
        <div className="col-lg-3 mb-7 mb-lg-0">
          {/* Logo */}
          <div className="mb-5">
            <a className="navbar-brand" href="./index.html" aria-label="Space">
              <img
                className="navbar-brand-logo"
                src="./assets/svg/logos/logo-white.svg"
                alt="Image Description"
              />
            </a>
          </div>
          {/* End Logo */}
          {/* List */}
          <ul className="list-unstyled list-py-1">
            <li>
              <a className="link-sm link-light" href="#">
                <i className="bi-geo-alt-fill me-1" /> 153 Williamson Plaza,
                Maggieberg
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="tel:1-062-109-9222">
                <i className="bi-telephone-inbound-fill me-1" /> +1 (062)
                109-9222
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
                Careers{" "}
                <span className="badge bg-warning text-dark rounded-pill ms-1">
                  We're hiring
                </span>
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                Customers <i className="bi-box-arrow-up-right small ms-1" />
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
                Press <i className="bi-box-arrow-up-right small ms-1" />
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                Release Notes
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                Integrations
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
        <div className="col-sm mb-7 mb-sm-0">
          <h5 className="text-white mb-3">Documentation</h5>
          {/* List */}
          <ul className="list-unstyled list-py-1 mb-0">
            <li>
              <a className="link-sm link-light" href="#">
                Support
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                Docs
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                Status
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                API Reference
              </a>
            </li>
            <li>
              <a className="link-sm link-light" href="#">
                Tech Requirements
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
              <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                <i className="bi-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                <i className="bi-google" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                <i className="bi-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                <i className="bi-github" />
              </a>
            </li>
            <li className="list-inline-item">
              {/* Button Group */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-soft-light btn-xs dropdown-toggle"
                  id="footerSelectLanguage"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-dropdown-animation=""
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/us.svg"
                      alt="Image description"
                      width={16}
                    />
                    <span>English (US)</span>
                  </span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="footerSelectLanguage"
                >
                  <a
                    className="dropdown-item d-flex align-items-center active"
                    href="#"
                  >
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/us.svg"
                      alt="Image description"
                      width={16}
                    />
                    <span>English (US)</span>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/de.svg"
                      alt="Image description"
                      width={16}
                    />
                    <span>Deutsch</span>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/es.svg"
                      alt="Image description"
                      width={16}
                    />
                    <span>Español</span>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg"
                      alt="Image description"
                      width={16}
                    />
                    <span>中文 (繁體)</span>
                  </a>
                </div>
              </div>
              {/* End Button Group */}
            </li>
          </ul>
          {/* End Socials */}
        </div>
      </div>
      {/* Copyright */}
      <div className="w-md-85 text-lg-center mx-lg-auto">
        <p className="text-white-50 small">
          © Front. 2021 Htmlstream. All rights reserved.
        </p>
        <p className="text-white-50 small">
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </p>
      </div>
      {/* End Copyright */}
    </div>
  </footer>
  {/* ========== END FOOTER ========== */}
  {/* ========== SECONDARY CONTENTS ========== */}
  {/* Sign Up */}
  <div
    className="modal fade"
    id="signupModal"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        {/* Header */}
        <div className="modal-close">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* End Header */}
        {/* Body */}
        <div className="modal-body">
          {/* Log in */}
          <div
            id="signupModalFormLogin"
            style={{ display: "none", opacity: 0 }}
            data-hs-show-animation-target-group="idForm"
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Log in</h2>
              <p>
                Don't have an account yet?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignup",
                   "groupName": "idForm"
                 }'
                  data-hs-show-animation-link-group="idForm"
                >
                  Sign up
                </a>
              </p>
            </div>
            {/* End Heading */}
            <div className="d-grid gap-2">
              <a className="btn btn-white btn-lg" href="#">
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    className="avatar avatar-xss me-2"
                    src="./assets/svg/brands/google-icon.svg"
                    alt="Image Description"
                  />
                  Log in with Google
                </span>
              </a>
              <a
                className="js-animation-link btn btn-primary btn-lg"
                href="#"
                data-hs-show-animation-options='{
                 "targetSelector": "#signupModalFormLoginWithEmail",
                 "groupName": "idForm"
               }'
                data-hs-show-animation-link-group="idForm"
              >
                Log in with Email
              </a>
            </div>
          </div>
          {/* End Log in */}
          {/* Log in with Modal */}
          <div
            id="signupModalFormLoginWithEmail"
            style={{ display: "none", opacity: 0 }}
            data-hs-show-animation-target-group="idForm"
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Log in</h2>
              <p>
                Don't have an account yet?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignup",
                   "groupName": "idForm"
                 }'
                  data-hs-show-animation-link-group="idForm"
                >
                  Sign up
                </a>
              </p>
            </div>
            {/* End Heading */}
            <form className="js-validate needs-validation">
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupModalFormLoginEmail"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupModalFormLoginEmail"
                  placeholder="email@site.com"
                  aria-label="email@site.com"
                  required
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    className="form-label"
                    htmlFor="signupModalFormLoginPassword"
                  >
                    Password
                  </label>
                  <a
                    className="js-animation-link form-label-link"
                    href="javascript:;"
                    data-hs-show-animation-options='{
                 "targetSelector": "#signupModalFormResetPassword",
                 "groupName": "idForm"
               }'
                    data-hs-show-animation-link-group="idForm"
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  id="signupModalFormLoginPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                  minLength={8}
                />
                <span className="invalid-feedback">
                  Please enter a valid password.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-primary form-control-lg"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          {/* End Log in with Modal */}
          {/* Sign up */}
          <div
            id="signupModalFormSignup"
            data-hs-show-animation-target-group="idForm"
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Sign up</h2>
              <p>
                Already have an account?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                  data-hs-show-animation-link-group="idForm"
                >
                  Log in
                </a>
              </p>
            </div>
            {/* End Heading */}
            <div className="d-grid gap-3">
              <a className="btn btn-white btn-lg" href="#">
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    className="avatar avatar-xss me-2"
                    src="./assets/svg/brands/google-icon.svg"
                    alt="Image Description"
                  />
                  Sign up with Google
                </span>
              </a>
              <a
                className="js-animation-link btn btn-primary btn-lg"
                href="#"
                data-hs-show-animation-options='{
                 "targetSelector": "#signupModalFormSignupWithEmail",
                 "groupName": "idForm"
               }'
                data-hs-show-animation-link-group="idForm"
              >
                Sign up with Email
              </a>
              <div className="text-center">
                <p className="small mb-0">
                  By continuing you agree to our{" "}
                  <a href="#">Terms and Conditions</a>
                </p>
              </div>
            </div>
          </div>
          {/* End Sign up */}
          {/* Sign up with Modal */}
          <div
            id="signupModalFormSignupWithEmail"
            style={{ display: "none", opacity: 0 }}
            data-hs-show-animation-target-group="idForm"
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Sign up</h2>
              <p>
                Already have an account?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                  data-hs-show-animation-link-group="idForm"
                >
                  Log in
                </a>
              </p>
            </div>
            {/* End Heading */}
            <form className="js-validate need-validate">
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupModalFormSignupEmail"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupModalFormSignupEmail"
                  placeholder="email@site.com"
                  aria-label="email@site.com"
                  required
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupModalFormSignupPassword"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  id="signupModalFormSignupPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                />
                <span className="invalid-feedback">
                  Your password is invalid. Please try again.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3" data-hs-validation-validate-class="">
                <label
                  className="form-label"
                  htmlFor="signupModalFormSignupConfirmPassword"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="confirmPassword"
                  id="signupModalFormSignupConfirmPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                  data-hs-validation-equal-field="#signupModalFormSignupPassword"
                />
                <span className="invalid-feedback">
                  Password does not match the confirm password.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-primary form-control-lg"
                >
                  Sign up
                </button>
              </div>
              <div className="text-center">
                <p className="small mb-0">
                  By continuing you agree to our{" "}
                  <a href="#">Terms and Conditions</a>
                </p>
              </div>
            </form>
          </div>
          {/* End Sign up with Modal */}
          {/* Reset Password */}
          <div
            id="signupModalFormResetPassword"
            style={{ display: "none", opacity: 0 }}
            data-hs-show-animation-target-group="idForm"
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Forgot password?</h2>
              <p>
                Enter the email address you used when you joined and we'll send
                you instructions to reset your password.
              </p>
            </div>
            {/* En dHeading */}
            <form className="js-validate need-validate">
              <div className="mb-3">
                {/* Form */}
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    className="form-label"
                    htmlFor="signupModalFormResetPasswordEmail"
                    tabIndex={0}
                  >
                    Your email
                  </label>
                  <a
                    className="js-animation-link form-label-link"
                    href="javascript:;"
                    data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                    data-hs-show-animation-link-group="idForm"
                  >
                    <i className="bi-chevron-left small" /> Back to Log in
                  </a>
                </div>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupModalFormResetPasswordEmail"
                  tabIndex={1}
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  required
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
                {/* End Form */}
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary form-control-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Reset Password */}
        </div>
        {/* End Body */}
        {/* Footer */}
        <div className="modal-footer d-block text-center py-sm-5">
          <small className="text-cap mb-4">
            Trusted by the world's best teams
          </small>
          <div className="w-85 mx-auto">
            <div className="row justify-content-between">
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/gitlab-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/fitbit-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/flow-xo-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/layar-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Footer */}
      </div>
    </div>
  </div>
  {/* Go To */}
  <a
    className="js-go-to go-to position-fixed animated hs-go-to-prevent-event fadeOutDown"
    href="javascript:;"
    style={{ right: "2rem", bottom: "2rem" }}
    data-hs-go-to-options='{
 "offsetTop": 700,
 "position": {
   "init": {
     "right": "2rem"
   },
   "show": {
     "bottom": "2rem"
   },
   "hide": {
     "bottom": "-2rem"
   }
 }
     }'
  >
    <i className="bi-chevron-up" />
  </a>
  {/* Cookie Alert */}
  <div className="container position-fixed bottom-0 start-0 end-0 zi-3"></div>
  {/* ========== END SECONDARY CONTENTS ========== */}
  {/* JS Global Compulsory  */}
  {/* JS Implementing Plugins */}
  {/* JS Front */}
  {/* JS Plugins Init. */}
  {/* Code injected by live-server */}
  <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
    <div id="shadow-host-companion" />
  </div>
</>

    </div>
  );
}
