import React from 'react'
import Container from './Container'
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="space-y-4 ">
            <Logo />
            <SubText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio ex consequatur vitae dolor laboriosam beatae!
            </SubText>
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receieve updates and exclusive
              offer
            </SubText>
            <form className="space-y-3">
              <Input type="email" required placeholder="Enter Your email" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            @ {new Date().getFullYear()} <Logo className="text-sm" />. All right
            reserved
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer