'use client'
// import Image from "next/image";
import { useEffect } from "react";
import HeroSection from "./components/hero/Hero";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
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
            <span className="step-icon" style={{backgroundColor:'#203b11ff', color:'whitesmoke'}}>1</span>
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
            <span className="step-icon" style={{backgroundColor:'#203b11ff', color:'whitesmoke'}}>2</span>
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
            <span className="step-icon" style={{backgroundColor:'#203b11ff', color:'whitesmoke'}}>3</span>
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
    <div
      className="rounded-2 mx-3 mx-xl-10 opacity-7"
      style={{
        backgroundColor:'#203b11ff'
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
                    src="./assets/img/others/card-1.jpg"
                    alt="img Description"
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
                    src="./assets/img/others/card-2.jpg"
                    alt="img Description"
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
                    src="./assets/img/others/card-3.jpg"
                    alt="img Description"
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
              <ul className="list-checked list-checked-soft-bg-dark list-checked-lg mb-5">
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
                    <span className="svg-icon mb-4">
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
                          fill="#203b11ff"
                        />
                        <path
                          d="M4.23179 19.7C3.83179 19.3 3.83179 18.7 4.23179 18.3L9.73179 12.8C10.1318 12.4 10.7318 12.4 11.1318 12.8C11.5318 13.2 11.5318 13.8 11.1318 14.2L5.63179 19.7C5.23179 20.1 4.53179 20.1 4.23179 19.7Z"
                          fill="#203b11ff"
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
                    alt="img Description"
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
                    <span className="svg-icon">
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
                          fill="#203b11ff"
                        />
                        <path
                          opacity="0.3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.98508 18V13C1.98508 11.8954 2.88051 11 3.98508 11H11.9851C13.0896 11 13.9851 11.8954 13.9851 13V18C13.9851 19.1046 13.0896 20 11.9851 20H4.10081L2.85695 21.1905C2.53895 21.4949 2.01123 21.2695 2.01123 20.8293V18.3243C1.99402 18.2187 1.98508 18.1104 1.98508 18ZM5.99999 14.5C5.99999 14.2239 6.22385 14 6.49999 14H11.5C11.7761 14 12 14.2239 12 14.5C12 14.7761 11.7761 15 11.5 15H6.49999C6.22385 15 5.99999 14.7761 5.99999 14.5ZM9.49999 16C9.22385 16 8.99999 16.2239 8.99999 16.5C8.99999 16.7761 9.22385 17 9.49999 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H9.49999Z"
                          fill="#203b11ff"
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
                    <span className="svg-icon">
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
                          fill="#203b11ff"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.85714 3H14.7364C15.0911 3 15.4343 3.12568 15.7051 3.35474L20.4687 7.38394C20.8057 7.66895 21 8.08788 21 8.5292V21.0833C21 22.8739 20.9796 23 19.1429 23H6.85714C5.02045 23 5 22.8739 5 21.0833V4.91667C5 3.12612 5.02045 3 6.85714 3ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                          fill="#203b11ff"
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
    <Subscribe />
  {/* ========== FOOTER ========== */}
  <Footer />
  {/* ========== END FOOTER ========== */}
    </>
    </div>
  );
}
