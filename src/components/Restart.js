export default function Restart(props) {

    return(
        <div className="restart-container">
            <h2>{props.endText}</h2>
            <button type="button" onClick={props.restartGame}>Restart?</button>
        </div>
    )
}