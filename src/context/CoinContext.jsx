import { createContext, useState } from 'react';


export const CoinContext = createContext();

const CoinContextProvider = (props)=> {
    const [allCoin,setAllCoin] = useState([]);
    const [currency,setCurrency] = useState({
        name: "usd",
        symbol: "$",
    })

    const fetchAllCoin = async()=>


    const contextValue = {}
    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )

}

export default CoinContextProvider;