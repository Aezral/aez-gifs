import "./index.css";

import Spinner from "../../components/Spinner";

const Input = ({ endType, startType, ...params }) => {
  let timer;

  const callback = endType || (() => {});
  const callstart = startType || (() => {});

  const startTyping = (e) => {

    callstart(e);

    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(e);
    }, 1000);
  };

  return (
    <input onInput={(e) => startTyping(e.target.value)} {...params} />
  );
};

export default Input;
