import * as React from 'react';

export interface IHomePageProps {
}

export interface IHomePageState {
}

export default class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <section className="HomePageNew">
          <header className="HomeHeader">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="left-text">
                    <h1 className="fw-500">Bangladesh’s most comprehensive B2B portal for You</h1>
                    <p>Affiliate with us and grow your business</p>
                    <a href="/register" className="btn btn-primary">
                      Register as an Agent
                    </a>
                    <p>
                      Already have an account?
                      <a href="/admin/user/login">SIGN IN</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-7">
                  <img src="/images/landingPage/hometabs-screenshot.png" alt="" />
                  {/*                    <div class="HomeTabs-Main">*/}
                  {/*                        <ul class="Top-tabs nav nav-tabs" id="myTab" role="tablist">*/}
                  {/*                            <li class="nav-item">*/}
                  {/*                                <a class="nav-link " id="hotel-tab" data-toggle="tab" href="#hotel" role="tab"*/}
                  {/*                                   aria-controls="hotel" aria-selected="true">*/}
                  {/*                                    <img src="https://sharetrip.net/assets/images/icons/svg/hotel-white.svg"*/}
                  {/*                                         alt="hotel-white">*/}
                  {/*                                    <p>Hotel</p>*/}
                  {/*                                </a>*/}
                  {/*                            </li>*/}
                  {/*                            <li class="nav-item">*/}
                  {/*                                <a class="nav-link active" id="flights-tab" data-toggle="tab" href="#flights"*/}
                  {/*                                   role="tab" aria-controls="flights" aria-selected="false">*/}
                  {/*                                    <img src="https://sharetrip.net/assets/images/icons/svg/plane-white.svg"*/}
                  {/*                                         alt="plane-white">*/}
                  {/*                                    <p>Flight</p>*/}
                  {/*                                </a>*/}
                  {/*                            </li>*/}
                  {/*                            <li class="nav-item">*/}
                  {/*                                <a class="nav-link" id="holiday-tab" data-toggle="tab" href="#holiday" role="tab"*/}
                  {/*                                   aria-controls="holiday" aria-selected="false">*/}
                  {/*                                    <img src="https://sharetrip.net/assets/images/icons/svg/package-white.svg"*/}
                  {/*                                         alt="package-white">*/}
                  {/*                                    <p>Holiday</p>*/}
                  {/*                                </a>*/}
                  {/*                            </li>*/}
                  {/*                            <li class="nav-item">*/}
                  {/*                                <a class="nav-link " id="groupTourTab" target="_blank"*/}
                  {/*                                   href="https://sharetrip.net/group-tour-request">*/}
                  {/*                                    <img src="https://sharetrip.net/assets/images/icons/svg/tours-white.svg"*/}
                  {/*                                         alt="tours-white">*/}
                  {/*                                    <p>Group Request</p>*/}
                  {/*                                </a>*/}
                  {/*                            </li>*/}
                  {/*                        </ul>*/}
                  {/*                        <div class="tab-content" id="myTabContent">*/}
                  {/*                            <div class="tab-pane fade " id="hotel" role="tabpanel" aria-labelledby="hotel-tab">*/}
                  {/*                            </div>*/}
                  {/*                            <div class="tab-pane fade show active" id="flights" role="tabpanel"*/}
                  {/*                                 aria-labelledby="flights-tab">*/}
                  {/*                            </div>*/}
                  {/*                            <div class="tab-pane fade" id="holiday" role="tabpanel" aria-labelledby="holiday-tab">*/}
                  {/*                            </div>*/}
                  {/*                        </div>*/}
                  {/*                    </div>*/}
                </div>
              </div>
            </div>
          </header>
        </section>
        <div>
          <section className="p-section WhyShareTrip" style={{ padding: '0 !important' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-title">
                  <h2 className="h1">Why ShareTrip?</h2>
                  <p>Best price, Customizable Interface, Largest Inventory</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="statistic">
                    <h3 className="mainText">1M+</h3>
                    <p>Accommodation across the world</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="statistic">
                    <h3 className="mainText">78+</h3>
                    <p>Worldwide suppliers</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="statistic">
                    <h3 className="mainText">30K+</h3>
                    <p>Direct contracts</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-section Inventory ">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-title">
                  <h2 className="h1">Inventory</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="st-feature">
                    <img src="/images/landingPage/handStart.png" alt="" />
                    <h4>Best Rates</h4>
                    <p>We find the best sources/suppliers for airfare and accommodation worldwide, and partner with them
                      to get you the best deal. </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="st-feature">
                    <img src="/images/landingPage/double-check.png" alt="" />
                    <h4>Availability</h4>
                    <p>Select and Book your preferred flight and hotel from thousands of options</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="st-feature">
                    <img src="/images/landingPage/creditCard.png" alt="" />
                    <h4>Multiple Payment Methods </h4>
                    <p>Flexible payment methods. Pay with your debit or credit card, mobile banking &amp; bank account.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-section Product">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-title">
                  <h2 className="h1">We Offer</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="st-feature">
                    <img src="/images/landingPage/desktopClick.png" alt="" />
                    <h4>User-Friendly Booking Engine</h4>
                    <p>Our vast experience in travel service over the years helped us in making a convenient booking
                      engine. Simply put in your details and get easy access to worldwide inventory and services.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="st-feature">
                    <img src="/images/landingPage/officeMarker.png" alt="" />
                    <h4>24 hour Backend Services </h4>
                    <p>Get 24 hour assistance in providing superior service to your valued clients. Our experts are here
                      to help you grow.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="st-feature">
                    <img src="/images/landingPage/brainProcessor.png" alt="" />
                    <h4>Customizable Interface</h4>
                    <p>We offer a highly customizable interface for you. With our B2B portal, your dashboard will truly
                      be yours.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-section Support">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-title">
                  <h2 className="h1">Remarkable Support</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="text">
                    <div className="text-block">
                      <h4>24/7 Assistance</h4>
                      <p>Our support center is always ready to guide you through any difficulties in booking. We will
                        be waiting to hear from you.</p>
                    </div>
                    <div className="text-block">
                      <h4>Need More?</h4>
                      <p>Not just flight and hotel, we promise to give you an all-round service.
                        Need visa assistance? Tours? Transfers? Just contact your ShareTrip Representative..</p>
                    </div>
                    <div className="text-block">
                      <h4>Personalized Support</h4>
                      <p>Designated ShareTrip Representatives are always there to help you if you face any issues. We
                        value your association with us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image">
                    <img src="/images/landingPage/supportCenter.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-section Questions">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="image">
                    <img src="/images/questions.png" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-title text-left">
                    <h2 className="h1">Got any question?</h2>
                    <p>Fill in the form and we will reach out you.</p>
                  </div>
                  <form method="post" action="site/contact">
                    <div className="inputs">
                      <div className="input-block">
                        <div className="form-group">
                          <label htmlFor="name" className="bmd-label-floating">Name</label>
                          <input type="text" className="form-control" name="name" id="name" defaultValue="Jhon Doe" />
                          {/* <span class="bmd-help">We'll never share your email with anyone else.</span> */}
                        </div>
                      </div>
                      <div className="input-block">
                        <div className="form-group">
                          <label htmlFor="companyName" className="bmd-label-floating">Company Name</label>
                          <input type="text" className="form-control" name="companyName" id="companyName" defaultValue="Company" />
                          {/* <span class="bmd-help">We'll never share your email with anyone else.</span> */}
                        </div>
                      </div>
                      <div className="input-block">
                        <div className="form-group">
                          <label htmlFor="phoneNumber" className="bmd-label-floating">Phone Number</label>
                          <input type="text" className="form-control numberInput" name="phoneNumber" id="phoneNumber" defaultValue={+88017123456789} />
                          {/* <span class="bmd-help">We'll never share your email with anyone else.</span> */}
                        </div>
                      </div>
                      <div className="input-block">
                        <div className="form-group">
                          <label htmlFor="companyName" className="bmd-label-floating">Email Address</label>
                          <input type="email" className="form-control" name="email" id="companyName" defaultValue="user@email.com" />
                          {/* <span class="bmd-help">We'll never share your email with anyone else.</span> */}
                        </div>
                      </div>
                      <div className="input-block">
                        <div className="form-group">
                          <div className="row"><div className="col-lg-3"><img id="w0-image" src="/site/captcha?v=610a581f390055.17738299" alt="" /></div><div className="col-lg-6"><input type="text" id="w0" className="form-control" name="captcha" /></div></div>                                {/* <span class="bmd-help">We'll never share your email with anyone else.</span> */}
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-white" type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="FooterComponent">
            <footer className="footer">
              <div className="container">
                <div className="row verified-paymentMethods">
                  <div className="col-md-4 offset-md-4 text-center">
                    <div className="verified-authorised">
                      <div className="block-cont"><span className="title">Verified by</span>
                        <div className="block">
                          <div className="image" style={{ backgroundImage: 'url("https://utility-assets.s3.amazonaws.com/media/assets/comodoSecure.png")' }}>
                          </div>
                        </div>
                      </div>
                      <div className="block-cont"><span className="title">Authorised by</span>
                        <div className="block">
                          <div className="image" style={{ backgroundImage: 'url("https://utility-assets.s3.amazonaws.com/media/assets/iata-logo.png")' }}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row top">
                    <div className="col-sm-6 col-md-2">
                      <div className="footer-menu">
                        <h5>Company</h5>
                        <ul>
                          <li><a href="/about">About Us</a></li>
                        </ul>
                        <div className="mb-xs-16 ovfh" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-2">
                      <div className="footer-menu">
                        <h5>Partner with us</h5>
                        <ul>
                          {/*                                <li><a href="/b2bregisterhotel">Register Your Hotel</a></li>*/}
                          {/*                                <li><a href="/affiliate">Become an Affiliate</a></li>*/}
                          <li><a href="/privacy-policy">Privacy Policy</a></li>
                          <li><a href="/paymentSecurity">Payment Security</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-2">
                      <div className="footer-menu">
                        <h5>Help</h5>
                        <ul>
                          <li><a href="/panel-update">FAQ</a></li>
                          <li><a href="tel:+8809617618619">Support Center</a></li>
                          <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="footer-menu contact">
                        <h5>Head office</h5>
                        <p>House: 45, Road: 13/C, Block: E, Banani, Dhaka, Bangladesh</p>
                        <div className="social">
                          <a href="https://www.facebook.com/sharetripinc/">
                            <img src="https://utility-assets.s3.amazonaws.com/media/assets/fb.png" alt="" />
                          </a>
                          <a href="https://www.messenger.com/t/356675571105532/">
                            <img src="https://utility-assets.s3.amazonaws.com/media/assets/messenger.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="footer-menu contact">
                        <h5>Corporate office</h5>
                        <p>House: 17, Road: 17/A, Block: E, Banani, Dhaka, Bangladesh</p>
                        <p>Email: <a href="mailto:agency@sharetrip.net">agency@sharetrip.net</a>
                        </p>
                        <p>Phone: <a href="tel:+8809617618619">+8809617618619</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row bottom">
                    <div className="col-md-12">Copyright @2021, ShareTrip. All rights reserved.</div>
                  </div>
                </div>
              </div>
            </footer>
          </section></div>

      </div>
    );
  }
}
