// import Image from "next/image"

export default function Page() {
    return (
        <>
        <div className="gradient-y-gray position-relative">
  <div className="content-space-t-3 content-space-t-lg-5 content-space-b-2 content-space-b-lg-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-xl-6">
          {/* Heading */}
          <div className="mb-5">
            <h1 className="display-4">A new standard in online learning</h1>
            <p className="lead">Our LMS is built for skills development, streamlining accredited program delivery and BEE compliance through automation, document management, learner tracking, and real-time progress analytics.
            </p>
          </div>
          {/* End Title & Description */}
          {/* Fancybox */}
          <a
            className="video-player video-player-btn"
            href="#"
            role="button"
            data-fslightbox="youtube-video"
          >
            <span className="video-player-icon shadow-sm me-2">
              <i className="bi-play-fill" />
            </span>
            How it works
          </a>
          {/* End Fancybox */}
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
    {/* Devices */}
    <div
      className="devices-top-start-50 devices-rotated zi-2"
      style={{ width: "47rem" }}
    >
      <div className="devices-wrap devices-rotated-body">
        {/* Tablet Device */}
        <figure className="device-tablet" style={{ width: "27rem" }}>
          <div className="device-tablet-frame">
            <img
              className="device-tablet-img"
              src="./assets/img/others/ThootoOffers.jpg"
              alt="Image Description"
            />
          </div>
        </figure>
        {/* End Tablet Device */}
        {/* Vertical Tablet Device */}
        <figure className="device-vertical-tablet" style={{ width: "18rem" }}>
          <div className="device-vertical-tablet-frame">
            <img
              className="device-vertical-tablet-img"
              src="./assets/img/others/AboutThooto.jpg"
              alt="Image Description"
            />
          </div>
        </figure>
        {/* End Vertical Tablet Device */}
        {/* Mobile Device */}
        <figure
          className="device-mobile align-self-start"
          style={{ width: "10rem" }}
        >
          <div className="device-mobile-frame">
            <img
              className="device-mobile-img"
              src="./assets/img/others/thootoonline_logo.jpg"
              alt="Image Description"
            />
          </div>
        </figure>
        {/* End Mobile Device */}
        {/* Browser Device */}
        <figure className="device-browser" style={{ width: "35rem" }}>
          <div className="device-browser-header">
            <div className="device-browser-header-btn-list">
              <span className="device-browser-header-btn-list-btn" />
              <span className="device-browser-header-btn-list-btn" />
              <span className="device-browser-header-btn-list-btn" />
            </div>
            <div className="device-browser-header-browser-bar">
              www.paramsolutions.com
            </div>
          </div>
          <div className="device-browser-frame">
            <img
              className="device-browser-img"
              src="./assets/img/others/thootoonline_cover.jpg"
              alt="Image Description"
            />
          </div>
        </figure>
        {/* End Browser Device */}
      </div>
    </div>
    {/* End Devices */}
  </div>
  {/* Shape */}
  <div className="shape shape-bottom zi-1" style={{ marginBottom: "-.125rem" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1920 100.1"
    >
      <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
    </svg>
  </div>
  {/* End Shape */}
        </div>

        <div className="container content-space-t-2 content-space-t-lg-3">
        {/* Heading */}
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
            <h2>Comprehensive Learning Solutions</h2>
        </div>
        {/* End Heading */}
        <div className="row">
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
            {/* Card */}
            <a
                className="card card-transition bg-light h-100 shadow-none overflow-hidden"
                href="#"
            >
                <div className="row align-items-center">
                <div className="col-8 col-md-6">
                    <div className="card-body">
                    <h4 className="card-title">Accredited Learning Management</h4>
                    <span className="card-link">
                        Learn more <i className="bi-chevron-right small" />
                    </span>
                    </div>
                </div>
                {/* End Col */}
                <div
                    className="col-4 col-md-6 bg-img-end h-100 px-0"
                    style={{
                    backgroundImage: "url(./assets/svg/illustrations/apps.svg)"
                    }}
                />
                {/* End Col */}
                </div>
                {/* End Row */}
            </a>
            {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
            {/* Card */}
            <a
                className="card card-transition bg-light h-100 shadow-none overflow-hidden"
                href="#"
            >
                <div className="row align-items-center">
                <div className="col-8 col-md-6">
                    <div className="card-body">
                    <h4 className="card-title">Automated Assessments & Reporting</h4>
                    <span className="card-link">
                        Learn more <i className="bi-chevron-right small" />
                    </span>
                    </div>
                </div>
                {/* End Col */}
                <div
                    className="col-4 col-md-6 bg-img-end h-100 px-0"
                    style={{
                    backgroundImage: "url(./assets/svg/illustrations/calendar.svg)"
                    }}
                />
                {/* End Col */}
                </div>
                {/* End Row */}
            </a>
            {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-4">
            {/* Card */}
            <a
                className="card card-transition bg-light h-100 shadow-none overflow-hidden"
                href="#"
            >
                <div className="row align-items-center">
                <div className="col-8 col-md-6">
                    <div className="card-body">
                    <h4 className="card-title">Engaging Digital Learning</h4>
                    <span className="card-link">
                        Learn more <i className="bi-chevron-right small" />
                    </span>
                    </div>
                </div>
                <div
                    className="col-4 col-md-6 bg-img-end h-100 px-0"
                    style={{
                    backgroundImage:
                        "url(./assets/svg/illustrations/communication.svg)"
                    }}
                />
                </div>
                {/* End Row */}
            </a>
            {/* End Card */}
            </div>
            {/* End Col */}
        </div>
        {/* End Row */}
        </div>

        <div className="overflow-hidden">
  <div className="container content-space-2 content-space-lg-3">
    <div className="row justify-content-lg-between align-items-lg-center">
      <div className="col-lg-6 mb-9 mb-lg-0">
        <div
          className="position-relative mx-auto"
          style={{ maxWidth: "20rem" }}
        >
          {/* Mobile Device */}
          <figure className="device-mobile mx-auto">
            <div className="device-mobile-frame">
              <img
                className="device-mobile-img"
                src="./assets/img/407x867/img5.jpg"
                alt="img Description"
              />
            </div>
          </figure>
          {/* End Mobile Device */}
          {/* img */}
          <div
            className="position-absolute top-0 end-0 zi-2 me-n10 mt-9"
            style={{ width: "16rem" }}
          >
            <img
              className="img-fluid shadow-lg rounded-2"
              src="./assets/img/407x115/img1.jpg"
              alt="img Description"
            />
          </div>
          {/* End img */}
          {/* img */}
          <div
            className="position-absolute bottom-0 start-0 zi-2 ms-n10 mb-10"
            style={{ width: "16rem" }}
          >
            <img
              className="img-fluid shadow-lg rounded-2"
              src="./assets/img/480x320/img26.jpg"
              alt="img Description"
            />
          </div>
          {/* End img */}
          {/* SVG Shape */}
          <div
            className="position-absolute bottom-0 end-0 zi-n1 mx-auto"
            style={{ width: "20rem" }}
          >
            <img
              className="img-fluid"
              src="./assets/svg/components/shape-1.svg"
              alt="SVG"
            />
          </div>
          {/* End SVG Shape */}
        </div>
      </div>
      {/* End Col */}
      <div className="col-lg-5">
        {/* Heading */}
        <div className="mb-5">
          <h2 className="color-green">LMS made simple and efficient</h2>
        </div>
        {/* End Heading */}
        {/* Step */}
        <ul className="step step-dashed mb-7">
          <li className="step-item">
            <div className="step-content-wrapper">
              <span className="step-icon step-icon-xs bg-green text-light">
                1
              </span>
              <div className="step-content">
                <h4 className="step-title">Industry-leading compliance</h4>
                <p>
                Our platform ensures full compliance with QCTO, SETA, and accreditation requirements, making audits effortless.
                </p>
              </div>
            </div>
          </li>
          <li className="step-item mb-0">
            <div className="step-content-wrapper">
              <span className="step-icon step-icon-xs bg-green text-light">
                2
              </span>
              <div className="step-content">
                <h4 className="step-title">
                Scalable for any organization
                </h4>
                <p className="mb-0">
                Designed for corporate training, academic institutions, and skills development programs.</p>
              </div>
            </div>
          </li>
        </ul>
        {/* End Step */}
        <a className="btn bg-green text-light btn-transition" href="#">
          Request demo
        </a>
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
  </div>
</div>

<div className="container content-space-b-2 content-space-b-lg-3">
  {/* Heading */}
  <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
    <h2>The most effective way to track learner progress</h2>
  </div>
  {/* End Heading */}
  <div className="row mb-7 flex justify-center">
    <div className="col-sm-6 col-lg-3 mb-7 mb-lg-4">
      {/* Circle Chart */}
      <div className="circles-chart">
        <div
          className="js-circle"
          data-hs-circles-options='{
             "value": 100,
             "maxValue": 100,
             "duration": 2000,
             "isViewportInit": true,
             "colors": ["#f8fafd", "#00c9a7"],
             "radius": 100,
             "width": 8,
             "fgStrokeLinecap": "round",
             "fgStrokeMiterlimit": "10",
             "textClass": "circles-chart-content",
             "textFontSize": 24,
             "textFontWeight": 500,
             "textColor": "#00c9a7",
             "secondaryText": "Fast-paced, detail-oriented plugins",
             "secondaryTextColor": "#77838f",
             "secondaryTextFontSize": "13",
             "secondaryTextFontWeight": "400",
             "dividerSpace": "10"
           }'
          id="circle-1787264543790208"
        >
          <div
            className="circles-wrap"
            style={{ position: "relative", display: "inline-block" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200}>
              <path
                fill="transparent"
                stroke="#f8fafd"
                strokeWidth={8}
                d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"
                className="circles-maxValueStroke"
              />
              <path
                fill="transparent"
                stroke="#00c9a7"
                strokeWidth={8}
                d="M 99.98044737244527 4.000001991173164 A 96 96 0 0 1 118.11125277862686 194.27609730355135 "
                className="circles-valueStroke"
                strokeLinecap="round"
                strokeMiterlimit={10}
              />
            </svg>
            <div
              className="circles-chart-content"
              style={{
                position: "absolute",
                textAlign: "center",
                width: "100%",
                fontSize: 24,
                height: "auto",
                lineHeight: "normal",
                fontWeight: 500,
                color: "rgb(0, 201, 167)"
              }}
            >
              100%
              <div style={{ marginTop: 5, marginBottom: 5 }} />
              <div style={{ fontWeight: 400, fontSize: 13, color: "#77838f" }}>
               QCTO-compliant reporting for easy accreditation
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Circle Chart */}
    </div>
    {/* End Col */}
    <div className="col-sm-6 col-lg-3 mb-7 mb-lg-4">
      {/* Circle Chart */}
      <div className="circles-chart">
        <div
          className="js-circle"
          data-hs-circles-options='{
             "value": 85,
             "maxValue": 100,
             "duration": 2000,
             "isViewportInit": true,
             "colors": ["#f8fafd", "#ffc107"],
             "radius": 100,
             "width": 8,
             "fgStrokeLinecap": "round",
             "fgStrokeMiterlimit": "10",
             "isHideValue": true,
             "additionalText": "4.84",
             "additionalTextType": "prefix",
             "textClass": "circles-chart-content",
             "textFontSize": 24,
             "textFontWeight": 500,
             "textColor": "#ffc107",
             "secondaryText": "rated on GetBootstrap",
             "secondaryTextColor": "#77838f",
             "secondaryTextFontSize": "13",
             "secondaryTextFontWeight": "400",
             "dividerSpace": "10"
           }'
          id="circle-5761064278464816"
        >
          <div
            className="circles-wrap"
            style={{ position: "relative", display: "inline-block" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200}>
              <path
                fill="transparent"
                stroke="#f8fafd"
                strokeWidth={8}
                d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"
                className="circles-maxValueStroke"
              />
              <path
                fill="transparent"
                stroke="#ffc107"
                strokeWidth={8}
                d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 22.282985041299696 43.643406899377304 "
                className="circles-valueStroke"
                strokeLinecap="round"
                strokeMiterlimit={10}
              />
            </svg>
            <div
              className="circles-chart-content"
              style={{
                position: "absolute",
                textAlign: "center",
                width: "100%",
                fontSize: 24,
                height: "auto",
                lineHeight: "normal",
                fontWeight: 500,
                color: "rgb(255, 193, 7)"
              }}
            >
              85%
              <div style={{ marginTop: 5, marginBottom: 5 }} />
              <div style={{ fontWeight: 400, fontSize: 13, color: "#77838f" }}>
                improved learner engagement through AI-driven learning
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Circle Chart */}
    </div>
    {/* End Col */}
    <div className="col-sm-6 col-lg-3 mb-7 mb-lg-4">
      {/* Circle Chart */}
      <div className="circles-chart">
        <div
          className="js-circle"
          data-hs-circles-options='{
             "value": 45,
             "maxValue": 100,
             "duration": 2000,
             "isViewportInit": true,
             "colors": ["#f8fafd", "#377dff"],
             "radius": 100,
             "width": 8,
             "fgStrokeLinecap": "round",
             "fgStrokeMiterlimit": "10",
             "additionalText": "k+",
             "textClass": "circles-chart-content",
             "textFontSize": 24,
             "textFontWeight": 500,
             "textColor": "#377dff",
             "secondaryText": "users - from new startups to public companies",
             "secondaryTextColor": "#77838f",
             "secondaryTextFontSize": "13",
             "secondaryTextFontWeight": "400",
             "dividerSpace": "10"
           }'
          id="circle-5658639426118073"
        >
          <div
            className="circles-wrap"
            style={{ position: "relative", display: "inline-block" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200}>
              <path
                fill="transparent"
                stroke="#f8fafd"
                strokeWidth={8}
                d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"
                className="circles-maxValueStroke"
              />
              <path
                fill="transparent"
                stroke="#377dff"
                strokeWidth={8}
                d="M 99.98044737244527 4.000001991173164 A 96 96 0 0 1 129.72379005347432 191.28250820862112 "
                className="circles-valueStroke"
                strokeLinecap="round"
                strokeMiterlimit={10}
              />
            </svg>
            <div
              className="circles-chart-content"
              style={{
                position: "absolute",
                textAlign: "center",
                width: "100%",
                fontSize: 24,
                height: "auto",
                lineHeight: "normal",
                fontWeight: 500,
                color: "rgb(55, 125, 255)"
              }}
            >
              <div style={{ marginTop: 5, marginBottom: 5 }} />
              <div style={{ fontWeight: 400, fontSize: 13, color: "#77838f" }}>
              Automated tracking & progress dashboards
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Circle Chart */}
    </div>
    {/* End Col */}
  </div>
  {/* End Row */}
  {/* Card Info */}
  <div className="text-center">
    <div className="card card-info-link card-sm">
      <div className="card-body">
        Prefer to start with the Trial version?{" "}
        <a className="card-link ms-2" href="#">
          Go here <span className="bi-chevron-right small ms-1" />
        </a>
      </div>
    </div>
  </div>
  {/* End Card Info */}
</div>

<div className="overflow-hidden">
  <div className="container content-space-b-2">
    <div className="position-relative">
      <div className="text-center rounded-2 p-4 p-md-7 text-light light-green-bg" style={{backgroundColor:'rgb(32,59,17), 0.5'}}>
        <img
          className="avatar avatar-lg avatar-4x3 mx-auto mb-4"
          src="./assets/svg/brands/amazon-primary.svg"
          alt="SVG Logo"
        />
        {/* Blockquote */}
        <figure className="w-md-80 w-lg-50 mx-md-auto">
          <blockquote className="blockquote">
            With <strong>thooto</strong>, we’ve transformed our training programs, ensuring seamless compliance while enhancing learner engagement.”
          </blockquote>
          <figcaption className="blockquote-footer">
            Christina Kray
            <span className="blockquote-footer-source">
              Social Media Executive, Amazon
            </span>
          </figcaption>
        </figure>
        {/* End Blockquote */}
      </div>
      {/* SVG Shape */}
      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={{ maxWidth: "7rem" }}
      >
        <div className="mb-n7 ms-n7">
          <img
            className="img-fluid"
            src="./assets/svg/components/dots.svg"
            alt="img Description"
          />
        </div>
      </div>
      {/* End SVG Shape */}
    </div>
  </div>
</div>


<div className="container content-space-2">
  <div className="row justify-content-lg-between">
    <div className="col-lg-5 mb-9 mb-lg-0">
      {/* <img
        className="avatar avatar-xxl avatar-4x3 mb-4"
        src="./assets/svg/illustrations/app-wreath.svg"
        alt="SVG"
      /> */}
      {/* Heading */}
      <div className="mb-5">
        <h2>Training Manager, Leading Skills Development Provider</h2>
        <p>
        Explore best practices in QCTO accreditation, digital content creation, and AI-powered assessments.
        </p>
      </div>
      {/* End Heading */}
      {/* <a className="btn btn-primary btn-transition" href="#">
        View all guides
      </a> */}
    </div>
    {/* End Col */}
    <div className="col-lg-6">
      <div className="row">
        <div className="col-sm-6 card">
          {/* Article */}
          <a
            className="d-block aos-init aos-animate"
            href="#"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <img
              className="w-100 rounded-2"
              src="https://www.icachef.co.za/wp-content/uploads/2024/11/ICA-QCTO-Accreditation.png"
              alt="img Description"
            />
            <div className="py-4">
              <h4 className="text-inherit">Master QCTO Accreditation</h4>
              <p className="text-body">
              Learn the step-by-step compliance process.
              </p>
              <span className="link">
                Learn more <i className="bi-chevron-right small ms-1" />
              </span>
            </div>
          </a>
          {/* End Article */}
        </div>
        {/* End Col */}
        <div className="col-sm-6">
          {/* Article */}
          <a
            className="d-block aos-init aos-animate"
            href="#"
            data-aos="fade-left"
          >
            <img
              className="w-100 rounded-2"
              src="./assets/img/400x500/img25.jpg"
              alt="img Description"
            />
            <div className="py-4">
              <h4 className="text-inherit">Creating Engaging Digital Courses</h4>
              <p className="text-body">
              Turn traditional materials into interactive experiences.
              </p>
              <span className="link">
                Learn more <i className="bi-chevron-right small ms-1" />
              </span>
            </div>
          </a>
          {/* End Article */}
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
    {/* End Col */}
  </div>
  {/* End Row */}
</div>

        </>
    )
}