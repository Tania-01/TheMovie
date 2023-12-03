import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayaout from "./components/MainLayaout";

import MoviePage from "./pages/MoviePage";
import MovieInfo from "./components/MoviesContainer/MovieInfo/MovieInfo";
import Moviest from "./components/MoviesContainer/MovieInfo/Moviest";




const router= createBrowserRouter([
    {path:'', element:<MainLayaout/>,children:
        
            [
                {index: true,element:<Navigate to={"movie"}/>},
                {path:'movie', element:<Moviest/>},
                {path:'movieInfo/:id',element:<MovieInfo/>}
            ]}
]);


export {router}