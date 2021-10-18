import Button from './Button'
import {useLocation} from "react-router-dom"
const Header = ({title, showAdd, onAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/' && <Button title = {showAdd ? 'Close' : 'Add'} 
                    color={showAdd ?'green' :'steelblue'} 
                    onClick={onAdd}/>}
        </header>
    )
}

export default Header
