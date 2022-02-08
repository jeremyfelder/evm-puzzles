const { setup } = require("./setup");

const puzzleCode = [
  '36',   // CALLDATASIZE
  '56',   // JUMP
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  '5b',   // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: "0x1122334455667788",
  value: 0
}

setup(puzzleCode, solution)
