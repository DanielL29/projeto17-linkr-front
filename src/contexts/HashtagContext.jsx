import { createContext, useState } from "react";

const HashtagContext = createContext()

export function HashtagProvider({ children }) {
    const [hashtags, setHashtags] = useState([])

    return (
        <HashtagContext.Provider value={{ hashtags, setHashtags }}>
            {children}
        </HashtagContext.Provider>
    )
}

export default HashtagContext