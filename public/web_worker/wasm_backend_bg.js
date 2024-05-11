let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const NumberEvalFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_numbereval_free(ptr >>> 0));
/**
* A number evaluation struct
*
* This struct will be the main object which responds to messages passed to the
* worker. It stores the last number which it was passed to have a state. The
* statefulness is not is not required in this example but should show how
* larger, more complex scenarios with statefulness can be set up.
*/
export class NumberEval {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(NumberEval.prototype);
        obj.__wbg_ptr = ptr;
        NumberEvalFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        NumberEvalFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_numbereval_free(ptr);
    }
    /**
    * Create new instance.
    * @returns {NumberEval}
    */
    static new() {
        const ret = wasm.numbereval_new();
        return NumberEval.__wrap(ret);
    }
    /**
    * Check if a number is even and store it as last processed number.
    *
    * # Arguments
    *
    * * `number` - The number to be checked for being even/odd.
    * @param {number} number
    * @returns {boolean}
    */
    is_even(number) {
        const ret = wasm.numbereval_is_even(this.__wbg_ptr, number);
        return ret !== 0;
    }
    /**
    * Get last number that was checked - this method is added to work with
    * statefulness.
    * @returns {number}
    */
    get_last_number() {
        const ret = wasm.numbereval_get_last_number(this.__wbg_ptr);
        return ret;
    }
}

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

