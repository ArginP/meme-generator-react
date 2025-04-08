export default function Meme(props) {
    return (
        <>
            <div className="meme">
                <img alt={"meme"} src={props.imageUrl} />
                <span className="top">{props.topText}</span>
                <span className="bottom">{props.botText}</span>
            </div>
        </>
    )
}