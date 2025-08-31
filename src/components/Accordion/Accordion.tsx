// import { useState } from "react"

interface AccordingDataProps {
    label: string,
    discription: string,
    isOpen: boolean,
    onAccordionClick: ()=>void
}

export default function Accordion({ label, discription, isOpen, onAccordionClick }: AccordingDataProps) {
    
    
    return (
        <>
            <button onClick={onAccordionClick}>Open details { label}</button>
            {isOpen && <p>discription {discription}</p>}
        </>
    )
}


// const [isOpen, setIsOpen] = useState(false)

//     const hundleClick = () => {
//         setIsOpen(!isOpen);
//     }