import styled from "styled-components";


const BotonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BotonBtn = styled.button`
    width: auto;
    background-color: ${props => props.theme.colors.btn};
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    color: ${props => props.theme.colors.txt};

    &:hover{
        background-color: ${props => props.theme.colors.HeadBg};
        color: ${props => props.theme.colors.FontColor};
    }
    
`;

export {
    BotonDiv,
    BotonBtn
}