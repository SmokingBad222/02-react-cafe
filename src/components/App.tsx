
import { useState } from "react"
import Accordion from "./Accordion/Accordion"

 
const data = [
  {
    label: "Accordion1",
    discription: "Something for Accordion"
  },
  {
    label: "Accordion2",
    discription: "Something for Accordion"
  },
  {
    label: "Accordion3",
    discription: "Something for Accordion"
  },
   {
    label: "Accordion4",
    discription: "Something for Accordion"
  }
] 


export default function App() {
  const [activeAccordion, setAcctiveAccordion] = useState(0)

  const handleAcctiveAccordion = (index: number) => {
    setAcctiveAccordion(index)
  }
  return (
    <div>
      {data.map((el, index) => (
        <Accordion
          key={el.label}
          label={el.label}
          discription={el.discription}
          onAccordionClick={() => handleAcctiveAccordion(index) }
          isOpen={activeAccordion === index }
        />
      ) )}
    </div>
  )
}