// import { useState } from "react";

interface ClickerProps {
    onHundleCounter: () => void;
    value: number;
}



export default function Clicker({onHundleCounter, value}: ClickerProps) {
    
    return (
            
            <button onClick={onHundleCounter}>{value}</button>
       
    )
}