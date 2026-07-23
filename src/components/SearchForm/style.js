import styled from "styled-components";


const SearchFormBuscar = styled.form`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const SearchInput = styled.input`
    width: 250px;
    border-radius: 5px;
    font-size: 20px;
`;

const SearchBoton = styled.button`
    background-color: ${props => props.theme.colors.btn};
    color: ${props => props.theme.colors.txt};
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: ${props => props.theme.colors.HeadBg};
        color: ${props => props.theme.colors.FontColor};
    }
`;

export {
    
    SearchFormBuscar,
    SearchInput,
    SearchBoton,

}