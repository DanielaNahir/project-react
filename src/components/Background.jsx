import "./Background.css"
import cloud from "../assets/background/cloud.png"

function Background() {
    return (
        <section>

            <img src={cloud} alt="cloud back" className="cloud" />
            <div className="fila">
                <h1>Bienvenido</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque cupiditate aperiam vero corporis, ab,
                    ipsam eligendi, hic aspernatur veritatis tenetur eius rerum dolorum non est alias exercitationem
                    praesentium. Modi, consequuntur?</p>
            </div>

        </section>
    );
}

export default Background;