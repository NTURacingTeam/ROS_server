import { useState, createContext, useContext, useEffect } from 'react'

const GUIContext = createContext({
    makeSquare: true,
    baseCol: 0,
    updateSquare: () => {},
    handleChangeSelect: () => {},
    setMakeSquare: () => {},
    setBaseCol: () => {},
});

const GUIProvider = (props) => {
    const [ makeSquare, setMakeSquare ] = useState(false)
    const [baseCol, setBaseCol] = useState(8);

    
    const updateSquare = (ref, setHeight) => {
        try {
            const h = ref.current.offsetWidth;
            setHeight(h);
        } catch (error) { console.log(error)}
    }

    const handleChangeSelect = (value) => {
        setMakeSquare(true);
        setBaseCol( 24 / value);
    };


    useEffect(() => {
        setMakeSquare(false)
    }, [makeSquare])

    return (
        <GUIContext.Provider
			value={{ makeSquare, updateSquare, baseCol, handleChangeSelect, setMakeSquare, setBaseCol }}
			{...props}
		/>
    )
}

const useGUI = () => useContext(GUIContext);

export { useGUI, GUIProvider }