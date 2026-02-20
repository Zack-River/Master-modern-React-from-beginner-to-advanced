import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion({faqs}) {
  const [curOpen, setCurOpen] = useState(null);
  return <div className="accordion">
    {faqs.map((data, index) => (
      <AccordionItem curOpen={curOpen} onOpen={setCurOpen} key={data.title} num={index} title={data.title}>
        {data.text}
      </AccordionItem>
    ))}
  </div>;
}
