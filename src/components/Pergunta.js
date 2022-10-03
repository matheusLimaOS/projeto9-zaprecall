import { useState } from "react";
import styled from "styled-components";
import play from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
import certo from "../assets/img/icone_certo.png"
import quase from "../assets/img/icone_quase.png"
import erro from "../assets/img/icone_erro.png"

let ans = [
    {
        image:certo,
        color:"#2FBE34"
    },
    {
        image:quase,
        color:"#FF922E"
    },
    {
        image:erro,
        color:"#FF3030"
    }];

export default function Pergunta(props) {
    let [state, setState] = useState(0);

    if (state === 2 && props.respondida) {
        return(
            <PerguntaFechada data-identifier="flashcard" cor={ans[props.resposta].color} linha={true}>
                <p>Pergunta {props.index + 1}</p>
                <img data-identifier="flashcard-status" src={ans[props.resposta].image} alt="resposta" />
            </PerguntaFechada>
        )
    }
    else if (state === 0) {
        return (
            <PerguntaFechada data-identifier="flashcard" cor="#333333" linha={false}>
                <p>Pergunta {props.index + 1}</p>
                <img data-identifier="flashcard-show-btn" onClick={() => { props.iniciarQ(props.iniciadas, props.setIniciadas, props.index, state, setState) }} src={play} alt="seta" />
            </PerguntaFechada>
        )
    }
    else if (state === 1) {
        return (
            <PerguntaAberta data-identifier="flashcard-index-item">
                <p  data-identifier="flashcard-question" >{props.card.Q}</p>
                <img data-identifier="flashcard-turn-btn" onClick={() => { props.iniciarQ(props.iniciadas, props.setIniciadas, props.index, state, setState) }} src={virar} alt="" />
            </PerguntaAberta>
        )
    }

    else {
        return (
            <PerguntaAberta data-identifier="flashcard-index-item">
                <p data-identifier="flashcard-answer">{props.card.R }</p>
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
        color: ${props=>props.cor};
        text-decoration-line: ${props=>props.linha ? "line-through":""};
    }
`;
