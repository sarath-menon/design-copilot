use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use web_sys::{console, HtmlElement, HtmlInputElement, MessageEvent, Worker};

/// A number evaluation struct
///
/// This struct will be the main object which responds to messages passed to the
/// worker. It stores the last number which it was passed to have a state. The
/// statefulness is not is not required in this example but should show how
/// larger, more complex scenarios with statefulness can be set up.
#[wasm_bindgen]
pub struct NumberEval {
    number: i32,
}

#[wasm_bindgen]
impl NumberEval {
    /// Create new instance.
    pub fn new() -> NumberEval {
        NumberEval { number: 0 }
    }

    /// Check if a number is even and store it as last processed number.
    ///
    /// # Arguments
    ///
    /// * `number` - The number to be checked for being even/odd.
    pub fn is_even(&mut self, number: i32) -> bool {
        self.number = number;
        self.number % 2 == 0
    }

    /// Get last number that was checked - this method is added to work with
    /// statefulness.
    pub fn get_last_number(&self) -> i32 {
        self.number
    }
}
