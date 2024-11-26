import React from "react";
import { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { MdDarkMode } from "react-icons/md";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CiLight } from "react-icons/ci";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import Logo from "../../assets/Captionblack.png";
import Loo from "../../assets/Captionwhite.png";
import { Link } from "react-router-dom";

const Header = () => {
  const products = [
    {
      name: "Analytics",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: ChartPieIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers",
      href: "#",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Security",
      description: "Your customers’ data will be safe and secure",
      href: "#",
      icon: FingerPrintIcon,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will convert",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];

  {
    /**function for light and dark modes */
  }

  const [dark, setDark] = useState();

  const handleDark = () => {
    setDark(!dark);
  };
  const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //useEffect function
  useEffect(() => {
    if (dark === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
  return (
    <div id=" Header" className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ScoreSheet</span>
            <img alt="" src={dark ? Loo : Logo} className="h-64 w-64" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <a
              href="/match-details"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Fixtures
            </a>
          </Popover>

          <a
            href="/match-scores"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Scores
          </a>
          <a
            href="/about-scoresheet"
            className="text-sm/6 font-semibold text-gray-900"
          >
            About
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 relative"
          >
            <input
              type="text"
              className="w-full pr-10 pl-3 py-2 border rounded-md"
              placeholder="Search..."
            />
            <IoMdSearch className="absolute right-2 top-1/2 -translate-y-1/2" />
          </a>
          {dark ? (
            <MdDarkMode className="m-2 " onClick={handleDark} />
          ) : (
            <CiLight onClick={handleDark} className="m-2 text-xl" />
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={Logo} className="h-32 w-32" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 flex rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <input
                    type="text"
                    className=" border rounded-lg border-blue-900"
                  />
                  <IoMdSearch />
                </a>
                <a
                  href="/match-details"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Fixtures
                </a>
                <a
                  href="/match-scores"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Scores
                </a>
                <a
                  href="/about-scoresheet"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Header;
