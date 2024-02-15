import React from "react";
import Icon from "./Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-clr-lighter-dark flex justify-center relative px-8 sm:px-12 md:px-32 xl:px-52">
      <div className="absolute bg-clr-accent w-32 h-[4.5px] top-0 left-[calc(50%-4rem)] sm:left-12 md:left-32 xl:left-52"></div>
      <div className="py-16 w-full flex flex-col justify-center items-center sm:items-start gap-12 text-center sm:text-left">
        <div className="flex flex-col justify-center items-center sm:items-start md:flex-row md:justify-between w-full gap-12">
          <Icon
            src={"/assets/shared/desktop/logo.svg"}
            alt={"logo"}
            priority
            className="cursor-pointer"
          />
          <div className="flex flex-col sm:flex-row gap-12 text-clr-light">
            <Link
              href={"/"}
              className="hover:text-clr-lighter-accent font-bold"
            >
              HOME
            </Link>
            <Link
              href={"/headphones"}
              className="hover:text-clr-lighter-accent font-bold"
            >
              HEADPHONES
            </Link>
            <Link
              href={"/speakers"}
              className="hover:text-clr-lighter-accent font-bold"
            >
              SPEAKERS
            </Link>
            <Link
              href={"/earphones"}
              className="hover:text-clr-lighter-accent font-bold"
            >
              EARPHONES
            </Link>
          </div>
        </div>

        <div className="md:flex md:items-end md:justify-between md:w-full">
          <p className="text-clr-grey opacity-50 phones:leading-8 phones:tracking-wider md:w-[500px] font-fw-bold">
            Audiophile is an all in one stop to fulfill your audio needs. We’re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="hidden md:flex gap-4 text-clr-light">
            <Icon
              src="/assets/icon-facebook.svg"
              alt="fb"
              className="cursor-pointer cart-hover"
            />
            <Icon
              src="/assets/icon-twitter.svg"
              alt="tw"
              className="cursor-pointer cart-hover"
            />
            <Icon
              src="/assets/icon-instagram.svg"
              alt="ig"
              className="cursor-pointer cart-hover"
            />
          </div>
        </div>
        <div className="text-clr-light flex flex-col sm:flex-row justify-between sm:w-full items-center gap-12">
          <p className="text-clr-grey opacity-50 font-fw-bold">
            &copy; Copyright 2021. All Rights Reserved
          </p>

          <div className="flex md:hidden gap-4">
            <Icon
              src="/assets/icon-facebook.svg"
              alt="fb"
              className="cursor-pointer cart-hover"
            />
            <Icon
              src="/assets/icon-twitter.svg"
              alt="tw"
              className="cursor-pointer cart-hover"
            />
            <Icon
              src="/assets/icon-instagram.svg"
              alt="ig"
              className="cursor-pointer cart-hover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
