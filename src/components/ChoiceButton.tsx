import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandBackFist,
  faHand,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

import { Option } from "../functions/game";

type ChoiceButtonProps = {
  option: Option;
  onClick?: () => void;
  disabled?: boolean;
};

const ChoiceButton = ({ option, onClick, disabled }: ChoiceButtonProps) => {
  switch (option) {
    case 0:
      return (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClick}
          disabled={disabled}
        >
          <FontAwesomeIcon icon={faHandBackFist} />
          <h3>Rock</h3>
        </button>
      );
    case 1:
      return (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClick}
          disabled={disabled}
        >
          <FontAwesomeIcon icon={faHand} />
          <h3>Paper</h3>
        </button>
      );
    case 2:
      return (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClick}
          disabled={disabled}
        >
          <FontAwesomeIcon icon={faHandScissors} />
          <h3>Scissors</h3>
        </button>
      );
  }

  return <></>;
};

export default ChoiceButton;
