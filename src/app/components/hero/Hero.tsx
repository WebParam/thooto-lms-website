export default function HeroSection() {
    return (
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
              <h1 className="text-white">Empowering Businesses with Scalable Technology</h1>
              <p className="text-white mb-0">We create custom software solutions for enterprises and startups, building scalable businesses that thrive in the digital age.</p>
            </div>
          </div>
        </div>
        {/* End Slide */}
      </div>
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
                  <h3 style={{color:'#203b11ff'}}>Custom Software Development</h3>
                  <p className="mb-0">
                  Build tailored applications that drive business success.
                  </p>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="col-md-5 d-md-inline-block position-absolute top-0 end-0 bottom-0 bg-green">
              <div className="position-absolute top-50 translate-middle-y p-7">
                <h3 className="text-white">Next: Scalable Solutions</h3>
                <p className="text-white-70 mb-0">
                Grow your business with technology that evolves with your needs.
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
    )
}