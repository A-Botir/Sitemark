import React from "react";

const HighLight = () => {
  return (
    <section className="bg-[#06090a]" id="highlights">
      <div className="container pb-32 pt-24">
        <div className="mx-auto mb-12 w-[60%]">
          <h2 className="text-center text-[36px] font-medium text-white">
            Highlights
          </h2>
          <p className="text-center text-[15px] text-[#94A6B8]">
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-[10px] border border-[#131B20] bg-[#090E10] p-6">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SettingsSuggestRoundedIcon"
              fill="grey"
              width="24px"
              height="24px"
            >
              <path d="m18.04 7.99-.63-1.4-1.4-.63c-.39-.18-.39-.73 0-.91l1.4-.63.63-1.4c.18-.39.73-.39.91 0l.63 1.4 1.4.63c.39.18.39.73 0 .91l-1.4.63-.63 1.4c-.17.39-.73.39-.91 0m3.24 4.73-.32-.72c-.18-.39-.73-.39-.91 0l-.32.72-.73.32c-.39.18-.39.73 0 .91l.72.32.32.73c.18.39.73.39.91 0l.32-.72.73-.32c.39-.18.39-.73 0-.91zm-5.04 1.65 1.23.93c.4.3.51.86.26 1.3l-1.62 2.8c-.25.44-.79.62-1.25.42l-1.43-.6c-.2.13-.42.26-.64.37l-.19 1.54c-.06.5-.49.88-.99.88H8.38c-.5 0-.93-.38-.99-.88l-.19-1.54c-.22-.11-.43-.23-.64-.37l-1.43.6c-.46.2-1 .02-1.25-.42l-1.62-2.8c-.25-.44-.14-.99.26-1.3l1.23-.93V14c0-.12 0-.25.01-.37l-1.23-.93c-.4-.3-.51-.86-.26-1.3l1.62-2.8c.25-.44.79-.62 1.25-.42l1.43.6c.2-.13.42-.26.64-.37l.19-1.54c.05-.49.48-.87.98-.87h3.23c.5 0 .93.38.99.88l.19 1.54c.22.11.43.23.64.37l1.43-.6c.46-.2 1-.02 1.25.42l1.62 2.8c.25.44.14.99-.26 1.3l-1.23.93c.01.12.01.24.01.37s0 .24-.01.36M13 14c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3"></path>
            </svg>
            <h6 className="mb-[5px] mt-2 text-white">Adaptable performance</h6>
            <p className="mb-8 text-[#94a6b8]">
              Our product effortlessly adjusts to your needs, boosting
              efficiency and simplifying your tasks.
            </p>
          </div>
          <div className="rounded-[10px] border border-[#131B20] bg-[#090E10] p-6">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ConstructionRoundedIcon"
              fill="grey"
              width="24px"
              height="24px"
            >
              <path d="m20.99 17.99-4.94-4.94-2.12 2.12 4.94 4.94c.59.59 1.54.59 2.12 0 .58-.59.58-1.54 0-2.12M17.65 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41-1.93 0-3.5 1.57-3.5 3.5 0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78c.39-.39.39-1.02 0-1.41l-.71-.71 2.12-2.12c-1.17-1.17-3.07-1.17-4.24 0L5.08 6.32c-.39.39-.39 1.02 0 1.41l.71.71H3.25c-.19 0-.37.07-.5.21-.28.28-.28.72 0 1l2.54 2.54c.28.28.72.28 1 0 .13-.13.21-.31.21-.5V9.15l.7.7c.39.39 1.02.39 1.41 0l1.78 1.78-6.35 6.35c-.59.59-.59 1.54 0 2.12.59.59 1.54.59 2.12 0L16.48 9.79c.37.13.76.21 1.17.21"></path>
            </svg>
            <h6 className="mb-[5px] mt-2 text-white">Built to last</h6>
            <p className="mb-8 text-[#94a6b8]">
              Experience unmatched durability that goes above and beyond with
              lasting investment.
            </p>
          </div>
          <div className="rounded-[10px] border border-[#131B20] bg-[#090E10] p-6">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ThumbUpAltRoundedIcon"
              fill="grey"
              width="24px"
              height="24px"
            >
              <path d="M13.12 2.06 7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01M3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2"></path>
            </svg>
            <h6 className="mb-[5px] mt-2 text-white">Great user experience</h6>
            <p className="mb-8 text-[#94a6b8]">
              Integrate our product into your routine with an intuitive and
              easy-to-use interface.
            </p>
          </div>
          <div className="rounded-[10px] border border-[#131B20] bg-[#090E10] p-6">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AutoFixHighRoundedIcon"
              fill="grey"
              width="24px"
              height="24px"
            >
              <path d="m20.45 6 .49-1.06L22 4.45c.39-.18.39-.73 0-.91l-1.06-.49L20.45 2c-.18-.39-.73-.39-.91 0l-.49 1.06-1.05.49c-.39.18-.39.73 0 .91l1.06.49.49 1.05c.17.39.73.39.9 0M8.95 6l.49-1.06 1.06-.49c.39-.18.39-.73 0-.91l-1.06-.48L8.95 2c-.17-.39-.73-.39-.9 0l-.49 1.06-1.06.49c-.39.18-.39.73 0 .91l1.06.49L8.05 6c.17.39.73.39.9 0m10.6 7.5-.49 1.06-1.06.49c-.39.18-.39.73 0 .91l1.06.49.49 1.06c.18.39.73.39.91 0l.49-1.06 1.05-.5c.39-.18.39-.73 0-.91l-1.06-.49-.49-1.06c-.17-.38-.73-.38-.9.01m-1.84-4.38-2.83-2.83a.9959.9959 0 0 0-1.41 0L2.29 17.46c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0L17.7 10.53c.4-.38.4-1.02.01-1.41m-3.5 2.09L12.8 9.8l1.38-1.38 1.41 1.41z"></path>
            </svg>
            <h6 className="mb-[5px] mt-2 text-white">
              Innovative functionality
            </h6>
            <p className="mb-8 text-[#94a6b8]">
              Stay ahead with features that set new standards, addressing your
              evolving needs better than the rest.
            </p>
          </div>
          <div className="rounded-[10px] border border-[#131B20] bg-[#090E10] p-6">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SupportAgentRoundedIcon"
              fill="grey"
              width="24px"
              height="24px"
            >
              <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2 .55 0 1-.45 1-1v-4.81c0-3.83 2.95-7.18 6.78-7.29 3.96-.12 7.22 3.06 7.22 7V19h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62"></path>
              <circle cx="9" cy="13" r="1"></circle>
              <circle cx="15" cy="13" r="1"></circle>
              <path d="M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47"></path>
            </svg>
            <h6 className="mb-[5px] mt-2 text-white">Reliable support</h6>
            <p className="mb-8 text-[#94a6b8]">
              Count on our responsive customer support, offering assistance that
              goes beyond the purchase.
            </p>
          </div>
          <div className="rounded-[10px] border border-[#131B20] bg-[#090E10] p-6">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="QueryStatsRoundedIcon"
              fill="grey"
              width="24px"
              height="24px"
            >
              <path d="M19.88 18.47c.48-.77.75-1.67.69-2.66-.13-2.15-1.84-3.97-3.97-4.2-2.72-.3-5.02 1.81-5.02 4.47 0 2.49 2.01 4.5 4.49 4.5.88 0 1.7-.26 2.39-.7l2.41 2.41c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42zm-3.8.11c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5m-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.08 5.01c-.36.58-1.17.64-1.61.13l-2.12-2.47-3.06 4.9c-.31.49-.97.62-1.44.28-.42-.31-.54-.89-.26-1.34l3.78-6.05c.36-.57 1.17-.63 1.61-.12L9 12.5l3.18-5.17c.38-.62 1.28-.64 1.68-.03zm2.59.5c-.64-.28-1.33-.45-2.05-.49L20.8 2.9c.31-.49.97-.61 1.43-.27.43.31.54.9.26 1.34z"></path>
            </svg>
            <h6 className="mb-[5px] mt-2 text-white">
              Precision in every detail
            </h6>
            <p className="mb-8 text-[#94a6b8]">
              Enjoy a meticulously crafted product where small touches make a
              significant impact on your overall experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighLight;
