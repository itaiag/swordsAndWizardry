export default function rollDice(numSides: number, numDice: number = 1): number {
  let total = 0;
  for (let i = 0; i < numDice; i++) {
    total += Math.floor(Math.random() * numSides) + 1;
  }
  console.log(`Rolled ${numDice}d${numSides} and got ${total}`);
  return total;
}