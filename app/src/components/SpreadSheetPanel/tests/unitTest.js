import { keyInputTest } from '../handlers/keyboardEvents/test.js';

import { batchTurn , nextTurn, concludeTestingBatch } from './../../../tests/sequenceHelpers.js'

const t = {
    KEYINPUT: 'KEYINPUT'
};

function unitTest(testsToRun) {
    if (testsToRun.size == 0) {
        nextTurn(batchTurn);
        return;
    }
    let atomicTurn = {
        current: 1,
        nextAvailable: 1
    };
    for (const test of testsToRun.values()) {
        switch (test) {
            case t.KEYINPUT:
                keyInputTest(atomicTurn);
                break;
            default: break;
        }
    }
    concludeTestingBatch(atomicTurn, batchTurn);
}

export default unitTest;