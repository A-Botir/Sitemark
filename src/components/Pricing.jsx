import { CheckSvg, DarkSvg } from "../components/Svg";
import Button from "@mui/material/Button";

const Pricing = () => {
  const TargetLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
  return (
    <section className="pb-32 pt-24" id="pricing">
      <div className="mx-auto mb-12 w-[55%]">
        <h2 className="text-center text-[36px] font-medium">Pricing</h2>
        <p className="text-center text-[15px] text-[#4C5967]">
          Quickly build an effective pricing table for your potential customers
          with this layout. It's built with default Material UI components with
          little customization.
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="w-[32%] rounded-[10px] border border-[#d6e2ebcc] bg-[#fbfcfe] p-4">
          <div className="mb-8 p-4">
            <h3 className="mb-2 text-[18px] font-medium">Free</h3>
            <p className="text-[48px]  font-semibold">
              $0 <span className="text-[18px] font-medium">per month</span>
            </p>
            <hr className="my-4 w-full border-[#5b6b7c] opacity-20" />
            <ul className="mb-10 flex flex-col gap-5">
              <li className="flex items-center ">
                <CheckSvg />
                <span className="ml-3 text-[16px] font-medium">
                  10 users included
                </span>
              </li>
              <li className="flex items-center ">
                <CheckSvg />
                <span className="ml-3 text-[16px] font-medium">
                  2 GB of storage
                </span>
              </li>
              <li className="flex items-center ">
                <CheckSvg />
                <span className="ml-3 text-[16px] font-medium">
                  Help center access
                </span>
              </li>
              <li className="flex items-center ">
                <CheckSvg />
                <span className="ml-3 text-[16px] font-medium">
                  Email support
                </span>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <TargetLink
              url={
                "https://mui.com/material-ui/getting-started/templates/checkout/"
              }
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: "100%", borderRadius: "10px" }}
              >
                Sign up for free
              </Button>
            </TargetLink>
          </div>
        </div>
        <div className="w-[32%] rounded-[10px] border border-[#d6e2ebcc] bg-gradient-to-b from-[#033363] to-[#021F3B] p-4">
          <div className="mb-8 p-4">
            <div className="flex items-center justify-between">
              <h3 className="mb-2 text-[18px] font-medium text-[#EAF0F5]">
                Professional
              </h3>
              <p className="flex items-center gap-[2px] rounded-xl bg-[#f0f7ff] px-1 py-[2px] text-[13px] font-semibold text-[#02294F]">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiChip-icon MuiChip-iconSmall MuiChip-iconColorDefault css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AutoAwesomeIcon"
                  width="18px"
                  height="18px"
                  fill="#02294F"
                >
                  <path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"></path>
                </svg>
                Recommended
              </p>
            </div>
            <p className="text-[48px] font-semibold text-[#FBFCFE]">
              $15 <span className="text-[18px] font-medium">per month</span>
            </p>
            <hr className="my-4 w-full border-[#5b6b7c] opacity-20" />
            <ul className="mb-10 flex flex-col gap-5">
              <li className="flex items-center ">
                <DarkSvg />
                <span className="ml-3 text-[16px] font-medium text-[#D6E2EB]">
                  20 users included
                </span>
              </li>
              <li className="flex items-center ">
                <DarkSvg />
                <span className="ml-3 text-[16px] font-medium text-[#D6E2EB]">
                  10 GB of storage
                </span>
              </li>
              <li className="flex items-center ">
                <DarkSvg />
                <span className="ml-3 text-[16px] font-medium text-[#D6E2EB]">
                  Help center access
                </span>
              </li>
              <li className="flex items-center ">
                <DarkSvg />
                <span className="ml-3 text-[16px] font-medium text-[#D6E2EB]">
                  Priority email support
                </span>
              </li>
              <li className="flex items-center ">
                <DarkSvg />
                <span className="ml-3 text-[16px] font-medium text-[#D6E2EB]">
                  Dedicated team
                </span>
              </li>
              <li className="flex items-center ">
                <DarkSvg />
                <span className="ml-3 text-[16px] font-medium text-[#D6E2EB]">
                  Best deals
                </span>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <TargetLink
              url={
                "https://mui.com/material-ui/getting-started/templates/checkout/"
              }
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  background: "linear-gradient(to bottom, #0A66C2, #064079)",
                  borderRadius: "10px",
                }}
              >
                Sign up for free
              </Button>
            </TargetLink>
          </div>
        </div>
        <div className="w-[32%] rounded-[10px] border border-[#d6e2ebcc] bg-[#fbfcfe] p-4">
          <div className="mb-8 p-4">
            <h3 className="mb-2 text-[18px] font-medium">Enterprise</h3>
            <p className="text-[48px]  font-semibold">
              $30 <span className="text-[18px] font-medium">per month</span>
            </p>
            <hr className="my-4 w-full border-[#5b6b7c] opacity-20" />
            <ul className="mb-10 flex flex-col gap-5">
              <li className="flex items-center ">
                <CheckSvg />
                <span className="ml-3 text-[16px] font-medium">
                  50 users included
                </span>
              </li>
              <li className="flex items-center ">
                <CheckSvg />
                <span className="ml-3 text-[16px] font-medium">
                  30 GB of storage
                </span>
              </li>
              <li className="flex items-center ">
                <CheckSvg />
                <span className="ml-3 text-[16px] font-medium">
                  Help center access
                </span>
              </li>
              <li className="flex items-center ">
                <CheckSvg />
                <span className="ml-3 text-[16px] font-medium">
                  Phone & email support
                </span>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <TargetLink
              url={
                "https://mui.com/material-ui/getting-started/templates/checkout/"
              }
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: "100%", borderRadius: "10px" }}
              >
                Contact us
              </Button>
            </TargetLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
