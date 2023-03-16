import { useState } from "react";

import { GameResult, Option, playGame } from "./functions/game";
import ChoiceButton from "./components/ChoiceButton";
import InstructionModal from "./components/InstructionModal";

function App() {
  const [playerChoice, setPlayerChoice] = useState<Option | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  const handleOptionClick = (option: Option) => {
    const result = playGame(option);
    setPlayerChoice(option);
    setGameResult(result);
    if (result.result === "win") {
      setPlayerScore(playerScore + 1);
    } else if (result.result === "lose") {
      setComputerScore(computerScore + 1);
    }
  };

  const closeModal = () => {
    setShowInstructions(false);
  };

  const resetScores = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice(null);
    setGameResult(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="flex justify-between w-64 mb-8">
        <div className="text-2xl font-bold mb-8">You: {playerScore}</div>
        <div className="text-2xl font-bold mb-8">Computer: {computerScore}</div>
      </div>
      <h1 className="text-4xl font-bold mb-8">
        PlayMakers - Rock Paper Scissors
      </h1>

      <div className="flex flex-row space-x-4 > * + *">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
          onClick={() => setShowInstructions(true)}
        >
          How to Play
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-8"
          onClick={resetScores}
        >
          Reset scores
        </button>
      </div>
      <div className="flex justify-between w-64 mb-8 gap-4">
        <ChoiceButton
          option={Option.Rock}
          onClick={() => handleOptionClick(Option.Rock)}
        />
        <ChoiceButton
          option={Option.Paper}
          onClick={() => handleOptionClick(Option.Paper)}
        />
        <ChoiceButton
          option={Option.Scissors}
          onClick={() => handleOptionClick(Option.Scissors)}
        />
      </div>

      {/* Add instructions modal */}
      {showInstructions && (
        <InstructionModal isOpen={showInstructions} onClose={closeModal} />
      )}

      {playerChoice !== null && (
        <div className="flex items-center mb-8">
          <span className="mr-2 font-bold">You:</span>
          <ChoiceButton option={playerChoice} disabled />
        </div>
      )}
      {gameResult && (
        <div className="flex items-center mb-8">
          <span className="mr-2 font-bold">Computer:</span>
          <ChoiceButton option={gameResult.computerChoice} disabled />
        </div>
      )}
      {gameResult && (
        <div className="text-2xl font-bold mb-8">
          {gameResult.result === "win" && "You Win!"}
          {gameResult.result === "lose" && "You Lose!"}
          {gameResult.result === "tie" && "Tie!"}
        </div>
      )}
    </div>
  );
}

export default App;
