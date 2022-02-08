const { setup } = require("./setup");

const puzzleCode = [
  '36',         // CALLDATASIZE
  '15',         // ISZERO
  '6055',       // PUSH1 55
  '57',         // JUMPI
  '36',         // CALLDATASIZE
  '6000',       // PUSH1 00 
  '80',         // DUP1
  '37',         // CALLDATACOPY
  '36',         // CALLDATASIZE
  '6000',       // PUSH1 00
  '36',         // CALLDATASIZE
  '34',         // CALLVALUE
  '81',         // DUP2
  '52',         // MSTORE
  '601b',       // PUSH1 1b
  '81',         // DUP2
  '6020',       // PUSH1 20
  '01',         // ADD
  '52',         // MSTORE
  '6044',       // PUSH1 44
  '56',         // JUMP
  '5B',         // JUMPDEST
  '90',         // SWAP1
  '50',         // POP
  '80',         // DUP1
  '34',         // CALLVALUE
  '03',         // SUB
  '81',         // DUP2
  '36',         // CALLDATASIZE
  '52',         // MSTORE
  '602e',       // PUSH1 2e
  '36',         // CALLDATASIZE
  '6020',       // PUSH1 20
  '01',         // ADD
  '52',         // MSTORE
  '6044',       // PUSH1 44
  '56',         // JUMP
  '5B',         // JUMPDEST
  '01',         // ADD
  '92',         // SWAP3
  '91',         // SWAP2
  '90',         // SWAP1
  'f0',         // CREATE
  '6000',       // PUSH1 00
  '80',         // DUP1
  '80',         // DUP1
  '80',         // DUP1
  '80',         // DUP1
  '94',         // SWAP5
  '5A',         // GAS
  'F1',         // CALL
  '50',         // POP
  '47',         // SELFBALANCE
  '14',         // EQ
  '6055',       // PUSH1 55
  '57',         // JUMPI
  'FD',         // REVERT
  '5B',         // JUMPDEST
  '6005',       // PUSH1 05
  '36',         // CALLDATASIZE
  '51',         // MLOAD
  '81',         // DUP2
  '81',         // DUP2
  '06',         // MOD
  '90',         // SWAP1
  '03',         // SUB
  '04',         // DIV
  '36',         // CALLDATASIZE
  '6020',       // PUSH1 20
  '01',         // ADD
  '51',         // MLOAD 
  '56',         // JUMP
  '5B',         // JUMPDEST
  '00',         // STOP
].join('')

// Enter your solution here
const solution = {
  data: "0x",
  value: 0
}

setup(puzzleCode, solution)

/***********************************************************************
 ***********************************************************************
 ********                                                       ********
 ********       IF YOU WANT HINTS BASE64 DECODE THE BELOW       ********
 ********                                                       ********
 ***********************************************************************
 ***********************************************************************
*/

// HINT #1
// TG9vayBmb3IgYSBmdW5jdGlvbiAoYWthIEpVTVBzIHRvIHRoZSBzYW1lIGxvY2F0aW9uKSBpbiB0aGUgaW5zdHJ1Y3Rpb25zIGFib3Zl

// HINT #2
// VGhlcmUgaXMgYSBDUkVBVEUgb3Bjb2RlIGluIHRoZSBpbnN0cnVjdGlvbnMgYWJvdmUuIE1heWJlIHlvdSBuZWVkIHRvIHN1cHBseSBhIGNvbnRyYWN0J3MgYnl0ZWNvZGU/

// HINT #3 --> Solution
// cHJhZ21hIHNvbGlkaXR5IDAuOC4xMDsKCmNvbnRyYWN0IEZsb29yMjBQZXJjZW50IHsKICAgIGNvbnN0cnVjdG9yKCkgcGF5YWJsZSB7fQoKICAgIGZhbGxiYWNrICgpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIHVpbnQyNTYgYmFsYW5jZSA9IGFkZHJlc3ModGhpcykuYmFsYW5jZTsKICAgICAgICB1aW50MjU2IHZhbCA9ICgoYmFsYW5jZS0oYmFsYW5jZSAlIDUpKS81KTsKICAgICAgICAoYm9vbCBzdWNjZXNzLCApID0gbXNnLnNlbmRlci5jYWxse3ZhbHVlOiB2YWx9KCIiKTsKICAgIH0KfQ==
