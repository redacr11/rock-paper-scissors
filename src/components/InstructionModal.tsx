interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionModal = ({ isOpen, onClose }: ModalProps) => {
  const modalClasses =
    "fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-opacity-50 bg-gray-900 transition-opacity duration-300";
  const contentClasses = "bg-white rounded-lg p-8 max-w-md";

  if (!isOpen) return null;

  return (
    <div className={modalClasses}>
      <div className={contentClasses}>
        <h2 className="text-2xl font-bold mb-4">How to play</h2>
        <p className="mb-4">
          Choose rock, paper or scissors by clicking on the corresponding
          button. The computer will randomly select its option and the winner
          will be determined based on the classic game rules:
          <div className="text-center mt-2">
            <li className="list-none font-semibold">Rock beats Scissors</li>
            <li className="list-none font-semibold">Scissors beat Paper</li>
            <li className="list-none font-semibold">Paper beats Rock</li>
          </div>
        </p>
        <button
          className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default InstructionModal;
