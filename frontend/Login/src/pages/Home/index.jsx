import amazim from "../../assets/amazim.png";
import '../Home/style.css'

function Home() {
    return (

        <div className="Tela-inicio">
            <h1>Tela inicial Amazonas</h1>
            <input type="Buscar" />
            <button>Buscar</button>

            <div className="logo">
                <img src={amazim} alt="" />
            </div>
            <div className="Tela-principal">
                <button>Pagina inicial</button>
            </div>
            <div class="menu">
                <span class="menu-trigger"></span>
                <ul class="menu-menu">
                    <li>usuario1</li>
                    <li>usuario2</li>
                    <li>usuario3</li>
                </ul>
                
            </div>
        </div>





    )

}

export default Home;

