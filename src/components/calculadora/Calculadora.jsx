import { useState } from "react";
import "./calculadora.scss"

export default function Calculadora() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [pescoco, setPescoco] = useState("");
    const [quadril, setQuadril] = useState("");
    const [cintura, setCintura] = useState("");
    const [massaMagra, setMassaMagra] = useState("")

    const [bf, setBf] = useState(null);

    function calculaBF() {
        let bf = (Number(495) / (Number(1.29579) - (Math.log10(Number(cintura) + Number(quadril) - Number(pescoco)) * Number(0.35004)) + Math.log10(altura) * Number(0.221)) - Number(450)).toFixed(2);
        setBf(bf);
/*
        setAltura("");
        setPeso("");
        setPescoco("");
        setQuadril("");
        setCintura("");*/
    }

    function calculaMM() {
        let mg = (Number(peso) - Number(peso) * Number(bf) / Number(100)).toFixed(1);
        setMassaMagra(mg);
    }

    return (
        <div className="container">
            <form>
                <h1>Calcule sua taxa metabólica basal</h1>
                <div>
                    <label>Altura</label>
                    <input value={altura} onChange={(e) => setAltura(e.target.value)} />
                </div>
                <div>
                    <label>Peso</label>
                    <input value={peso} onChange={(e) => setPeso(e.target.value)} />
                </div>
                <div>
                    <label>Cintura</label>
                    <input value={cintura} onChange={(e) => setCintura(e.target.value)} />
                </div>
                <div>
                    <label>Pescoço</label>
                    <input value={pescoco} onChange={(e) => setPescoco(e.target.value)} />
                </div>
                <div>
                    <label>Quadril</label>
                    <input value={quadril} onChange={(e) => setQuadril(e.target.value)} />
                </div>
                <div className="botao">
                    <button type="button" onClick={calculaBF}>Calcular BF</button>
                </div>
                {bf && (
                    <div>
                        <label>BF</label>
                        <input value={bf} onChange={(e) => setBf(e.target.value)} />
                    </div>
                )}
                <div className="botao">
                    <button type="button" onClick={calculaMM}>Calcular Massa Magra</button>
                </div>
                {massaMagra && (
                    <div>
                        <label>Massa Magra</label>
                        <input value={massaMagra} onChange={(e) => setMassaMagra(e.target.value)} />
                    </div>
                )}
            </form>
        </div>
    )
}
