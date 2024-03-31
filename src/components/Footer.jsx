const Footer = ({
  scrollToFeatures,
  scrollToTestimonials,
  scrollToHighlights,
}) => {
  const TargetLink = ({ url, children }) => (
    <a href={url} rel="noopener noreferrer">
      {children}
    </a>
  );
  return (
    <footer className="py-20">
      <div className="flex items-start justify-between pb-16">
        <div className="w-[50%]">
          <img
            src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
            alt="site logo"
            className="w-[30%] cursor-pointer"
          />
          <h4 className="mb-1 font-semibold">Newsletter</h4>
          <p className="mb-4 text-[#4c5967]">
            Subscribe to our newsletter for weekly updates and promotions.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              className="w-[69%] rounded-lg border border-[#D6E2EB] px-[14px] py-[9px] outline-4 outline-[#D6E2EB]"
              placeholder="Your email address"
            />
            <button className="rounded-lg bg-gradient-to-b from-[#0A66C2] to-[#064079] p-[0px] px-4 text-white active:bg-[#0959AA;]">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex items-start justify-end gap-16 ">
          <div>
            <h4 className="mb-2 font-semibold">Product</h4>
            <ul>
              <li
                className="li mb-2 cursor-pointer text-[15px] font-medium text-[#4C5967]"
                onClick={scrollToFeatures}
              >
                Features
              </li>
              <li
                className="li mb-2 cursor-pointer text-[15px] font-medium text-[#4C5967]"
                onClick={scrollToTestimonials}
              >
                Testimonials
              </li>
              <li
                className="li mb-2 cursor-pointer text-[15px] font-medium text-[#4C5967]"
                onClick={scrollToHighlights}
              >
                Highligts
              </li>
              <li className="li mb-2 text-[15px] font-medium text-[#4C5967]">
                Pricing
              </li>
              <li className="li mb-2 text-[15px] font-medium text-[#4C5967]">
                Faqs
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Company</h4>
            <ul>
              <li className="li mb-2 cursor-pointer text-[15px] font-medium  text-[#4C5967]">
                About us
              </li>
              <li className="li mb-2 cursor-pointer text-[15px] font-medium  text-[#4C5967]">
                Careers
              </li>
              <li className="li mb-2 cursor-pointer text-[15px] font-medium  text-[#4C5967]">
                Press
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Legal</h4>
            <ul>
              <li className="li mb-2 cursor-pointer text-[15px] font-medium  text-[#4C5967]">
                Terms
              </li>
              <li className="li mb-2 cursor-pointer text-[15px] font-medium  text-[#4C5967]">
                Privacy
              </li>
              <li className="li mb-2 cursor-pointer text-[15px] font-medium  text-[#4C5967]">
                Contacts
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[#bfccd980] pt-16">
        <div>
          <div className="flex ">
            <span className="li text-[15px] font-medium text-[#4C5967]">
              Privacy Policy
            </span>
            <span className="text-[15px] font-medium text-[#4C5967]">
              {"  •  "}
            </span>
            <span className="li text-[15px] font-medium text-[#4C5967]">
              Terms of Service
            </span>
          </div>
          <p className="mt-2 flex text-[#4C5967]">
            Copyright ©{" "}
            <span className="li font-medium text-[#064079]"> Sitemark </span>
            {"  "}
            2024
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <TargetLink url={"https://github.com/mui"}>
            <div className="rounded-[50%] p-2 hover:bg-[#95b6eb80]">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="GitHubIcon"
                width="24px"
                height="24px"
                fill="#4C5967"
              >
                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
              </svg>
            </div>
          </TargetLink>
          <TargetLink
            url={
              "https://twitter.com/i/flow/login?redirect_after_login=%2FMaterialUI"
            }
          >
            <div className="rounded-[50%] p-2 hover:bg-[#95b6eb80]">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="XIcon"
                width="24px"
                height="24px"
                fill="#4C5967"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </div>
          </TargetLink>
          <TargetLink url={"https://www.linkedin.com/company/mui/"}>
            <div className="rounded-[50%] p-2 hover:bg-[#95b6eb80]">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LinkedInIcon"
                width="24px"
                height="24px"
                fill="#4C5967"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </div>
          </TargetLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
