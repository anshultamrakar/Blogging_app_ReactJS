import { createContext } from "react";
import { format } from 'date-fns'


const DataContext = createContext({})

 export const DataProvider = ({children}) => {

   


     return(
         <DataContext.Provider value = {{
            
         }}>
             {children}

         </DataContext.Provider>
     ) 
 }