// import { RiFacebookFill } from "react-icons/ri";
// import Button from "./Button";
// import Study from "./Study";
// import { CgAnchor } from "react-icons/cg";
// import Clicker from "./counter/Counter";
// import { useState } from "react";


// type CounterValueState = {
//   counter1: number
//   counter2: number
//   counter3: number
//   counter4: number
// }


// export default function App( ) {
//   const [counterValue, setCounterValue] = useState<CounterValueState>({
//     counter1: 0,
//     counter2: 0,
//     counter3: 0,
//     counter4: 0
//  });
        
//     function hudleCounter(key: keyof CounterValueState) {
//        setCounterValue({
//          ...counterValue,
//          [key]: counterValue[key] + 1,
  
//         });
//     }
  
  //    function hudleCounterOne() {
  //      setCounterValue({
  //        ...counterValue,
  //        counter1: counterValue.counter1 + 1,
  
  //       });
  //    }
  
  // function hudleCounterTwo() {
  //      setCounterValue({
  //        ...counterValue,
  //        counter2: counterValue.counter2 + 1,
  
  //       });
  // }
  // function hudleCounterThree() {
  //      setCounterValue({
  //        ...counterValue,
  //        counter3: counterValue.counter3 + 1,
  
  //       });
  // }
  // function hudleCounterFour() {
  //      setCounterValue({
  //        ...counterValue,
  //        counter4: counterValue.counter4 + 1,
  
  //       });
  //    }

  // const totalCounter = counterValue.counter1 + counterValue.counter2 + counterValue.counter3 + counterValue.counter4
  
//   return (
//     <>
            
//       <h4>Counter: {counterValue.counter1 }</h4>
//       <Clicker value={counterValue.counter1} onHundleCounter={() => hudleCounter('counter1')} />

//       <h4>Counter: {counterValue.counter2 }</h4>
//       <Clicker value={counterValue.counter2} onHundleCounter={() => hudleCounter('counter2')} />

//       <h4>Counter: {counterValue.counter3}</h4>
//       <Clicker value={counterValue.counter3} onHundleCounter={() => hudleCounter('counter3')} />

//       <h4>Counter: {counterValue.counter4}</h4>
//       <Clicker value={counterValue.counter4} onHundleCounter={() => hudleCounter('counter4')} />

//       <h2>{ totalCounter}</h2>
//     </>

//   )
// }
