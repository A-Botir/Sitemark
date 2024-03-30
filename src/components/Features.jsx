import { useState } from "react";

const Features = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "url('https://mui.com/static/images/templates/templates-images/dash-light.png')",
  );

  const handleButtonClick = (imageUrl) => {
    setBackgroundImage(
      `url('https://mui.com/static/images/templates/templates-images/${imageUrl}-light.png')`,
    );
  };

  return (
    <section className="mt-32 grid grid-cols-2 gap-12" id="features">
      <div>
        <h2 className="text-[36px] font-medium leading-[54px]">
          Product features
        </h2>
        <p className="mb-8 text-[15px] leading-[23px] text-[#4c5967]">
          Here you can provide a brief overview of the key features of the
          product. For example, you could list the number of features, the types
          of features, add-ons, or the benefits of the features.
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleButtonClick("dash")}
            className={`flex items-center gap-5 rounded-[10px] border ${backgroundImage === "url('https://mui.com/static/images/templates/templates-images/dash-light.png')" ? "border-[#42a5f5] bg-[#1976d20a]" : "border-[#d6e2ebcc]"} p-6 transition duration-500 ease-in hover:border-[#55a6f6] hover:bg-[#55a6f64d] hover:shadow-card`}
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ViewQuiltRoundedIcon"
              width="3rem"
              height="3rem"
              fill={`${backgroundImage === "url('https://mui.com/static/images/templates/templates-images/dash-light.png')" ? "#1976d2" : "#e0e0e0"}`}
            >
              <path d="M21 6v4.5c0 .55-.45 1-1 1h-9.67c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1H20c.55 0 1 .45 1 1m-6.33 12v-4.5c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1m1-4.5V18c0 .55.45 1 1 1H20c.55 0 1-.45 1-1v-4.5c0-.55-.45-1-1-1h-3.33c-.56 0-1 .45-1 1M8.33 18V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.33c.56 0 1-.45 1-1"></path>
            </svg>
            <div>
              <h4 className="text-left font-bold">Dashboard</h4>
              <p className="my-1 text-left text-[#4C5967]">
                This item could provide a snapshot of the most important metrics
                or data points related to the product.
              </p>
              <p className="flex w-[28%] items-center gap-1 border-b border-[#81b3e6] border-[none] font-medium text-[#064079] hover:gap-2">
                <span>Learn more</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1b73m46"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ChevronRightRoundedIcon"
                  width="1.5rem"
                  height="1.5rem"
                >
                  <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"></path>
                </svg>
              </p>
            </div>
          </button>
          <button
            onClick={() => handleButtonClick("mobile")}
            className={`flex items-center gap-5 rounded-[10px] border ${backgroundImage === "url('https://mui.com/static/images/templates/templates-images/mobile-light.png')" ? "border-[#42a5f5] bg-[#1976d20a]" : "border-[#d6e2ebcc]"} p-6 transition duration-500 ease-in hover:border-[#55a6f6] hover:bg-[#55a6f64d] hover:shadow-card`}
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="EdgesensorHighRoundedIcon"
              width="3rem"
              height="3rem"
              fill={`${backgroundImage === "url('https://mui.com/static/images/templates/templates-images/mobile-light.png')" ? "#1976d2" : "#e0e0e0"}`}
            >
              <path d="M4 7c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m-3 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1m22-3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m-3 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1m-4-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 17H8V7h8z"></path>
            </svg>
            <div>
              <h4 className="text-left font-bold">Mobile integration</h4>
              <p className="my-1 text-left text-[#4C5967]">
                This item could provide information about the mobile app version
                of the product.
              </p>
              <p className="flex w-[28%] items-center gap-1 border-b border-[#81b3e6] border-[none] font-medium text-[#064079] hover:gap-2">
                <span>Learn more</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1b73m46"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ChevronRightRoundedIcon"
                  width="1.5rem"
                  height="1.5rem"
                >
                  <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"></path>
                </svg>
              </p>
            </div>
          </button>
          <button
            onClick={() => handleButtonClick("devices")}
            className={`flex items-center gap-5 rounded-[10px] border ${backgroundImage === "url('https://mui.com/static/images/templates/templates-images/devices-light.png')" ? "border-[#42a5f5] bg-[#1976d20a]" : "border-[#d6e2ebcc]"} p-6 transition duration-500 ease-in hover:border-[#55a6f6] hover:bg-[#55a6f64d] hover:shadow-card`}
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="DevicesRoundedIcon"
              width="3rem"
              height="3rem"
              fill={`${backgroundImage === "url('https://mui.com/static/images/templates/templates-images/devices-light.png')" ? "#1976d2" : "#e0e0e0"}`}
            >
              <path d="M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20H14v-3H4zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z"></path>
            </svg>
            <div>
              <h4 className="text-left font-bold">
                Available on all platforms
              </h4>
              <p className="my-1 text-left text-[#4C5967]">
                This item could let users know the product is available on all
                platforms, such as web, mobile, and desktop.
              </p>
              <p className="flex w-[28%] items-center gap-1 border-b border-[#81b3e6] border-[none] font-medium text-[#064079] hover:gap-2">
                <span>Learn more</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1b73m46"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ChevronRightRoundedIcon"
                  width="1.5rem"
                  height="1.5rem"
                >
                  <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"></path>
                </svg>
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className="border  border-[#bfccd980] px-[65px] py-[55px]">
        <div
          className="h-full w-full bg-cover bg-no-repeat"
          style={{ backgroundImage: backgroundImage }}
        >
          {/* url('https://mui.com/static/images/templates/templates-images/dash-light.png
          url('https://mui.com/static/images/templates/templates-images/mobile-light.png'
          url('https://mui.com/static/images/templates/templates-images/devices-light.png' */}
        </div>
      </div>
    </section>
  );
};

export default Features;
