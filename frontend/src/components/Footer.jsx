/*import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className=" my-16 bg-black px-6 pt-8 md:px-16 lg:px-36 w-full text-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        <div className="md:max-w-96">
          <img className="w-36 h-auto bg-white" src={assets.logo} />
          <p className="mt-6 text-sm">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
              alt="google play"
              className="h-10 w-auto border border-white rounded"
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="app store"
              className="h-10 w-auto border border-white rounded"
            />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} ©{" "}
        <a href="https://prebuiltui.com">PrebuiltUI</a>. All Right Reserved.
      </p>
    </footer>
  );
};
export default Footer;*/

import { assets } from "../assets/assets";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="my-16 bg-black px-6 pt-8 md:px-16 lg:px-36 w-full text-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        {/* Logo & description */}
        <div className="md:max-w-[24rem]">
          <img
            className="w-36 h-auto bg-white"
            src={assets.logo}
            alt="Company Logo"
          />
          <p className="mt-6 text-sm">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
              alt="Download on Google Play"
              className="h-10 w-auto border border-white rounded"
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="Download on App Store"
              className="h-10 w-auto border border-white rounded"
            />
          </div>
        </div>

        {/* Navigation & contact */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-10 md:gap-20">
          <nav>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {year} ©{" "}
        <a href="https://prebuiltui.com" className="underline">
          PrebuiltUI
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
