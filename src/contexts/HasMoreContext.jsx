import { createContext, useState } from "react";

const HasMoreContext = createContext()

export function HasMoreProvider({ children }) {
    const [hasMore, setHasMore] = useState(true)

    return (
        <HasMoreContext.Provider value={{ hasMore, setHasMore }}>
            {children}
        </HasMoreContext.Provider>
    )
}

export default HasMoreContext