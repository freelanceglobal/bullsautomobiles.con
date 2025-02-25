var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Financials and Support Services </title>
        <meta content name="description" />
        <meta content name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        {/* Vendor CSS Files */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        {/* Template Main CSS File */}
        <link href="assets/css/style.css" rel="stylesheet" />
        {/* =======================================================
  * Template Name: Vlava
  * Updated: Sep 18 2023 with Bootstrap v5.3.2
  * Template URL: https://bootstrapmade.com/vlava-free-bootstrap-one-page-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="logo">
              <h1><a href="index.html">Financials and Support Services </a></h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                {/*
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
    */}
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero">
          <div className="hero-container">
            <h1>Success begins here </h1>
            <h2>We are a team of talented corporate Financial support professionals </h2>
            <a href="https://wa.me/917022372860" className="btn-get-started">Get Started</a>
          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container">
              <div className="row content">
                <div className="col-lg-6">
                  <h2>Trustworthy advisory Services </h2>
                  <h3>Business establishment, Trading, Financial Planning, Corporate financing, Investment, Audit, Risk assessment, Insurance, Tax, Zakat</h3>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                  <p>
                    We have over 40 years of experience and pride ourselves on understanding our clients, their businesses, and the issues they face, no matter how big or small.
                    We are a reputed Business Advisory firm. Our local knowledge and international expertise mean we can offer a bespoke, personalised service, tailored to our client’s needs.
                  </p>      
                  <ul>
                    <li><i className="ri-check-double-line" />  The strongest partnerships are built on trust. We are open and candid in our advice, and reliable in our delivery. </li>
                  </ul>
                  <p className="fst-italic">
                    We provide a full range of services to support our clients, regardless of the stage in their journey. All our offices have a full-service offering, from bookkeeping to financial planning, tax compliance to business advisory.
                    All our services are founded on building long lasting relationships, so that we can fully understand your needs and the challenges you face, while maximising all opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Services</h2>
                <p>Trustworthy advisory for Business, Investment, Corporate governance, Legal compliance, Technology Partnership</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 icon-box">
                  <div className="icon"><i className="bi bi-briefcase" /></div>
                  <h4 className="title"><a href>Financials</a></h4>
                  <p className="description">Treasury, Book keeping, AR, AP,GL, </p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                  <div className="icon"><i className="bi bi-card-checklist" /></div>
                  <h4 className="title"><a href>Legal compliance </a></h4>
                  <p className="description">Income Tax, GST, VAT, Zakat </p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                  <div className="icon"><i className="bi bi-bar-chart" /></div>
                  <h4 className="title"><a href>Technology </a></h4>
                  <p className="description">ERP, SAP, Oracle </p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                  <div className="icon"><i className="bi bi-binoculars" /></div>
                  <h4 className="title"><a href> Investment </a></h4>
                  <p className="description">investment advisory , Portfolio management, Equity Cash segment, Mutual Fund</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                  <div className="icon"><i className="bi bi-brightness-high" /></div>
                  <h4 className="title"><a href>Human Resources</a></h4>
                  <p className="description">Talent acquisition, Recruitment, Payroll, resources augmentation,</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                  <div className="icon"><i className="bi bi-calendar4-week" /></div>
                  <h4 className="title"><a href>Corporate Training</a></h4>
                  <p className="description">Soft skills, Finance, Accounts,Technology and tools</p>
                </div>
              </div>
            </div>
          </section>{/* End Services Section */}
          {/* ======= Featured Section ======= */}
          <section id="featured" className="featured">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="card">
                    <img src="assets/img/featured-x1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title"><a href>Wealth Management</a></h5>
                      <p className="card-text">Wealth management is the process of growing and preserving your wealth. It involves investment planning, tax minimization, estate planning, and other financial services.</p>
                      <p>
                        Investment strategy is a roadmap for your investment decisions. It considers your financial goals, risk tolerance, and investment timeline.</p>
                      <a href="#" className="btn">Explore more</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="card">
                    <img src="assets/img/featured-x2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title"><a href>Treasury</a></h5>
                      <p className="card-text">Government treasury: This refers to a government department responsible for managing the country's financial resources. It typically oversees tasks like collecting taxes, issuing currency, and managing public debt.</p>
                      <p>
                        Corporate treasury: This is the financial department within a company that manages the company's cash flow, financial risks, and investments.
                      </p>
                      <p>
                        Group treasury is a department within a large corporation that oversees the financial activities of the entire corporate group, including subsidiaries and affiliates. It's essentially the central hub for managing the financial health of the entire organization.
                      </p>
                      <p>Taxation is the system by which the government collects revenue from individuals and businesses. It's important to understand how taxes impact your finances so you can make informed decisions.</p>
                      <a href="#" className="btn">Explore more</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="card">
                    <img src="assets/img/featured-x3.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title"><a href>Financing </a></h5>
                      <p className="card-text">Financing is the process of obtaining funds for a purchase or investment. It can involve loans, credit cards, or other forms of debt.</p>
                      <a href="#" className="btn">Explore more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Featured Section */}
          {/* ======= Testimonials Section ======= 
    <section id="testimonials" class="testimonials">
      <div class="container position-relative">

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="assets/img/testimonials/testimonials-x1.jpg" class="testimonial-img" alt="">
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Your entire team is awesome! Being a wealth management firm, we REALLY appreciate your fantastic support of our mission critical ops -- keeping our client data secure and our network running smoothly!".
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> End testimonial item

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="assets/img/testimonials/testimonials-x2.jpg" class="testimonial-img" alt="">
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  "The support tech assigned to my issues, Finance Manager has responded each time in a timely fashion, has been extremely informative and helpful and was able each time to work around my schedule. Thank you very, very much!".
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> End testimonial item

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="assets/img/testimonials/testimonials-x3.jpg" class="testimonial-img" alt="">
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  "In most situations the on boarding process is difficult and painful , with FSS Solutions, we were reassured of our choice of vendor during this process by the dedication demonstrated by the employees . They have a very engaged team that demonstrates great ownership of the work they do."
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> End testimonial item

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="assets/img/testimonials/testimonials-x4.jpg" class="testimonial-img" alt="">
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                 "Your entire team is awesome! Being a wealth management firm, we really appreciate your fantastic support of our mission critical operations, keeping our client data secure and our network running smoothly!"
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> End testimonial item 

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="assets/img/testimonials/testimonials-x5.jpg" class="testimonial-img" alt="">
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Financial advisor has been advising me on my financial affairs since quite sometime He has always been insightful with regard to my needs. His investment suggestions have been sensible and fair. He has demonstrated sound and conservative financial ability. After talking to him on various investment recommendations, I felt that investing through him was a good way to put some money away and let it grow without me having to deal with it. My goal was to forget about the investment, only to come back to it years later and find a small treasure. I don’t have the time too personally focus on this investment, I am happy to have found a trustworthy financial adviser to manage my funds so I can concentrate my time and energy on expanding my business.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> End testimonial item

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section> End Testimonials Section */}
          {/* ======= Portfolio Section ======= */}
          {/*    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit onsequatur ex aliquid fuga eum quidem</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
    */}
          {/* End Portfolio Section */}
          {/* ======= Team Section ======= */}
          <section id="team" className="team section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Team</h2>
                <p> Your Success, Our Priority.</p><p />
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/img/team/ceo.jpg" className="img-fluid" alt="" />
                      <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Chief Executive Officer</h4>
                      <span />
                    </div>
                  </div>
                </div>
                {/*
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Product Manager</h4>
                <span></span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                //<img src="assets/img/team/team-3.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Chief Technology Officer</h4>
                <span></span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                //<img src="assets/img/team/team-4.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Finance Manager</h4>
                <span></span>
              </div>
            </div>
          </div>

        </div>
*/}
              </div>
            </div></section>{/* End Team Section */}
          {/* ======= Pricing Section ======= */}
          {/*
    <section id="pricing" class="pricing">
      <div class="container">

        <div class="section-title">
          <h2>Pricing</h2>
          <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="box">
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li class="na">Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div class="box featured">
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div class="box">
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> End Pricing Section */}
          {/* ======= Frequently Asked Questions Section ======= */}
          <section id="faq" className="faq">
            <div className="container">
              <div className="section-title">
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="row  d-flex align-items-stretch">
                <div className="col-lg-6 faq-item">
                  <i className="bx bx-help-circle" />
                  <h4>What do you offer ?</h4>
                  <p>
                    We offer a wide range of financial support services, including budgeting and debt management, credit counseling, financial education workshops, and one-on-one financial coaching
                  </p>
                </div>
                <div className="col-lg-6 faq-item">
                  <i className="bx bx-help-circle" />
                  <h4>Who can benefit from your services ?</h4>
                  <p>
                    Our services can benefit anyone who is looking to improve their financial situation. This includes individuals and families who are struggling with debt, budgeting, or who simply want to learn more about personal finance.
                  </p>
                </div>
                <div className="col-lg-6 faq-item">
                  <i className="bx bx-help-circle" />
                  <h4>Is it confidential ?</h4>
                  <p>
                    Yes, all of our services are confidential. We understand the importance of protecting your personal financial information.
                  </p>
                </div>
                <div className="col-lg-6 faq-item">
                  <i className="bx bx-help-circle" />
                  <h4>How do I get started ?</h4>
                  <p>
                    You can get started by contacting us for a free consultation. During the consultation, we will discuss your financial goals and needs and recommend the services that are right for you.
                  </p>
                </div>
                <div className="col-lg-6 faq-item">
                  <i className="bx bx-help-circle" />
                  <h4>What are the benefits of using financial support services ?</h4>
                  <p>
                    There are many benefits to using a financial support service. We can help you develop a plan to reach your financial goals, create a budget, manage your debt, and improve your overall financial health.
                    We offer many of our services online or over the phone. So even if you don't live near us, you can still get the help you need.
                  </p>
                </div>
                <div className="col-lg-6 faq-item">
                  <i className="bx bx-help-circle" />
                  <h4>What are your Qualifications ?</h4>
                  <p>
                    We are a reputable company with a team of experienced and certified financial professionals. We are committed to helping our clients achieve their financial goals.
                    Our financial coaches and counselors are all certified and experienced professionals. They have the knowledge and expertise to help you improve your financial situation.
                    We have many success stories of clients who have been able to improve their financial situation with our help. We can share some of these stories with you if you would like.
                  </p>
                </div>
              </div>
            </div>
          </section>{/* End Frequently Asked Questions Section */}
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Contact</h2>
                <p>Financial Strength is the cornerstone of our success Connect with us to prosper.</p>
              </div>
            </div>
            <div className="map">
              <iframe style={{border: 0, width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
            </div>
            <div className="container">
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-10">
                  <div className="info-wrap">
                    <div className="row">
                      <div className="col-lg-4 info">
                        <i className="bi bi-geo-alt" />
                        <h4>Location:</h4>
                        <p>No 15, VALLALAR STREET, ARUL NAGAR, URAPAKKAM WEST ,<br /> TAMIL NADU 
                          PINCODE 603211</p>
                      </div>
                      <div className="col-lg-4 info mt-4 mt-lg-0">
                        <i className="bi bi-envelope" />
                        <h4>Email:</h4>
                        <p>info@example.com<br />contact@example.com</p>
                      </div>
                      <div className="col-lg-4 info mt-4 mt-lg-0">
                        <i className="bi bi-phone" />
                        <h4>Call:</h4>
                        <p>+91 7022372860<br /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*
        <div class="row mt-5 justify-content-center">
          <div class="col-lg-10">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
        */}
              {/* End Contact Section */}
            </div></section></main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row  justify-content-center">
                <div className="col-lg-6">
                  <h3>Financial Support Services</h3>
                  <p>Your Dreams Our Mission.</p>
                </div>
              </div>
              <a aria-label="Chat on WhatsApp" href="https://wa.me/917022372860" className="btn-get-started">Chat on Whatsapp</a>
              <div className="social-links">
                <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="container footer-bottom clearfix">
            <div className="copyright">
              © Copyright <strong><span>Financial Support Services</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vlava-free-bootstrap-one-page-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>{/* End Footer */}
        <a href="https://api.whatsapp.com/send?phone=917022372860&text=Hello" className="float" target="_blank">
          <i className="fa fa-whatsapp my-float" />
        </a>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>
    );
  }
});