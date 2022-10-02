import styled from "styled-components";
import Logo from "../assets/img/logo.png"
import deck from "../decks";
import Pergunta from "./Pergunta";
import Footer from "./Footer";
import { useState } from "react";

const Answers = [
    "../assets/img/icone_erro.png",
    "../assets/img/icone_quase.png",
    "../assets/img/icone_certo.png"
]

export default function TelaPerguntas() {
    let [iniciadas,setIniciadas] = useState([]);
    let [concluidas,setConcluidas] = useState([]);
    let [respostas,setRespostas] = useState([]);
    return (
        <ScreenContainer>
            <LogoContainer>
                <img src={Logo} alt="Logo"/>
                <h1>ZapRecall</h1>
            </LogoContainer>
            {
                deck.map((card,index)=>{
                    if(concluidas.includes(index)){
                        return <Pergunta iniciarQ={iniciarQ} iniciadas={iniciadas} setIniciadas={setIniciadas}  card={card} index={index} resposta={respostas[concluidas.indexOf(index)]} respondida={true}/>
                    }
                    else{
                        return <Pergunta iniciarQ={iniciarQ} iniciadas={iniciadas} setIniciadas={setIniciadas}  card={card} index={index}/>
                    }
                })
            }
            <Footer resposta={resposta} iniciadas={iniciadas} setIniciadas={setIniciadas} concluidas={concluidas} setConcluidas={setConcluidas} respostas={respostas} setRespostas={setRespostas}/>
        </ScreenContainer>
    )
}

function resposta(iniciadas,setIniciadas,concluidas,setConcluidas,respostas,setRespostas,res){
    if(iniciadas.length===0){
        return;
    }
    else{
        let nova = [...iniciadas];
        let a = nova.pop();
        setIniciadas(nova);

        let novaConc = [...concluidas,a];
        setConcluidas(novaConc);

        let resposta = [...respostas,Answers[res]];
        setRespostas(resposta);
    }
}

function iniciarQ(iniciadas,setIniciadas,index,state,setState){
    if(state===0){
        setState(1);
    }
    if(state===1){
        let nova = [...iniciadas,index]
        setIniciadas(nova);
        setState(2)
    }
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`; 

const LogoContainer = styled.div`

    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;


    img{
        width: 52px;
    }

    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
      }
`;