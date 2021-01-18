import React from 'react';

import Question from '../questions/index';
import Answer from '../answers/index';

function Main() {
    return (
        <div>
            <Question />
            <Answer />
            <button>Next</button>
        </div>
    )
}

export default Main;