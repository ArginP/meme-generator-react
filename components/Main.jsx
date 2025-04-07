import { useState } from "react";
import Meme from "./Meme.jsx";

export default function Main() {
    const [meme, setMeme] = useState(
        {
            imageUrl: "http://i.imgflip.com/1bij.jpg",
            topText: "One does not simply",
            botText: "Walk into Mordor",
        }
    );

    function handleChange(event) {
        const { name, value } = event.currentTarget;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="botText"
                        onChange={handleChange}
                        value={meme.botText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>

            <Meme
                imageUrl={meme.imageUrl}
                topText={meme.topText}
                botText={meme.botText}
            />
        </main>
    )
}