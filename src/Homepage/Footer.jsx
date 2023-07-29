import React from "react";


export default function Footer() {
  return (
    <>
    
      <body class="d-flex flex-column mt-4">
        <footer class="bg-dark">
          <div class="container py-5">
            <div class="row py-4">
              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <img src="img/logo.png" alt="" width="180" class="mb-3" />
                <p class="font-italic text-muted">
                  आम जनता द्वारा किसी भी प्रकार की मांग, शिकायत/ज्ञापन एवं
                  सहायता प्राप्त करनी हो या ऐसी कोई कार्य जिसका निदान वहॉ के
                  संबंधित स्थानीय कार्यालय द्वारा नहीं किया जा रहा हो। वह अपनी
                  उक्त मांग, शिकायत अथवा सहायता हेतु माननीय राज्यपाल महोदय को
                  सम्बोधित कर उस पर कार्यवाही हेतु आवेदन कर सकता है।.
                </p>
                <ul class="list-inline mt-4">
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="instagram">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="pinterest">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="vimeo">
                      <i class="fa fa-vimeo"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 class="text-uppercase text-muted font-weight-bold mb-4">
                  links
                </h6>
                <ul class="list-unstyled  mb-0">
                  <li class="mb-2 ">
                    <a href="#" class="text-decoration-none ">
                      Home
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none ">
                      Accessibility Statement
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none ">
                      Accessibility Option
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none ">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none ">
                      Hyperlink policy
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none ">
                      Terms & Condition
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none ">
                      Copyright policy
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 class="text-uppercase text-muted font-weight-bold mb-4">
                  Websites
                </h6>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2 ">
                    <a href="#" class="text-decoration-none ">
                      Login
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none ">
                      Register
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none ">
                      Wishlist
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none ">
                      Our Products
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 mb-lg-0">
                <h6 class="text-uppercase text-muted font-weight-bold mb-4">
                  address
                </h6>
                <p class="text-muted mb-4">
                  State Informatics Officer, National Informatics Centre
                  Government of India, Ministry of Electronics & Information
                  Technology, Hall No- 14,15,16 Admin Block, Second Floor,
                  Mantralaya, Mahanadi Bhawan, Atal Nagar, Nava Raipur- 492002
                  Chhattisgarh
                </p>
              </div>
            </div>
          </div>

          <div class=" py-1" style={{ background: " #0A4073" }}>
            <div class="container text-center">
              <p class=" hello text-white mb-0 py-1 text-center">
                &copy; {new Date().getFullYear()} Copyright: Site Designed,
                developed and hosted by National Informatics Centre (NIC),
                Chhattisgarh, Raipur.
                <hr></hr>
                All efforts have been made to make the information as accurate
                as possible. Departments of Chhattisgarh Govt. or NIC, will not
                be responsible for any damage caused by inaccuracy in the
                information available on this Website. &nbsp; &nbsp;{" "}
                <a href="https://chhattisgarh.nic.in" target={"_blank"}>
                  <img
                    src="https://www.nic.in/wp-content/themes/NICTheme/assets/images/logo.png"
                    height={100}
                    width={100}
                    className="img-fluid shadow-4"
                    alt="..."
                  />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
