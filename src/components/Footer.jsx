const Footer = () => {
  return (
    <footer className="py-20">
      <div className="flex items-start justify-between">
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
        <div className="flex justify-center"></div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
