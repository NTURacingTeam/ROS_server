import { useState, createContext, useContext, useEffect } from 'react'

const GUIConext = createContext({
    makeSquare: true,
});

const GUIProvider = (props) => {
    const [ makeSquare, setMakeSquare ] = useState(false)
    
    const updateSquare = (ref, setHeight) => {
        try {
            const h = ref.current.offsetWidth;
            setHeight(h);
        } catch (error) { console.log(error)}
    }

    useEffect(() => {
        setMakeSquare( makeSquare ? false : true)
    }, [makeSquare])

    return (
        <GUIConext.Provider
			value={{ makeSquare, updateSquare }}
			{...props}
		/>
    )
}

const useGUI = () => useContext(GUIConext);

export { useGUI, GUIProvider }