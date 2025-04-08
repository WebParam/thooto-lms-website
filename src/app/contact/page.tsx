'use client'
import { useEffect } from "react";
import HeroSection from "../components/hero/Hero";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";

export default function page() {
  useEffect(() => {
  }, []);
  
  return (
    <div>
      {/* <HeroSection /> */}
      
      <div className="position-relative">
        <div className="bg-img-hero" style={{ 
          backgroundImage: "url('/assets/img/1920x1080/img5.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px'
        }}>
          <div className="container content-space-t-3 content-space-b-2 content-space-t-lg-5 content-space-b-lg-3">
            <div className="w-md-75 w-lg-50 text-center mx-md-auto">
              <h1 className="text-black">Contact Us</h1>
              <p className="text-black-70">We'd love to hear from you. Get in touch with our team.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container content-space-2 content-space-lg-3">
        <div className="row justify-content-lg-between">
          <div className="col-lg-6 mb-7 mb-lg-0">
            <div className="pe-lg-3">
              <h2>Get in touch</h2>
              <p>Fill out the form and we'll get back to you shortly.</p>
              <p>Your Information will be kept confidential.</p>
              
              <form className="js-validate">
                <div className="mb-4">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Your name" required />
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="your@email.com" required />
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <select className="form-select" name="subject" id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" id="message" placeholder="Your message" required></textarea>
                </div>

                <div className="mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="privacy" id="privacy" required />
                    <label className="form-check-label" htmlFor="privacy">
                      I agree to the <a href="/privacy-policy">Privacy Policy</a>
                    </label>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn" style={{backgroundColor: '#203b11ff', color: 'white'}}>Submit</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="ps-lg-3">
              <h3>Contact Information</h3>
              <p>We're here to help and answer any questions you might have.</p>

              <div className="mb-4">
                <h4>Email</h4>
                <p>Team@thooto.org</p>
              </div>

              <div className="mb-4">
                <h4>Phone</h4>
                <p>+27 (64) 901-6606</p>
              </div>

              <div className="mb-4">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>

              <div className="mb-4">
                <h4>Follow Us</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="btn btn-soft-secondary btn-sm btn-icon" href="https://www.facebook.com/share/1APJGa6tTs/" target="_blank">
                      <i className="bi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-soft-secondary btn-sm btn-icon" href="https://www.tiktok.com/@officialthooto?_t=ZM-8vMXuDyC4Zx&_r=1" target="_blank">
                      <i className="bi-tiktok"></i>
                    </a>
                </li>
                  <li className="list-inline-item">
                    <a className="btn btn-soft-secondary btn-sm btn-icon" href="https://www.linkedin.com/company/web-param/" target="_blank">
                      <i className="bi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4>Location</h4>
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1790.788617697298!2d28.04045438885574!3d-26.145324005594635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s17%20Tywhitt%2C%20The%20zone%2C%20Rosebank!5e0!3m2!1sen!2sza!4v1744118244143!5m2!1sen!2sza"
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    //allowFullScreen="" 
                    loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
}