import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { BiPlus } from "react-icons/bi";

const Faq = () => {
  return (
    <section className="py-[50px] w-full bg-black text-white">
      <div className="container">
        <h1 className="capitalize text-4xl">how to buy</h1>
        <Accordion className="flex flex-col gap-5 mt-14">
          <AccordionItem className=" bg-primary rounded-md ring ring-primary py-6 px-4">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center">
                <h2 className="text-3xl capitalize">step 1</h2>
                <BiPlus className="text-4xl" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mt-8">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className=" bg-primary rounded-md ring ring-primary py-6 px-4">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center">
                <h2 className="text-3xl capitalize">step 2</h2>
                <BiPlus className="text-4xl" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mt-8">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className=" bg-primary rounded-md ring ring-primary py-6 px-4">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center">
                <h2 className="text-3xl capitalize">step 3</h2>
                <BiPlus className="text-4xl" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mt-8">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className=" bg-primary rounded-md ring ring-primary py-6 px-4">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center">
                <h2 className="text-3xl capitalize">step 4</h2>
                <BiPlus className="text-4xl" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mt-8">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
