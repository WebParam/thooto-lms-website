export default function HeroSection() {
  return (
    <div className="border-bottom">
      {/* Main Slider */}
      <div className="js-swiper-main swiper vh-md-70 swiper-fade">
        <div className="swiper-wrapper">
          {/* Only showing the first slide */}
          <div
            className="swiper-slide gradient-y-overlay-sm-gray-900 bg-img-start"
            style={{
              backgroundImage: 'url("./assets/img/1920x800/img2.jpg")',
              width: '100%',
              transitionDuration: "0ms",
            }}
            data-swiper-slide-index={0}
            role="group"
            aria-label="1 / 1"
          >
            <div className="container d-md-flex align-items-md-center vh-md-70 content-space-t-4 content-space-b-3 content-space-md-0">
              <div className="w-75 w-lg-50">
                <h1 className="text-white">Empowering Businesses with Scalable Technology</h1>
                <p className="text-white mb-0">
                  We create custom software solutions for enterprises and startups, building scalable businesses that thrive in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Main Slider */}

      {/* Thumbs Slider */}
      <div className="js-swiper-thumbs swiper swiper-thumbs">
        <div className="swiper-wrapper">
          {/* Only showing the first thumb */}
          <div
            className="swiper-slide hero-bottom-container"
            data-swiper-slide-index={0}
            role="group"
            aria-label="1 / 1"
            style={{ width: '100%' }}
          >
            <div className="d-flex align-items-center bg-white position-relative">
              <div className="container content-space-2">
                <div className="row">
                  <div className="col-md-4">
                    <span className="fs-3 fw-semibold">01.</span>
                    <h3 style={{ color: '#203b11ff' }}>Custom Software Development</h3>
                    <p className="mb-0">Build tailored applications that drive business success.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 d-md-inline-block position-absolute top-0 end-0 bottom-0 bg-green">
                <div className="position-absolute top-50 translate-middle-y p-7">
                  <h3 className="text-white">Next: Scalable Solutions</h3>
                  <p className="text-white-70 mb-0">
                    Grow your business with technology that evolves with your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Thumbs Slider */}
    </div>
  );
}
