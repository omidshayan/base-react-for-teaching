import { createContext } from "react";


export const username = createContext()


const userProvider = ({children}) => {
    return(
        <username.Provider value={'my username'}>
            {children}
        </username.Provider>
    )
}

export default userProvider