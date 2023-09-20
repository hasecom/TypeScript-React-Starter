import {useState} from 'react';

const UseFieldEvent = ():[
  number,
  ()=>void
] => {
  const [useFieldEvent,setUseFieldEvent] = useState<number>(0);
  const handleFieldEvent = () => {
    setUseFieldEvent(useFieldEvent + 1);
  }
  return [useFieldEvent,handleFieldEvent];
}
export default UseFieldEvent;