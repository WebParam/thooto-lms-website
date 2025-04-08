// import Image from "next/image";

export default function Page() {
    return (
        <>
        <div className="container content-space-t-3 content-space-t-lg-4 content-space-b-2">
            <div className="w-lg-65 text-center mx-lg-auto">
                {/* Heading */}
                <div className="mb-5">
                <h1 className="display-4 mb-3">
                    The <span className="color-green">#1</span> AI-Powered Video Creation Tool
                </h1>
                <p className="lead">
                Transform static content into engaging, professional-quality videos using AI avatars. Whether for corporate training, education, or marketing, our solution makes content creation fast, scalable, and cost-effective.
                </p>
                </div>
                {/* End Heading */}
                <div className="d-grid d-sm-flex justify-content-sm-center align-items-sm-center gap-3">
                <a className="btn text-light bg-green btn-transition" href="/contact">
                    Contact sales
                </a>
                <small>or</small>
                <a className="btn btn-soft-dark btn-transition" href="#">
                    See pricing <i className="bi-chevron-right small ms-1" />
                </a>
                </div>
            </div>
        </div>

        <div className="container content-space-t-2 content-space-b-2 content-space-b-lg-3">
  <div className="row align-items-md-center">
    <div className="col-md-7 mb-7 mb-md-0">
      <div
        className="w-sm-75 mx-sm-auto aos-init aos-animate"
        data-aos="fade-up"
      >
        {/* Card */}
        <div className="card light-green-bg text-center">
          <div className="card-body">
            <div className="w-75 mx-auto">
              <h3>Choose a workflow, or make your own with Front Software</h3>
            </div>
          </div>
          <div className="w-75 mx-auto">
            <img
              className="img-fluid rounded-top-2"
              src="./assets/img/others/avatar1.jpg"
              alt="Image Description"
            />
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
    {/* End Col */}
    <div className="col-md-5 order-md-2">
      {/* Heading */}
      <div className="mb-5">
        <h2 className="mb-3">
        Simplifying video production with AI
        </h2>
        <p>
          Every team has a unique process for shipping software. Use an
          out-of-the-box workflow, or create one to match the way your team
          works.
        </p>
      </div>
      {/* End Heading */}
      {/* List Checked */}
      <ul className="list-checked list-checked-soft-bg-dark list-checked-lg">
        <li className="list-checked-item">Lifelike Voiceovers</li>
        <li className="list-checked-item">Dynamic Visuals</li>
        <li className="list-checked-item">Multi-Language Support</li>
      </ul>
      {/* End List Checked */}
    </div>
    {/* End Col */}
  </div>
  {/* End Row */}
</div>

<div className="container">
  <div className="w-lg-75 mx-lg-auto">
    <div className="card card-sm overflow-hidden">
      {/* Card */}
      <div className="card-body">
        <div className="row justify-content-md-start align-items-md-center text-center text-md-start">
          <div className="col-md offset-md-3 mb-3 mb-md-0">
            <h4 className="card-title">
            Sign up and start creating</h4>
          </div>
          <div className="col-md-auto">
            <a className="btn text-light bg-green btn-transition" href="#">
              Get started
            </a>
          </div>
        </div>
        {/* SVG Shape */}
        <figure className="w-25 d-none d-md-block position-absolute top-0 start-0 mt-n2">
          <svg
            viewBox="0 0 451 902"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.125"
              d="M0 82C203.8 82 369 247.2 369 451C369 654.8 203.8 820 0 820"
              stroke="url(#paint2_linear)"
              strokeWidth={164}
              strokeMiterlimit={10}
            />
            <defs>
              <linearGradient
                id="paint2_linear"
                x1="323.205"
                y1="785.242"
                x2="-97.6164"
                y2="56.3589"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="white" stopOpacity={0} />
                <stop offset={1} stopColor="#203b11ff" />
              </linearGradient>
            </defs>
          </svg>
        </figure>
        {/* End SVG Shape */}
      </div>
      {/* End Card */}
    </div>
  </div>
</div>

<div className="container content-space-2 content-space-lg-3">
  <div className="row align-items-md-center">
    <div className="col-md-7 order-md-2 mb-7 mb-md-0">
      <div
        className="w-sm-75 mx-sm-auto aos-init aos-animate"
        data-aos="fade-up"
      >
        {/* Card */}
        <div className="card light-green-bg text-center">
          <div className="card-body">
            <div className="w-75 mx-auto">
              <h3 className="text-dark">Integrate with the tools and workflow you already use</h3>
            </div>
          </div>
          <div className="w-75 mx-auto">
            <img
              className="img-fluid rounded-top-2"
              src="./assets/img/others/graph-image.jpg"
              alt="Image Description"
            />
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
    {/* End Col */}
    <div className="col-md-5">
      {/* Heading */}
      <div className="mb-5">
        <h2 className="mb-3">Why Choose Us?</h2>
        <p>
        Expert Video Editing Team Our team of professional video editors ensures high-quality post-production, refining AI-generated content for a polished final product.
        </p>
      </div>
      {/* End Heading */}
      {/* List Checked */}
      <ul className="list-checked list-checked-soft-bg-dark list-checked-lg">
        <li className="list-checked-item">Affordable & Scalable</li>
        <li className="list-checked-item">Fast Turnaround</li>
        <li className="list-checked-item">Fully Cloud-Based</li>
      </ul>
      {/* End List Checked */}
    </div>
    {/* End Col */}
  </div>
  {/* End Row */}
</div>

<div
  className="position-relative light-green-bg"
  style={{
    backgroundImage: "url(./assets/svg/components/wave-pattern-light.svg)"
  }}
>
  <div className="container content-space-2 content-space-lg-3 position-relative zi-2">
    {/* Heading */}
    <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
      <h2 className="text-white">Create Videos with Ease</h2>
      <p className="text-white-70">
      Whether you’re a corporate training provider, educational institution, or business looking to scale content, our AI-powered video production service transforms your material into engaging, professional-quality videos.
      </p>
    </div>
    {/* End Heading */}
    {/* Icon Blocks */}
    <div className="row mb-5 mb-sm-9">
      <div className="col-sm-6 col-md-4 mb-3 mb-sm-7">
        <span className="svg-icon text-white mb-3">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
              fill="#035A4B"
            />
            <path
              opacity="0.3"
              d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
              fill="#035A4B"
            />
          </svg>
        </span>
        <h4 className="text-white">Script-to-Video Transformation</h4>
        <p className="text-white-70">
        Provide us with your training manuals, PDFs, or presentations, and we’ll convert them into high-quality AI-driven videos.
        </p>
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-md-4 mb-3 mb-sm-7">
        <span className="svg-icon text-white mb-3">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path opacity="0.3" d="M3 3V17H7V21H15V9H20V3H3Z" fill="#035A4B" />
            <path
              d="M20 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H20C20.6 2 21 2.4 21 3V21C21 21.6 20.6 22 20 22ZM19 4H4V8H19V4ZM6 18H4V20H6V18ZM6 14H4V16H6V14ZM6 10H4V12H6V10ZM10 18H8V20H10V18ZM10 14H8V16H10V14ZM10 10H8V12H10V10ZM14 18H12V20H14V18ZM14 14H12V16H14V14ZM14 10H12V12H14V10ZM19 14H17V20H19V14ZM19 10H17V12H19V10Z"
              fill="#035A4B"
            />
          </svg>
        </span>
        <h4 className="text-white">AI Avatars & Custom Narration</h4>
        <p className="text-white-70">
        Choose from a range of AI avatars, or let us create a custom-branded video experience with professional voiceovers.
        </p>
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-md-4 mb-3 mb-sm-7">
        <span className="svg-icon text-white mb-3">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M18 20.3C20.2091 20.3 22 18.5092 22 16.3C22 14.0909 20.2091 12.3 18 12.3C15.7909 12.3 14 14.0909 14 16.3C14 18.5092 15.7909 20.3 18 20.3Z"
              fill="#035A4B"
            />
            <path
              d="M18 18.3C17.4 18.3 17 17.9 17 17.3V15.3C17 14.7 17.4 14.3 18 14.3C18.6 14.3 19 14.7 19 15.3V17.3C19 17.9 18.6 18.3 18 18.3Z"
              fill="#035A4B"
            />
            <path
              d="M14.4 18.1001C14.5 18.5001 14.4 19.0001 14 19.2001C13.8 19.3001 13.7 19.3 13.5 19.3C13.2 19.3 12.8 19.1 12.6 18.8V18.7001C12.1 18.9001 11.6 19.0001 11 19.1001V19.2001C11 19.8001 10.6 20.2001 10 20.2001C9.4 20.2001 9 19.8001 9 19.2001V19.1001C8.4 19.0001 7.89999 18.9001 7.39999 18.7001V18.8C7.19999 19.1 6.9 19.3 6.5 19.3C6.3 19.3 6.2 19.3001 6 19.2001C5.5 18.9001 5.40001 18.3 5.60001 17.8V17.7001C5.20001 17.4001 4.79999 17 4.39999 16.5H4.3C4.1 16.6 4 16.6001 3.8 16.6001C3.5 16.6001 3.09999 16.4001 2.89999 16.1001C2.59999 15.6001 2.8 15.0001 3.3 14.7001H3.39999C3.19999 14.2001 3.1 13.7001 3 13.1001C2.4 13.1001 2 12.7001 2 12.1001C2 11.5001 2.4 11.1001 3 11.1001H3.10001C3.20001 10.5001 3.3 10 3.5 9.5H3.39999C2.89999 9.2 2.8 8.6001 3 8.1001C3.3 7.6001 3.89999 7.50007 4.39999 7.70007H4.5C4.8 7.30007 5.2 6.9 5.7 6.5V6.40002C5.4 5.90002 5.60001 5.3 6.10001 5C6.60001 4.7 7.2 4.90002 7.5 5.40002V5.5C8 5.3 8.50001 5.2001 9.10001 5.1001V5C9.10001 4.4 9.50001 4 10.1 4C10.7 4 11.1 4.4 11.1 5V5.1001C11.7 5.2001 12.2 5.3 12.7 5.5V5.40002C13 4.90002 13.6 4.8 14.1 5C14.6 5.3 14.7 5.90002 14.5 6.40002V6.5C14.9 6.8 15.3 7.20007 15.7 7.70007H15.8C16.3 7.40007 16.9 7.6001 17.2 8.1001C17.5 8.6001 17.3 9.2 16.8 9.5H16.7C16.9 10 17 10.5001 17.1 11.1001H17.2C17.8 11.1001 18.2 11.5001 18.2 12.1001C16 12.1001 14.2 13.9001 14.2 16.1001C14 17.0001 14.2 17.6001 14.4 18.1001ZM11.8 8.40002H8.89999C8.59999 8.40002 8.4 8.5001 8.2 8.6001C8.1 8.7001 7.99999 9.00005 7.89999 9.30005L7.39999 11.9C7.39999 12.1 7.3 12.3 7.3 12.3C7.3 12.5 7.4 12.6001 7.5 12.7001C7.6 12.8001 7.8 12.9 8 12.9C8.2 12.9 8.40001 12.8001 8.60001 12.6001C8.90001 12.4001 9.1 12.3001 9.2 12.2001C9.3 12.1001 9.59999 12.1001 9.89999 12.1001C10.2 12.1001 10.4 12.2 10.6 12.3C10.8 12.4 11 12.6 11.1 12.9C11.2 13.2 11.3 13.5 11.3 13.8C11.3 14.1 11.2 14.4001 11.1 14.7001C11 15.0001 10.8 15.2 10.6 15.3C10.4 15.4 10.1 15.5 9.89999 15.5C9.59999 15.5 9.30001 15.4001 9.10001 15.2001C8.80001 15.0001 8.7 14.8 8.5 14.4C8.3 14 8.1 13.9 7.8 13.9C7.6 13.9 7.5 14.0001 7.3 14.1001C7.2 14.2001 7.10001 14.4 7.10001 14.5C7.10001 14.7 7.19999 15 7.39999 15.3C7.59999 15.6 7.9 15.9001 8.3 16.1001C8.7 16.3001 9.19999 16.5 9.89999 16.5C10.5 16.5 11 16.4001 11.5 16.1001C12 15.8001 12.3 15.5001 12.5 15.1001C12.7 14.7001 12.9 14.2001 12.9 13.6001C12.9 13.2001 12.8 12.9001 12.7 12.6001C12.6 12.3001 12.4 12 12.2 11.8C12 11.6 11.7 11.4 11.4 11.3C11.1 11.2 10.8 11.1001 10.4 11.1001C9.99999 11.1001 9.5 11.2 9 11.5L9.3 9.70007H11.9C12.2 9.70007 12.4 9.6 12.5 9.5C12.6 9.4 12.7 9.2 12.7 9C12.6 8.6 12.3 8.40002 11.8 8.40002Z"
              fill="#035A4B"
            />
          </svg>
        </span>
        <h4 className="text-white">End-to-End Editing & Production</h4>
        <p className="text-white-70">
        Our team of expert video editors ensures that each video is polished, branded, and engaging before delivery.
        </p>
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-md-4 mb-3 mb-sm-7 mb-md-0">
        <span className="svg-icon text-white mb-3">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M11.8 5.2L17.7 8.6V15.4L11.8 18.8L5.90001 15.4V8.6L11.8 5.2ZM11.8 2C11.5 2 11.2 2.1 11 2.2L3.8 6.4C3.3 6.7 3 7.3 3 7.9V16.2C3 16.8 3.3 17.4 3.8 17.7L11 21.9C11.3 22 11.5 22.1 11.8 22.1C12.1 22.1 12.4 22 12.6 21.9L19.8 17.7C20.3 17.4 20.6 16.8 20.6 16.2V7.9C20.6 7.3 20.3 6.7 19.8 6.4L12.6 2.2C12.4 2.1 12.1 2 11.8 2Z"
              fill="#035A4B"
            />
            <path
              d="M11.8 8.69995L8.90001 10.3V13.7L11.8 15.3L14.7 13.7V10.3L11.8 8.69995Z"
              fill="#035A4B"
            />
          </svg>
        </span>
        <h4 className="text-white">Multi-Language & Localization</h4>
        <p className="text-white-70">We produce videos in multiple languages, helping businesses and schools train a diverse audience with ease.</p>
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-md-4 mb-3 mb-sm-0">
        <span className="svg-icon text-white mb-3">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M2.10001 10C3.00001 5.6 6.69998 2.3 11.2 2L8.79999 4.39999L11.1 7C9.60001 7.3 8.30001 8.19999 7.60001 9.59999L4.5 12.4L2.10001 10ZM19.3 11.5L16.4 14C15.7 15.5 14.4 16.6 12.7 16.9L15 19.5L12.6 21.9C17.1 21.6 20.8 18.2 21.7 13.9L19.3 11.5Z"
              fill="#035A4B"
            />
            <path
              d="M13.8 2.09998C18.2 2.99998 21.5 6.69998 21.8 11.2L19.4 8.79997L16.8 11C16.5 9.39998 15.5 8.09998 14 7.39998L11.4 4.39998L13.8 2.09998ZM12.3 19.4L9.69998 16.4C8.29998 15.7 7.3 14.4 7 12.8L4.39999 15.1L2 12.7C2.3 17.2 5.7 20.9 10 21.8L12.3 19.4Z"
              fill="#035A4B"
            />
          </svg>
        </span>
        <h4 className="text-white">Custom Branding & Compliance</h4>
        <p className="text-white-70">Ensure every video meets corporate training standards, regulatory compliance, and institutional branding requirements.</p>
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-md-4">
        <span className="svg-icon text-white mb-3">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z"
              fill="#035A4B"
            />
            <path
              d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z"
              fill="#035A4B"
            />
          </svg>
        </span>
        <h4 className="text-white">
            Scalable & Cost-Effective
        </h4>
        <p className="text-white-70">
        No need for expensive video shoots—we create hundreds of professional videos quickly and affordably.
        </p>
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
    <div className="text-center">
      <div className="d-grid d-sm-flex justify-content-sm-center align-items-sm-center gap-3 mb-3">
        <a className="btn btn-light btn-transition" href="/contact">
          Talk to our experts
        </a>
        <small className="text-white-70">or</small>
        <a className="btn bg-green text-light btn-transition" href="#">
        Get a quote
        </a>
      </div>
    </div>
    {/* End Icon Blocks */}
  </div>
</div>


        </>
    )
}