import {
  RiArrowDropUpFill,
  RiArrowUpCircleFill,
  RiCellphoneFill,
  RiCellphoneLine,
  RiFacebookFill,
  RiInstagramFill,
  RiInstagramLine,
  RiLandscapeFill,
  RiMailAddFill,
  RiMailCheckFill,
  RiMailCloseFill,
  RiMailFill,
  RiMailLine,
  RiMailOpenFill,
  RiMap2Fill,
  RiMapPin2Fill,
  RiMapPinLine,
  RiMegaphone2Fill,
  RiMessage2Fill,
  RiMessageFill,
  RiPhoneFill,
  RiPhoneFindFill,
  RiPhoneFindLine,
  RiPhoneLine,
  RiRoadMapFill,
  RiTwitchFill,
  RiTwitterFill,
  RiUserLocationFill,
} from "@remixicon/react";

function Footer() {
  return (
    <div className="max-w-screen-lg mx-auto px-[12px] pt-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
        <div className="flex flex-col space-y-3">
          <h1 className="uppercase font-bold text-4xl font-[oswald] ">
            bur<span className="text-yellow-500">ger</span>
          </h1>
          <p className="text-sm opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            eum temporibus sapiente aut perferendis sequi perspiciatis natus
            voluptatum.
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="uppercase text-xl">support</h2>
          <ul className="space-y-2">
            <li>
              <a href="" className="hover:text-yellow-500 text-xs">
                FAQ's
              </a>
            </li>
            <li>
              <a href="" className="hover:text-yellow-500 text-xs">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="hover:text-yellow-500 text-xs">
                Term & Condition
              </a>
            </li>
            <li>
              <a href="" className="hover:text-yellow-500 text-xs">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="uppercase text-xl">Phone</h2>
            <p className="flex flex-row gap-2 text-xs">
              <RiPhoneFill color="#f0b100" />
              <span>+251 985 908 943</span>
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="uppercase text-xl">email</h2>
            <p className="flex flex-row gap-2 text-xs">
              <RiMailLine color="#f0b100" />
              <span>temesgenkindie21@email.com</span>
            </p>
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <h2 className="uppercase text-xl">address</h2>
            <p className="flex flex-row gap-2 text-xs">
              <RiMapPinLine color="#f0b100" />
              <span>address goes here</span>
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="uppercase text-xl">follow us</h2>
            <p className="flex flex-row gap-2 text-xs">
              <RiFacebookFill color="#f0b100" />
              <RiTwitterFill color="#f0b100" />
              <RiInstagramLine color="#f0b100" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
