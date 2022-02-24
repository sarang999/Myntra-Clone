
import { Route, Routes } from "react-router";

import { MobileNumber } from "../components/Login/mobilenumber";

export const Routing = () => {
    

    return (
        <div>
            <Routes>
                <Route path="/login" element={ <MobileNumber/>}></Route>
          </Routes>
        </div>
    )
}