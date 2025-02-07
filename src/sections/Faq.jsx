import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from '@/constants';

const Faq = () => {
  return (
    <div>
      <h2 className="text-[32px] font-bold text-center mb-12">FAQ's</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {faq.map((faq, index) => (
          <AccordionItem
            key={`faq-${index}`}
            value={`item-${index}`}
            className="bg-white border rounded-lg mb-4 px-4 shadow-sm"
          >
            <AccordionTrigger className="text-left py-6 no-underline hover:no-underline">
              <span className="text-lg font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
