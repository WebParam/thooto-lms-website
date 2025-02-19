'use client'
import { useEffect } from "react";
// import '../public/assets/js/custom.js'; // Adjust based on your file structure

export default function Home() {

  useEffect(() => {
  }, []);
  
  return (
    <div>
      <>
  {/* ========== HEADER ========== */}
  <header
    id="header"
    className="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-dark navbar-show-hide navbar-untransitioned"
    data-hs-header-options='{
      "fixMoment": 1000,
      "fixEffect": "slide"
    }'
  >
    {/* Topbar */}
    <div className="container navbar-topbar">
      <nav className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
        {/* Toggler */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topbarNavDropdown"
          aria-controls="topbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="d-flex justify-content-between align-items-center small">
            <span className="navbar-toggler-text">Topbar</span>
            <span className="navbar-toggler-default">
              <i className="bi-chevron-down ms-2" />
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-chevron-up ms-2" />
            </span>
          </span>
        </button>
        {/* End Toggler */}
        <div
          id="topbarNavDropdown"
          className="navbar-nav-wrap-collapse collapse navbar-collapse navbar-topbar-collapse"
        >
          <div className="navbar-toggler-wrapper">
            <div className="navbar-topbar-toggler d-flex justify-content-between align-items-center">
              <span className="navbar-toggler-text small">Topbar</span>
              {/* Toggler */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#topbarNavDropdown"
                aria-controls="topbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi-x" />
              </button>
              {/* End Toggler */}
            </div>
          </div>
          <ul className="navbar-nav">
            {/* Demos */}
            <li className="hs-has-mega-menu nav-item">
              <a
                id="demosMegaMenu"
                className="hs-mega-menu-invoker nav-link dropdown-toggle active"
                aria-current="page"
                href="#"
                role="button"
              >
                Demos
              </a>
              {/* Mega Menu */}
              <div
                className="hs-mega-menu dropdown-menu w-100 hs-mega-menu-desktop-lg animated"
                aria-labelledby="demosMegaMenu"
                style={{
                  minWidth: "40rem",
                  animationDuration: "300ms",
                  display: "none"
                }}
              >
                {/* Promo */}
                <div className="navbar-dropdown-menu-promo">
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link active"
                      href="./index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.6 5.59998L20.9 10.9C21.3 11.3 21.3 11.9 20.9 12.3L17.6 15.6L11.6 9.59998L15.6 5.59998ZM2.3 12.3L7.59999 17.6L11.6 13.6L5.59999 7.59998L2.3 10.9C1.9 11.3 1.9 11.9 2.3 12.3Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M17.6 15.6L12.3 20.9C11.9 21.3 11.3 21.3 10.9 20.9L7.59998 17.6L13.6 11.6L17.6 15.6ZM10.9 2.3L5.59998 7.6L9.59998 11.6L15.6 5.6L12.3 2.3C11.9 1.9 11.3 1.9 10.9 2.3Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Main
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Over 60 corporate, agency, portfolio, account and
                            many more pages.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-real-estate/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
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
                                d="M6.5 3C5.67157 3 5 3.67157 5 4.5V6H3.5C2.67157 6 2 6.67157 2 7.5C2 8.32843 2.67157 9 3.5 9H5V19.5C5 20.3284 5.67157 21 6.5 21C7.32843 21 8 20.3284 8 19.5V9H20.5C21.3284 9 22 8.32843 22 7.5C22 6.67157 21.3284 6 20.5 6H8V4.5C8 3.67157 7.32843 3 6.5 3Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.5 11H10V17.5C10 18.3284 10.6716 19 11.5 19H15.5C17.3546 19 19.0277 18.2233 20.2119 16.9775C20.1436 16.9922 20.0727 17 20 17C19.4477 17 19 16.5523 19 16V13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13V15.9657C21.6334 14.9626 22 13.7741 22 12.5C22 11.6716 21.3284 11 20.5 11Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Real Estate
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Find the latest homes for sale, real estate market
                            data.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-jobs/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Jobs{" "}
                            <span className="badge bg-success rounded-pill ms-1">
                              Hot
                            </span>
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Search millions of jobs online to find the next step
                            in your career.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                </div>
                {/* End Promo */}
                {/* Promo */}
                <div className="navbar-dropdown-menu-promo">
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-course/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 19H4C2.9 19 2 18.1 2 17H22C22 18.1 21.1 19 20 19Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M20 5H4C3.4 5 3 5.4 3 6V17H21V6C21 5.4 20.6 5 20 5Z"
                                fill="#035A4B"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.9167 6.83334H9.91666C9.18899 6.83334 8.66666 7.37744 8.66666 8.08334V13.9167C8.66666 14.6226 9.18899 15.1667 9.91666 15.1667H14.9167C15.1841 15.1667 15.3333 15.0112 15.3333 14.75V14.3333H10.3333C10.1032 14.3333 9.91665 14.1468 9.91665 13.9167C9.91665 13.6866 10.1032 13.5 10.3333 13.5H15.3333V7.25001C15.3333 6.9888 15.1841 6.83334 14.9167 6.83334Z"
                                fill="#035A4B"
                              />
                              <mask
                                id="mask0"
                                mask-type="alpha"
                                maskUnits="userSpaceOnUse"
                                x={8}
                                y={6}
                                width={8}
                                height={10}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.9167 6.83334H9.91666C9.18899 6.83334 8.66666 7.37744 8.66666 8.08334V13.9167C8.66666 14.6226 9.18899 15.1667 9.91666 15.1667H14.9167C15.1841 15.1667 15.3333 15.0112 15.3333 14.75V14.3333H10.3333C10.1032 14.3333 9.91665 14.1468 9.91665 13.9167C9.91665 13.6866 10.1032 13.5 10.3333 13.5H15.3333V7.25001C15.3333 6.9888 15.1841 6.83334 14.9167 6.83334Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0)"></g>
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Course{" "}
                            <span className="badge bg-success rounded-pill ms-1">
                              Hot
                            </span>
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Learn on your schedule. An online learning and
                            teaching demo.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-shop/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M20 22H4C3.4 22 3 21.6 3 21V2H21V21C21 21.6 20.6 22 20 22Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M12 14C9.2 14 7 11.8 7 9V5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5V9C9 10.7 10.3 12 12 12C13.7 12 15 10.7 15 9V5C15 4.4 15.4 4 16 4C16.6 4 17 4.4 17 5V9C17 11.8 14.8 14 12 14Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            E-Commerce
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Choose an online store &amp; get your business
                            online today!
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-app-marketplace/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M18 10V20C18 20.6 18.4 21 19 21C19.6 21 20 20.6 20 20V10H18Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M11 10V17H6V10H4V20C4 20.6 4.4 21 5 21H12C12.6 21 13 20.6 13 20V10H11Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M10 10C10 11.1 9.1 12 8 12C6.9 12 6 11.1 6 10H10Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M18 10C18 11.1 17.1 12 16 12C14.9 12 14 11.1 14 10H18Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M14 4H10V10H14V4Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M17 4H20L22 10H18L17 4Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M7 4H4L2 10H6L7 4Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10H6ZM10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10H10ZM18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10H18ZM19 2H5C4.4 2 4 2.4 4 3V4H20V3C20 2.4 19.6 2 19 2ZM12 17C12 16.4 11.6 16 11 16H6C5.4 16 5 16.4 5 17C5 17.6 5.4 18 6 18H11C11.6 18 12 17.6 12 17Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            App Marketplace
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Find apps and integrates seamlessly with popular
                            apps.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                </div>
                {/* End Promo */}
                {/* Promo */}
                <div className="navbar-dropdown-menu-promo">
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-help-desk/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
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
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Help Desk
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            A customer service demo that helps you balance
                            customer needs.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link"
                      href="https://htmlstream.com/contact-us"
                      target="_blank"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
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
                                d="M12 17C16.4183 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 7.58172 17 12 17Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.53819 9L10.568 19.3624L11.976 18.8149L13.3745 19.3674L17.4703 9H6.53819ZM9.46188 11H14.5298L11.9759 17.4645L9.46188 11Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M10 22H14V22C14 23.1046 13.1046 24 12 24V24C10.8954 24 10 23.1046 10 22V22Z"
                                fill="#035A4B"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18C15.5523 18 16 18.4477 16 19C16 19.5523 15.5523 20 15 20C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C8.44772 18 8 17.5523 8 17Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            New demo ideas?
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Send us your suggestions{" "}
                            <i className="bi-box-arrow-up-right ms-1" />
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item"></div>
                  {/* End Promo Item */}
                </div>
                {/* End Promo */}
              </div>
              {/* End Mega Menu */}
            </li>
            {/* End Demos */}
            {/* Docs */}
            <li
              className="hs-has-mega-menu nav-item"
              data-hs-mega-menu-item-options='{
            "desktop": {
              "maxWidth": "20rem"
            }
          }'
            >
              <a
                id="docsMegaMenu"
                className="hs-mega-menu-invoker nav-link dropdown-toggle"
                href="#"
                role="button"
              >
                Docs
              </a>
              {/* Mega Menu */}
              <div
                className="hs-mega-menu hs-position-right dropdown-menu hs-mega-menu-desktop-lg animated"
                aria-labelledby="docsMegaMenu"
                style={{
                  minWidth: "20rem",
                  maxWidth: "20rem",
                  animationDuration: "300ms",
                  display: "none"
                }}
              >
                {/* Link */}
                <a
                  className="navbar-dropdown-menu-media-link"
                  href="./documentation/index.html"
                >
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <span className="svg-icon svg-icon-sm text-primary">
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
                    <div className="flex-grow-1 ms-3">
                      <span className="navbar-dropdown-menu-media-title">
                        Documentation{" "}
                        <span className="badge bg-primary rounded-pill ms-1">
                          v4.3.1
                        </span>
                      </span>
                      <p className="navbar-dropdown-menu-media-desc">
                        Development guides for building projects with Space
                      </p>
                    </div>
                  </div>
                </a>
                {/* End Link */}
                <div className="dropdown-divider" />
                {/* Link */}
                <a
                  className="navbar-dropdown-menu-media-link"
                  href="./snippets/index.html"
                >
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <span className="svg-icon svg-icon-sm text-primary">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M21 2H13C12.4 2 12 2.4 12 3V13C12 13.6 12.4 14 13 14H21C21.6 14 22 13.6 22 13V3C22 2.4 21.6 2 21 2ZM15.7 8L14 10.1V5.80005L15.7 8ZM15.1 4H18.9L17 6.40002L15.1 4ZM17 9.59998L18.9 12H15.1L17 9.59998ZM18.3 8L20 5.90002V10.2L18.3 8ZM9 2H3C2.4 2 2 2.4 2 3V21C2 21.6 2.4 22 3 22H9C9.6 22 10 21.6 10 21V3C10 2.4 9.6 2 9 2ZM4.89999 12L4 14.8V9.09998L4.89999 12ZM4.39999 4H7.60001L6 8.80005L4.39999 4ZM6 15.2L7.60001 20H4.39999L6 15.2ZM7.10001 12L8 9.19995V14.9L7.10001 12Z"
                            fill="#035A4B"
                          />
                          <path
                            d="M21 18H13C12.4 18 12 17.6 12 17C12 16.4 12.4 16 13 16H21C21.6 16 22 16.4 22 17C22 17.6 21.6 18 21 18ZM19 21C19 20.4 18.6 20 18 20H13C12.4 20 12 20.4 12 21C12 21.6 12.4 22 13 22H18C18.6 22 19 21.6 19 21Z"
                            fill="#035A4B"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="navbar-dropdown-menu-media-title">
                        Snippets
                      </span>
                      <p className="navbar-dropdown-menu-media-desc">
                        Move quickly with copy-to-clipboard feature
                      </p>
                    </div>
                  </div>
                </a>
                {/* End Link */}
              </div>
              {/* End Mega Menu */}
            </li>
            {/* End Docs */}
          </ul>
        </div>
      </nav>
    </div>
    {/* End Topbar */}
    <div className="container">
      <nav className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
        {/* Default Logo */}
        <a className="navbar-brand" href="./index.html" aria-label="Front">
          <img
            className="navbar-brand-logo"
            src="./assets/svg/logos/logo-white.svg"
            alt="Logo"
          />
        </a>
        {/* End Default Logo */}
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-default">
            <i className="bi-list" />
          </span>
          <span className="navbar-toggler-toggled">
            <i className="bi-x" />
          </span>
        </button>
        {/* End Toggler */}
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-absolute-top-scroller">
            <ul className="navbar-nav">
              {/* Landings */}
              <li className="hs-has-mega-menu nav-item">
                <a
                  id="landingsMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle active"
                  aria-current="page"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Landings
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-mega-menu dropdown-menu w-100 hs-mega-menu-desktop-lg animated"
                  aria-labelledby="landingsMegaMenu"
                  style={{
                    minWidth: "30rem",
                    animationDuration: "300ms",
                    display: "none"
                  }}
                >
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block">
                      {/* Banner Image */}
                      <div
                        className="navbar-dropdown-menu-banner"
                        style={{
                          backgroundImage:
                            "url(./assets/svg/components/shape-3.svg)"
                        }}
                      >
                        <div className="navbar-dropdown-menu-banner-content">
                          <div className="mb-4">
                            <span className="h2 d-block">Branding Works</span>
                            <p>
                              Experience a level of our quality in both design
                              &amp; customization works.
                            </p>
                          </div>
                          <a
                            className="btn btn-primary btn-transition"
                            href="#"
                          >
                            Learn more <i className="bi-chevron-right small" />
                          </a>
                        </div>
                      </div>
                      {/* End Banner Image */}
                    </div>
                    {/* End Col */}
                    <div className="col-lg-6">
                      <div className="navbar-dropdown-menu-inner">
                        <div className="row">
                          <div className="col-sm mb-3 mb-sm-0">
                            <span className="dropdown-header">Classic</span>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-corporate.html"
                            >
                              Corporate
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-analytics.html"
                            >
                              Analytics{" "}
                              <span className="badge bg-primary rounded-pill ms-1">
                                Hot
                              </span>
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-studio.html"
                            >
                              Studio
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-marketing.html"
                            >
                              Marketing
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-advertisement.html"
                            >
                              Advertisement
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-consulting.html"
                            >
                              Consulting
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-portfolio.html"
                            >
                              Portfolio
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-software.html"
                            >
                              Software
                            </a>
                            <a
                              className="dropdown-item active"
                              href="./landing-classic-business.html"
                            >
                              Business
                            </a>
                          </div>
                          {/* End Col */}
                          <div className="col-sm">
                            <div className="mb-3">
                              <span className="dropdown-header">App</span>
                              <a
                                className="dropdown-item "
                                href="./landing-app-ui-kit.html"
                              >
                                UI Kit
                              </a>
                              <a
                                className="dropdown-item "
                                href="./landing-app-saas.html"
                              >
                                SaaS
                              </a>
                              <a
                                className="dropdown-item "
                                href="./landing-app-workflow.html"
                              >
                                Workflow
                              </a>
                              <a
                                className="dropdown-item "
                                href="./landing-app-payment.html"
                              >
                                Payment
                              </a>
                              <a
                                className="dropdown-item "
                                href="./landing-app-tool.html"
                              >
                                Tool
                              </a>
                            </div>
                            <span className="dropdown-header">Onepage</span>
                            <a
                              className="dropdown-item "
                              href="./landing-onepage-corporate.html"
                            >
                              Corporate
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-onepage-saas.html"
                            >
                              SaaS{" "}
                              <span className="badge bg-primary rounded-pill ms-1">
                                Hot
                              </span>
                            </a>
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                      </div>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Landings */}
              {/* Company */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="companyMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Company
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu hs-sub-menu-desktop-lg animated"
                  aria-labelledby="companyMegaMenu"
                  style={{
                    minWidth: "14rem",
                    animationDuration: "300ms",
                    display: "none"
                  }}
                >
                  <a className="dropdown-item " href="./page-about.html">
                    About
                  </a>
                  <a className="dropdown-item " href="./page-services.html">
                    Services
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-customer-stories.html"
                  >
                    Customer Stories
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-customer-story.html"
                  >
                    Customer Story
                  </a>
                  <a className="dropdown-item " href="./page-careers.html">
                    Careers
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-careers-overview.html"
                  >
                    Careers Overview
                  </a>
                  <a className="dropdown-item " href="./page-hire-us.html">
                    Hire Us
                  </a>
                  <a className="dropdown-item " href="./page-pricing.html">
                    Pricing
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-contacts-agency.html"
                  >
                    Contacts: Agency
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-contacts-startup.html"
                  >
                    Contacts: Startup
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Company */}
              {/* Account */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="accountMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Account
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu hs-sub-menu-desktop-lg animated"
                  aria-labelledby="accountMegaMenu"
                  style={{
                    minWidth: "14rem",
                    animationDuration: "300ms",
                    display: "none"
                  }}
                >
                  {/* Authentication */}
                  <div className="hs-has-sub-menu nav-item">
                    <a
                      id="authenticationMegaMenu"
                      className="hs-mega-menu-invoker dropdown-item dropdown-toggle "
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Authentication
                    </a>
                    <div
                      className="hs-sub-menu dropdown-menu hs-sub-menu-desktop-lg animated"
                      aria-labelledby="authenticationMegaMenu"
                      style={{
                        minWidth: "14rem",
                        animationDuration: "300ms",
                        display: "none"
                      }}
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                      >
                        Signup Modal
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item " href="./page-login.html">
                        Login
                      </a>
                      <a className="dropdown-item " href="./page-signup.html">
                        Signup
                      </a>
                      <a
                        className="dropdown-item "
                        href="./page-reset-password.html"
                      >
                        Reset Password
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        className="dropdown-item "
                        href="./page-login-simple.html"
                      >
                        Login Simple
                      </a>
                      <a
                        className="dropdown-item "
                        href="./page-signup-simple.html"
                      >
                        Signup Simple
                      </a>
                      <a
                        className="dropdown-item "
                        href="./page-reset-password-simple.html"
                      >
                        Reset Password Simple
                      </a>
                    </div>
                  </div>
                  {/* End Authentication */}
                  <a className="dropdown-item " href="./account-overview.html">
                    Personal Info
                  </a>
                  <a className="dropdown-item " href="./account-security.html">
                    Security
                  </a>
                  <a
                    className="dropdown-item "
                    href="./account-notifications.html"
                  >
                    Notifications
                  </a>
                  <a
                    className="dropdown-item "
                    href="./account-preferences.html"
                  >
                    Preferences
                  </a>
                  <a className="dropdown-item " href="./account-orders.html">
                    Orders
                  </a>
                  <a className="dropdown-item " href="./account-wishlist.html">
                    Wishlist
                  </a>
                  <a className="dropdown-item " href="./account-payments.html">
                    Payments
                  </a>
                  <a className="dropdown-item " href="./account-address.html">
                    Address
                  </a>
                  <a className="dropdown-item " href="./account-teams.html">
                    Teams
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Account */}
              {/* Pages */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="pagesMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Pages
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu hs-sub-menu-desktop-lg animated"
                  aria-labelledby="pagesMegaMenu"
                  style={{
                    minWidth: "14rem",
                    animationDuration: "300ms",
                    display: "none"
                  }}
                >
                  <a className="dropdown-item " href="./page-faq.html">
                    FAQ
                  </a>
                  <a className="dropdown-item " href="./page-terms.html">
                    Terms &amp; Conditions
                  </a>
                  <a className="dropdown-item " href="./page-privacy.html">
                    Privacy &amp; Policy
                  </a>
                  <a className="dropdown-item " href="./page-coming-soon.html">
                    Coming Soon
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-coming-soon-simple.html"
                  >
                    Coming Soon: Simple
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-maintenance-mode.html"
                  >
                    Maintenance Mode
                  </a>
                  <a className="dropdown-item " href="./page-status.html">
                    Status
                  </a>
                  <a className="dropdown-item " href="./page-invoice.html">
                    Invoice
                  </a>
                  <a className="dropdown-item " href="./page-error-404.html">
                    Error 404
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Pages */}
              {/* Blog */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="blogMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Blog
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu hs-sub-menu-desktop-lg animated"
                  aria-labelledby="blogMegaMenu"
                  style={{
                    minWidth: "14rem",
                    animationDuration: "300ms",
                    display: "none"
                  }}
                >
                  <a className="dropdown-item " href="./blog-journal.html">
                    Journal
                  </a>
                  <a className="dropdown-item " href="./blog-metro.html">
                    Metro
                  </a>
                  <a className="dropdown-item " href="./blog-newsroom.html">
                    Newsroom
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item " href="./blog-article.html">
                    Article
                  </a>
                  <a
                    className="dropdown-item "
                    href="./blog-author-profile.html"
                  >
                    Author Profile
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Blog */}
              {/* Portfolio */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="portfolioMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu hs-sub-menu-desktop-lg animated"
                  aria-labelledby="portfolioMegaMenu"
                  style={{
                    minWidth: "14rem",
                    animationDuration: "300ms",
                    display: "none"
                  }}
                >
                  <a className="dropdown-item " href="./portfolio-grid.html">
                    Grid
                  </a>
                  <a
                    className="dropdown-item "
                    href="./portfolio-product-article.html"
                  >
                    Product Article
                  </a>
                  <a
                    className="dropdown-item "
                    href="./portfolio-case-studies-branding.html"
                  >
                    Case Studies: Branding
                  </a>
                  <a
                    className="dropdown-item "
                    href="./portfolio-case-studies-product.html"
                  >
                    Case Studies: Product
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Portfolio */}
              {/* Button */}
              <li className="nav-item">
                <a
                  className="btn btn-light btn-transition"
                  href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/"
                  target="_blank"
                >
                  Buy now
                </a>
              </li>
              {/* End Button */}
            </ul>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </div>
  </header>
  {/* ========== END HEADER ========== */}
  {/* ========== MAIN CONTENT ========== */}
  <main id="content" role="main">
    {/* Swiper Slider */}
    <div className="border-bottom">
      {/* Main Slider */}
      <div className="js-swiper-main swiper vh-md-70 swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-fe1c103dbf67c17106"
          aria-live="polite"
          style={{ transitionDuration: "0ms" }}
        >
          <div
            className="swiper-slide gradient-y-overlay-sm-gray-900 bg-img-start swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
            style={{
              backgroundImage: 'url("./assets/img/1920x800/img3.jpg")',
              width: 1519,
              transitionDuration: "0ms",
              opacity: 1,
              transform: "translate3d(0px, 0px, 0px)"
            }}
            data-swiper-slide-index={1}
            role="group"
            aria-label="2 / 2"
          >
            <div className="container d-md-flex align-items-md-center vh-md-70 content-space-t-4 content-space-b-3 content-space-md-0">
              <div className="w-75 w-lg-50">
                <h3 className="text-white">It is an</h3>
                <h2 className="display-4 text-white mb-0">
                  Easy business with Front template
                </h2>
              </div>
            </div>
          </div>
          {/* Slide */}
          <div
            className="swiper-slide gradient-y-overlay-sm-gray-900 bg-img-start swiper-slide-visible swiper-slide-active"
            style={{
              backgroundImage: 'url("./assets/img/1920x800/img2.jpg")',
              width: 1519,
              transitionDuration: "0ms",
              opacity: 1,
              transform: "translate3d(-1519px, 0px, 0px)"
            }}
            data-swiper-slide-index={0}
            role="group"
            aria-label="1 / 2"
          >
            <div className="container d-md-flex align-items-md-center vh-md-70 content-space-t-4 content-space-b-3 content-space-md-0">
              <div className="w-75 w-lg-50">
                <h3 className="text-white">Front is a</h3>
                <h1 className="display-4 text-white mb-0">
                  Self-mastering template
                </h1>
              </div>
            </div>
          </div>
          {/* End Slide */}
          {/* Slide */}
          <div
            className="swiper-slide gradient-y-overlay-sm-gray-900 bg-img-start swiper-slide-next swiper-slide-duplicate-prev"
            style={{
              backgroundImage: 'url("./assets/img/1920x800/img3.jpg")',
              width: 1519,
              transitionDuration: "0ms",
              opacity: 0,
              transform: "translate3d(-3038px, 0px, 0px)"
            }}
            data-swiper-slide-index={1}
            role="group"
            aria-label="2 / 2"
          >
            <div className="container d-md-flex align-items-md-center vh-md-70 content-space-t-4 content-space-b-3 content-space-md-0">
              <div className="w-75 w-lg-50">
                <h3 className="text-white">It is an</h3>
                <h2 className="display-4 text-white mb-0">
                  Easy business with Front template
                </h2>
              </div>
            </div>
          </div>
          {/* End Slide */}
          <div
            className="swiper-slide gradient-y-overlay-sm-gray-900 bg-img-start swiper-slide-duplicate swiper-slide-duplicate-active"
            style={{
              backgroundImage: 'url("./assets/img/1920x800/img2.jpg")',
              width: 1519,
              transitionDuration: "0ms",
              opacity: 0,
              transform: "translate3d(-4557px, 0px, 0px)"
            }}
            data-swiper-slide-index={0}
            role="group"
            aria-label="1 / 2"
          >
            <div className="container d-md-flex align-items-md-center vh-md-70 content-space-t-4 content-space-b-3 content-space-md-0">
              <div className="w-75 w-lg-50">
                <h3 className="text-white">Front is a</h3>
                <h1 className="display-4 text-white mb-0">
                  Self-mastering template
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Arrows */}
        <div className="d-none d-md-inline-block">
          <div
            className="js-swiper-main-button-next swiper-button-next swiper-button-next-soft-white"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-fe1c103dbf67c17106"
          />
          <div
            className="js-swiper-main-button-prev swiper-button-prev swiper-button-prev-soft-white"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-fe1c103dbf67c17106"
          />
        </div>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        />
      </div>
      {/* End Main Slider */}
      {/* Thumbs Slider */}
      <div className="js-swiper-thumbs swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden swiper-thumbs">
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-ee2693eb6810bb1b10"
          aria-live="polite"
          style={{
            transitionDuration: "0ms",
            transform: "translate3d(-1519px, 0px, 0px)"
          }}
        >
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
            data-swiper-slide-index={1}
            role="group"
            aria-label="2 / 2"
            style={{ width: 1519 }}
          >
            <div className="d-flex align-items-center bg-white position-relative vh-md-30">
              <div className="container content-space-2">
                <div className="row">
                  <div className="col-md-4">
                    <span className="fs-3 fw-semibold">02.</span>
                    <h3 className="text-primary">Fully responsive</h3>
                    <p className="mb-0">
                      Let visitors to view your content from their choice of
                      device.
                    </p>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
              <div className="col-md-5 d-none d-md-inline-block bg-dark position-absolute top-0 end-0 bottom-0">
                <div className="position-absolute top-50 translate-middle-y p-7">
                  <h3 className="text-white">Prev: Advanced editing</h3>
                  <p className="text-white-70 mb-0">
                    Modify any aspect of your website with Front
                  </p>
                </div>
              </div>
              {/* End Col */}
            </div>
          </div>
          {/* Slide */}
          <div
            className="swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
            data-swiper-slide-index={0}
            role="group"
            aria-label="1 / 2"
            style={{ width: 1519 }}
          >
            <div className="d-flex align-items-center bg-white position-relative vh-md-30">
              <div className="container content-space-2">
                <div className="row">
                  <div className="col-md-4">
                    <span className="fs-3 fw-semibold">01.</span>
                    <h3 className="text-primary">Advanced editing</h3>
                    <p className="mb-0">
                      Modify any aspect of your website or pages with Front.
                    </p>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
              <div className="col-md-5 d-none d-md-inline-block bg-primary position-absolute top-0 end-0 bottom-0">
                <div className="position-absolute top-50 translate-middle-y p-7">
                  <h3 className="text-white">Next: Fully responsive</h3>
                  <p className="text-white-70 mb-0">
                    Let visitors to view your content from their choice of
                    device.
                  </p>
                </div>
              </div>
              {/* End Col */}
            </div>
          </div>
          {/* End Slide */}
          {/* Slide */}
          <div
            className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
            data-swiper-slide-index={1}
            role="group"
            aria-label="2 / 2"
            style={{ width: 1519 }}
          >
            <div className="d-flex align-items-center bg-white position-relative vh-md-30">
              <div className="container content-space-2">
                <div className="row">
                  <div className="col-md-4">
                    <span className="fs-3 fw-semibold">02.</span>
                    <h3 className="text-primary">Fully responsive</h3>
                    <p className="mb-0">
                      Let visitors to view your content from their choice of
                      device.
                    </p>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
              <div className="col-md-5 d-none d-md-inline-block bg-dark position-absolute top-0 end-0 bottom-0">
                <div className="position-absolute top-50 translate-middle-y p-7">
                  <h3 className="text-white">Prev: Advanced editing</h3>
                  <p className="text-white-70 mb-0">
                    Modify any aspect of your website with Front
                  </p>
                </div>
              </div>
              {/* End Col */}
            </div>
          </div>
          {/* End Slide */}
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-thumb-active"
            data-swiper-slide-index={0}
            role="group"
            aria-label="1 / 2"
            style={{ width: 1519 }}
          >
            <div className="d-flex align-items-center bg-white position-relative vh-md-30">
              <div className="container content-space-2">
                <div className="row">
                  <div className="col-md-4">
                    <span className="fs-3 fw-semibold">01.</span>
                    <h3 className="text-primary">Advanced editing</h3>
                    <p className="mb-0">
                      Modify any aspect of your website or pages with Front.
                    </p>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
              <div className="col-md-5 d-none d-md-inline-block bg-primary position-absolute top-0 end-0 bottom-0">
                <div className="position-absolute top-50 translate-middle-y p-7">
                  <h3 className="text-white">Next: Fully responsive</h3>
                  <p className="text-white-70 mb-0">
                    Let visitors to view your content from their choice of
                    device.
                  </p>
                </div>
              </div>
              {/* End Col */}
            </div>
          </div>
        </div>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        />
      </div>
      {/* End Thumbs Slider */}
    </div>
    {/* Swiper Slider */}
    {/* Step */}
    <div className="container content-space-t-2 content-space-t-lg-3 content-space-b-lg-2">
      {/* Heading */}
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <span className="text-cap">Always improving</span>
        <h2>Solutions rooted in code and design</h2>
      </div>
      {/* End Heading */}
      {/* Step */}
      <ul className="step step-md step-centered">
        <li className="step-item">
          <div className="step-content-wrapper">
            <span className="step-icon step-icon-soft-primary">1</span>
            <div className="step-content">
              <h3>Industry-leading designs</h3>
              <p>
                Achieve virtually any design and layout from within the one
                template.
              </p>
            </div>
          </div>
        </li>
        <li className="step-item">
          <div className="step-content-wrapper">
            <span className="step-icon step-icon-soft-primary">2</span>
            <div className="step-content">
              <h3>Learn from the docs</h3>
              <p>
                Whether you're a startup or a global enterprise, learn how to
                integrate with Front.
              </p>
            </div>
          </div>
        </li>
        <li className="step-item">
          <div className="step-content-wrapper">
            <span className="step-icon step-icon-soft-primary">3</span>
            <div className="step-content">
              <h3>Accelerate your business</h3>
              <p>
                We help power millions of businesses to built and run smoothly.
              </p>
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
              See how Front is helping teams get organized and work smarter
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
                      <img
                        className="avatar avatar-lg avatar-4x3"
                        src="./assets/svg/brands/airbnb-dark.svg"
                        alt="Logo"
                      />
                    </div>
                    <p className="card-text">
                      Front Projects has proved to be most efficient cloud based
                      project tracking and bug tracking tool.
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
                      <img
                        className="avatar avatar-lg avatar-4x3"
                        src="./assets/svg/brands/shopify-dark.svg"
                        alt="Logo"
                      />
                    </div>
                    <p className="card-text">
                      Front Projects has proved to be most efficient cloud based
                      project tracking and bug tracking tool.
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
                      <img
                        className="avatar avatar-lg avatar-4x3"
                        src="./assets/svg/brands/forbes-dark.svg"
                        alt="Logo"
                      />
                    </div>
                    <p className="card-text">
                      Front Projects has proved to be most efficient cloud based
                      project tracking and bug tracking tool.
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
                aria-label="4 / 5"
                style={{ width: "311.333px", marginRight: 15 }}
              >
                {/* Card */}
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="./assets/img/480x320/img12.jpg"
                    alt="Image Description"
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      <img
                        className="avatar avatar-lg avatar-4x3"
                        src="./assets/svg/brands/capsule-dark.svg"
                        alt="Logo"
                      />
                    </div>
                    <p className="card-text">
                      Google is an innovator in public safety technology.
                      First-to-market with TASER conducted energy weapons
                      (CEWs).
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
                aria-label="5 / 5"
                style={{ width: "311.333px", marginRight: 15 }}
              >
                {/* Card */}
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="./assets/img/480x320/img27.jpg"
                    alt="Image Description"
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      <img
                        className="avatar avatar-lg avatar-4x3"
                        src="./assets/svg/brands/fitbit-dark.svg"
                        alt="Logo"
                      />
                    </div>
                    <p className="card-text">
                      Visitors can build a form or survey before signing up, but
                      in order to save and share it.
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
            </div>
            {/* Swiper Pagination */}
            <div
              className="js-swiper-card-blocks-pagination swiper-pagination swiper-pagination-light swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic"
              style={{ width: 160 }}
            >
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
                aria-current="true"
                style={{ left: 32 }}
              />
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active-next"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 2"
                style={{ left: 32 }}
              />
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active-next-next"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 3"
                style={{ left: 32 }}
              />
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
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
            Bring your ideas to life and share your vision with concrete
            elements
          </h2>
        </div>
        {/* End Heading */}
        <div className="w-md-75 mx-md-auto">
          <div className="row justify-content-lg-center align-items-md-center">
            <div className="col-md-5 mb-7 mb-md-0">
              {/* List Checked */}
              <ul className="list-checked list-checked-soft-bg-primary list-checked-lg mb-5">
                <li className="list-checked-item">Easy &amp; fast designing</li>
                <li className="list-checked-item">Powerful features</li>
                <li className="list-checked-item">Advanced HTML/CSS editing</li>
                <li className="list-checked-item">React-Native Development</li>
                <li className="list-checked-item">User Experience Design</li>
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
                      We tackle the challenges start-ups face
                    </h3>
                    <p className="card-text">
                      Besides working with start-up enterprises as a partner for
                      digitalization, we have built enterprise products for
                      common pain points that we have encountered in various
                      products and projects.
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
                      Email with support members to get your questions answered.
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
                      Dig into the technical details of our products and
                      consensus algorithm.
                    </p>
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
            <span className="text-cap">Subscribe</span>
            <h2>Get the latest from Front</h2>
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
    {/* End Subscribe */}
  </main>
  {/* ========== END MAIN CONTENT ========== */}
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
