import logo from '../assets/pokeball.png';

export default function PokeLogo(props) {
    const style = {
        width: `${props.width}px`,
        height: `${props.width}px`,
        position: 'absolute',
        left: `${props.left}%`,
        top: `${props.top}%`
    }

    return (
        <img src={logo} style={style} alt="Pokeball Logo" />
    )
}