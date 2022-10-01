import styled from "styled-components";

export default function Footer(props){
    return(
        <FooterConcluidos>
            <ContainerBotoes>
                <Button cor = "#FF3030">Não lembrei</Button>
                <Button cor = "#FF922E">Quase não lembrei</Button>
                <Button cor = "#2FBE34">Zap!</Button>
            </ContainerBotoes>
            <p>0/8 Concluidos</p>
        </FooterConcluidos>
    )
}

const Button = styled.button`
    background : ${props => props.cor};
    border: 0;
`

const ContainerBotoes = styled.div`
    > button{
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        padding:5px;
    }
`;

const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;

    > ${ContainerBotoes}{
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 20px;
    }
`;

