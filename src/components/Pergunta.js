import { useState } from "react";
import styled from "styled-components";
import play from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"

export default function Pergunta(props) {
    let [state, setState] = useState(0);

    if (state === 2 && props.respondida) {
        return(
            <PerguntaFechada>
                <p>Pergunta {props.index + 1}</p>
                <img src={props.resposta} alt="resposta" />
            </PerguntaFechada>
        )
    }
    else if (state === 0) {
        return (
            <PerguntaFechada>
                <p>Pergunta {props.index + 1}</p>
                <img onClick={() => { props.iniciarQ(props.iniciadas, props.setIniciadas, props.index, state, setState) }} src={play} alt="seta" />
            </PerguntaFechada>
        )
    }
    else if (state === 1) {
        return (
            <PerguntaAberta>
                <p>{props.card.Q}</p>
                <img onClick={() => { props.iniciarQ(props.iniciadas, props.setIniciadas, props.index, state, setState) }} src={virar} alt="" />
            </PerguntaAberta>
        )
    }

    else {
        return (
            <PerguntaAberta>
                <p>{props.card.R}</p>
            </PerguntaAberta>
        )
    }


}

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;


const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`;