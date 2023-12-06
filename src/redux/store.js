import { combineReducers, legacy_createStore } from "redux"

import {cartReducer} from "./cartReducer"

const rootreducer=combineReducers({cartReducer})

export const store=legacy_createStore(rootreducer)