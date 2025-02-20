export default function Subscribe() {
    return (
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
            <button type="button" className="btn btn-lg text-light" style={{backgroundColor:'#203b11ff'}}>
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
    )
}