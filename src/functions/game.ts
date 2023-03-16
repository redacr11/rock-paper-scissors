export enum Option {
  Rock,
  Paper,
  Scissors,
}

export type GameResult = {
  result: "win" | "lose" | "tie";
  playerChoice: Option;
  computerChoice: Option;
};

export const playGame = (playerChoice: Option): GameResult => {
  const computerChoice = Math.floor(Math.random() * 3);
  const result =
    (playerChoice === Option.Rock && computerChoice === Option.Scissors) ||
    (playerChoice === Option.Paper && computerChoice === Option.Rock) ||
    (playerChoice === Option.Scissors && computerChoice === Option.Paper)
      ? "win"
      : playerChoice === computerChoice
      ? "tie"
      : "lose";
  return { result, playerChoice, computerChoice };
};
