import './dev/utils';
import './dev/users';
import './dev/arrays';
import './dev/destructuring';
import './dev/spreading';
import './dev/dom';
import './dev/functions';

function doSomething(idx) {
    console.log('Doing Some thing ...........................' + idx);
  }
  
  // ✅ Manually expose to global scope
  window.doSomething = doSomething;