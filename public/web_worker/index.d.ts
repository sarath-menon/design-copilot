/* tslint:disable */
/* eslint-disable */
/**
* Run entry point for the main thread.
*/
export function startup(): void;
/**
* A number evaluation struct
*
* This struct will be the main object which responds to messages passed to the
* worker. It stores the last number which it was passed to have a state. The
* statefulness is not is not required in this example but should show how
* larger, more complex scenarios with statefulness can be set up.
*/
export class NumberEval {
  free(): void;
/**
* Create new instance.
* @returns {NumberEval}
*/
  static new(): NumberEval;
/**
* Check if a number is even and store it as last processed number.
*
* # Arguments
*
* * `number` - The number to be checked for being even/odd.
* @param {number} number
* @returns {boolean}
*/
  is_even(number: number): boolean;
/**
* Get last number that was checked - this method is added to work with
* statefulness.
* @returns {number}
*/
  get_last_number(): number;
}
