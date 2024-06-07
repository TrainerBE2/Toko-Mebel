import "./Footer.css";
const Footer = () => {
  return (
    // <footer
    //   className="pt-4 pb-2 border-top border-2 border-secondary text-bg-dark overflow-hidden"
    //   id="footer"
    // >
    //   <div className="container">
    //     <div className="row g-4">
    //       <div className="col col-md-3 text-uppercase text-end border-end border-2 border-secondary-subtle me-2 me-md-0">
    //         <h6 className="fw-bold fm-2">Our Menu</h6>
    //         <div className="fm-2">
    //           <Nav.Link href="#home">About Us</Nav.Link>
    //           <Nav.Link href="#">Store Location</Nav.Link>
    //           <Nav.Link href="#bestSeller">Trending</Nav.Link>
    //           <Nav.Link href="#recent">Style Guide</Nav.Link>
    //           <Nav.Link href="#">Term & Conditions</Nav.Link>
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-6 px-4 px-lg-5 order-first order-md-0">
    //         <div className="text-center px-lg-5">
    //           <h2 className="fw-bold fm-1">
    //             Toko<span className="text-warning">Mebel</span>
    //           </h2>
    //           <p className="fm-2">
    //             We send futuristic products designed on malls
    //           </p>
    //           <form>
    //             <div className="input-group fm-2">
    //               <input
    //                 type="text"
    //                 placeholder="E-mail"
    //                 className="form-control rounded-0 border border-secondary fm-3"
    //               />
    //               <button className="btn btn-warning rounded-0 border border-secondary">
    //                 Subscribe
    //               </button>
    //             </div>
    //           </form>
    //           <div className="d-flex align-items-center justify-content-center gap-2 mt-4 text-uppercase fm-2">
    //             <Nav.Link href="#" className="m-0 p-0">
    //               <i className="ri-facebook-box-fill fs-5"></i>
    //             </Nav.Link>
    //             <span className="line d-block"></span>
    //             <Nav.Link href="#" className="m-0 p-0">
    //               <i className="ri-twitter-x-line fs-6"></i>
    //             </Nav.Link>
    //             <span className="line d-block"></span>
    //             <Nav.Link href="#" className="m-0 p-0">
    //               <i className="ri-instagram-line fs-5"></i>
    //             </Nav.Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col col-md-3 border-start border-2 border-secondary-subtle ms-2 ms-md-0 fm-2">
    //         <h6 className="fw-bold text-uppercase">Contact Us</h6>
    //         <div className="group mb-2">
    //           <p className="fw-bold m-0">Helpline</p>
    //           <p className="m-0">+62 123 4567 8910</p>
    //         </div>
    //         <div className="group mb-2">
    //           <p className="fw-bold m-0">E-mail Us</p>
    //           <p className="m-0">tokomebel@gmail.com</p>
    //         </div>
    //         <div className="group">
    //           <p className="fw-bold m-0">Head Quarter</p>
    //           <p className="m-0">
    //             Suite 747 69872 Zboncak Lakes, New Hermine, CT 12589
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <p className="mt-2 mb-0 fm-2 text-center text-secondary pt-2 copy">
    //       &copy; Kelompok 2. All Right Reserved
    //     </p>
    //   </div>
    // </footer>

    <footer id="footer"
      className="text-white text-center text-lg-start"
      style={{ backgroundColor: "#23242a" }}
    >
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 fm-3 fw-bold">About Toko<span className="text-warning">Mebel</span> </h5>
            <p className="fm-2 fs-7">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <p className="fm-2 fs-7">
              Blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias.
            </p>
            <div className="mt-4 d-flex gap-2 media">
              <a type="button" className="btn btn-warning ">
                <i className="ri-facebook-box-fill" />
              </a>

              <a type="button" className="btn btn-warning ">
                <i className="ri-instagram-fill" />
              </a>

              <a type="button" className="btn btn-warning">
                <i className="ri-twitter-x-fill" />
              </a>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 pb-1 fm-3 fw-bold">Contact Us</h5>
            
            <ul className="list-unstyled fm-2 fs-7">
              <li className="mb-3">
                <span className="fa-li">
                  <i className="ri-map-pin-line" />
                </span>
                <span className="ms-2">New York, NY 10012, US</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="ri-mail-line" />
                </span>
                <span className="ms-2">info@example.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="ri-phone-fill" />
                </span>
                <span className="ms-2">+ 01 234 567 88</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 fm-3 fw-bold">Opening hours</h5>
            <table className="table table-dark">
              <tbody className="font-weight-normal fm-2">
                <tr>
                  <td>Mon - Thu:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>8am - 1am</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>9am - 10pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="m-0 fm-3 fs-7">&copy; 2024 - Kelompok 2. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
