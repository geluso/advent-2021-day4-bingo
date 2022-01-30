export default function DrawnNumbers(props) {
    if (props.drawn.length === 0) {
        return <div className="drawn-numbers">None</div>
    }
    return <div className="drawn-numbers">
        {[...props.drawn].join(', ')}
    </div>
}