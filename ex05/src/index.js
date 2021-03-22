function myObject(){
    'use strict';
    const MATH_CONST = {
        E: 2.71828
    };
    Object.freeze(MATH_CONST);
    try {
        MATH_CONST.E = 23;
    } catch(eror){
        console.log(eror.message);

    }
    return MATH_CONST.E;
}
const E = myObject();
module.exports = myObject;