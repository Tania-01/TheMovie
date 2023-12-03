import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/MovieSlices";

const store=configureStore({
    reducer: {
        movie:movieReducer
    }
})
export {store}