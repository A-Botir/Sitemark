import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

const Header = ({
  scrollToFeatures,
  scrollToTestimonials,
  scrollToHighlights,
  scrollToPricing,
  scrollToFAQ,
}) => {
  const TargetLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <header className="shadow-head fixed top-5 z-10 rounded-[40px] border border-[#bfccd980] bg-[#ffffff66] px-6 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
            alt="site logo"
            className="w-[20%] cursor-pointer"
          />
          <ul className="flex items-center">
            <li
              className="rounded-[36px] px-3 py-[6px] text-[15px] font-medium hover:bg-[#96a0aa]"
              onClick={scrollToFeatures}
            >
              Features
            </li>
            <li
              className="rounded-[36px] px-3 py-[6px] text-[15px] font-medium hover:bg-[#96a0aa]"
              onClick={scrollToTestimonials}
            >
              Testimonials
            </li>
            <li
              className="rounded-[36px] px-3 py-[6px] text-[15px] font-medium hover:bg-[#96a0aa]"
              onClick={scrollToHighlights}
            >
              Highlights
            </li>
            <li
              className="rounded-[36px] px-3 py-[6px] text-[15px] font-medium hover:bg-[#96a0aa]"
              onClick={scrollToPricing}
            >
              Pricing
            </li>
            <li
              className="rounded-[36px] px-3 py-[6px] text-[15px] font-medium hover:bg-[#96a0aa]"
              onClick={scrollToFAQ}
            >
              FAQ
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <button className=" rounded-xl p-1 hover:bg-[#82b9f0] ">
            <ModeNightRoundedIcon color="primary" />
          </button>
          <TargetLink
            url={
              "https://mui.com/material-ui/getting-started/templates/sign-in/"
            }
          >
            <button className=" rounded-[32px] p-1 text-[13px] font-medium hover:bg-[#82b9f0]">
              Sign in
            </button>
          </TargetLink>

          <TargetLink
            url={
              "https://mui.com/material-ui/getting-started/templates/sign-up/"
            }
          >
            <button className="rounded-xl bg-gradient-to-b from-[#0A66C2]  to-[#064079] px-2 py-1 text-[13px] font-medium text-[#F0F7FF] hover:bg-[#2879ca]">
              Sign up
            </button>
          </TargetLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
