import Card from './Card';
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  // the state here will be tied to the state in useCounter but unique to this component
  // the state will be returned from the custom hook, anything can be returned
  const counter = useCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
