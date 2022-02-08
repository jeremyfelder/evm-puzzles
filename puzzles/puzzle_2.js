const { setup } = require("./setup");

const puzzleCode = [
  '36',   // CALLDATASIZE
  '38',   // CODESIZE
  '03',   // SUB
  '56',   // JUMP
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  '5b',   // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: "0x11",
  value: 0
}

setup(puzzleCode, solution)
