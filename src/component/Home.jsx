import { motion } from "framer-motion";
import Logo from '../../src/assites/AKMCode.png'
export default function Home() {
  return (
    <>
      {/* Home Section */}
      <motion.div
        id="Home"
        className="container-fluid home d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", paddingTop: "100px" }} // Adjust padding as needed
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          className="row w-100"
        >
          <div className="col-md-12">
            <motion.div className="container">
              <div className="row position-relative">
                <div className="col-12 d-flex justify-content-center">
                  <motion.div
                    initial={{ y: -150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                  >
                    <motion.h2
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="sc-section text-center main-section"
                    >
                      SOFTWARE HOME
                    </motion.h2>
                    <motion.h1
                      initial={{ x: 200, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="text-white fw-bold font-sans py-2 Hero-Section"
                      style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                    >
                      We build innovative software solutions <br /> for your
                      business
                    </motion.h1>
                    <motion.h3
                      initial={{ x: -200, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="sc-section text-center"
                      style={{ fontSize: "clamp(1rem, 3vw, 2rem)" }}
                    >
                      At AKM Code, we help businesses turn their ideas into
                      professional apps and websites using the latest
                      technologies.
                    </motion.h3>

                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="d-flex justify-content-center"
                    >
                      <a
                        className="nav-link"
                        href="https://www.facebook.com/profile.php?id=61565806442892&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="button"
                          className="btn position-relative"
                        >
                          <strong className="fw-bold fs-5">Contact Us</strong>
                          <div
                            id="container-stars"
                            className="position-absolute"
                          >
                            <div id="stars"></div>
                          </div>
                          <div id="glow" className="position-absolute">
                            <div className="circle"></div>
                            <div className="circle"></div>
                          </div>
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* About Section */}
<div id="about" className="container-fluid about-section" style={{ padding: "100px 0", backgroundColor: "#f8f9fa" }}>
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 1 } }}
    className="container"
  >
    <div className="row align-items-center">
      {/* About Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        className="col-md-6 mb-4"
      >
        <img
          src={Logo}
          alt="About Us"
          className="img-fluid " // يمكنك إزالة 'shadow' إذا كنت تريد صورة بدون تأثير ظل
          style={{ maxWidth: '100%', height: 'auto' }} // إزالة border
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        className="col-md-6"
      >
        <h2 className="text-uppercase fw-bold mb-4" style={{ color: "#333", fontSize: "2rem" }}>
          About AKM Code Company
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#666" }}>
          AKM Code Company is a leading provider of public relations services, website development, mobile application creation, and dashboard solutions. Our distinguished team is dedicated to delivering the best quality for your projects.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#666" }}>
          With years of experience, we help businesses of all sizes create powerful online presences and streamline their operations through cutting-edge technologies.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#666" }}>
          Let us be your partner in innovation and growth, turning your ideas into reality.
        </p>
      </motion.div>
    </div>
  </motion.div>
</div>


      {/* Services Section */}
      <div id="services" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="row py-2">
                <div className="col-md-12 py-5">
                  <motion.div
                    initial={{ y: -150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="title py-5 position-relative d-flex justify-content-center align-items-center wow fadeInDown"
                  >
                    <motion.h2
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="position-absolute text-uppercase fw-bold"
                    >
                      Services
                    </motion.h2>
                    <motion.h3
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="position-absolute text-uppercase fw-bold"
                    >
                      Services
                    </motion.h3>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="col-md-12 py-3"
                >
                  <motion.p
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center services-dec py-1"
                  >
                    What AKM Code Company offers: public relations services, and
                    the manufacture of various websites, mobile applications,
                    and dashboards through a distinguished team to achieve the
                    best quality for your project.
                  </motion.p>
                </motion.div>

                {/* Service Cards */}
                <div className="row">
                  <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-12 col-md-3 col-sm-6 py-5 d-flex align-items-center justify-content-center"
                  >
                    <div className="card">
                      <motion.h2
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-center"
                        
                      >
                        Front-End
                        
                      </motion.h2>
                      <div className="card-inner">
                        <div className="card-back">
                          <p className="text-front text-center">
                            The front end is the interface that appears to the
                            user. It must be dynamic and impressive to the
                            customer, and this only happens in AKM Code.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-12 col-md-3 col-sm-6 py-5 d-flex align-items-center justify-content-center"
                  >
                    <div className="card">
                      <motion.h2
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-center"
                      >
                        Back-End
                      </motion.h2>
                      <div className="card-inner">
                        <div className="card-back">
                          <p className="text-front text-center">
                            The back end is the engine of the application. It
                            must work efficiently, securely, and continuously, and
                            this is what we offer in AKM Code.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-12 col-md-3 col-sm-6 py-5 d-flex align-items-center justify-content-center"
                  >
                    <div className="card">
                      <motion.h2
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-center"
                      >
                        UI/UX Design
                      </motion.h2>
                      <div className="card-inner">
                        <div className="card-back">
                          <p className="text-front text-center">
                            UI/UX design is the art of creating an attractive and
                            user-friendly interface for your website or
                            application.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-12 col-md-3 col-sm-6 py-5 d-flex align-items-center justify-content-center"
                  >
                    <div className="card">
                      <motion.h2
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-center"
                      >
                        SEO Services
                      </motion.h2>
                      <div className="card-inner">
                        <div className="card-back">
                          <p className="text-front text-center">
                            Our SEO services help your website rank higher in
                            search engines, attracting more visitors and
                            potential customers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section
      <div id="clients" className="container-fluid" style={{ padding: "100px 0", backgroundColor: "#f8f9fa" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          className="container"
        >
          <div className="row align-items-center">
            <div className="col-md-12">
              <h2 className="text-uppercase fw-bold mb-4 text-center">Our Clients</h2>
              <div className="clients-logo d-flex justify-content-around flex-wrap">
                <img src="https://via.placeholder.com/100" alt="Client 1" />
                <img src="https://via.placeholder.com/100" alt="Client 2" />
                <img src="https://via.placeholder.com/100" alt="Client 3" />
                <img src="https://via.placeholder.com/100" alt="Client 4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div> */}

  {/* Contact Section */}
<div id="contact" className="container-fluid" style={{ padding: "100px 0", backgroundColor: "#f1f3f5" }}>
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 1 } }}
    className="container"
  >
    <div className="text-center mb-4">
      <h2 className="text-uppercase fw-bold mb-2" style={{ color: "#343a40" }}>Get in Touch</h2>
      <p style={{ fontSize: "1rem", color: "#6c757d" }}>We'd love to hear from you! Fill out the form below.</p>
      <hr style={{ width: "50px", border: "2px solid #007bff", margin: "20px auto" }} />
    </div>
    
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary mt-3" 
            style={{
              width: "100%", 
              padding: "12px", 
              borderRadius: "5px", 
              transition: "background-color 0.3s, transform 0.3s", 
              fontSize: "1.1rem",
              boxShadow: "0 4px 10px rgba(0, 123, 255, 0.5)"
            }} 
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "#0056b3"; 
              e.currentTarget.style.transform = "scale(1.05)"; 
            }} 
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "#007bff"; 
              e.currentTarget.style.transform = "scale(1)"; 
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </motion.div>
</div>



      {/* Footer Section */}
      <footer className="container-fluid bg-dark text-light text-center py-4">
        <p>&copy; 2024 AKM Code Company. All rights reserved.</p>
      </footer>
    </>
  );
}
