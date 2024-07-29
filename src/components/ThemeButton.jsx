import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const appStyle = {
        backgroundColor: theme === 'light' ? '#edd5c5' : '#4a403d',
        color: theme === 'light' ? '#000' : '#fff',
    };

    const buttonStyle = {
        backgroundColor: theme === 'light' ? '#4a403d' : '#edd5c5'
    }

    return (
        <div style={appStyle}>
            <button style={buttonStyle} onClick={toggleTheme}>
            {theme === 'light' ? '🌥️' : '☀️'}
            </button>
        <h1>Clique no botão para alternar entre tema claro e escuro!</h1>
        </div>
    )
}

export default ThemeButton