import styled from "styled-components";

const LibraryContainer = styled.section`
    display: flex;
    flex-direction: colums;
    padding: 15px;
    margin-top: 10px;
`;

const LibraryTitle = styled.h1`
    color: ${props => props.theme.colors.txt};
    text-align: center;
    font-size: 30px;
    margin-top: 20px;

`;

const LibraryVacio = styled.p`
    margin-top: 20px;
    color: red;
    font-size: 16px;
`;

const LibraryTrack = styled.section`
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;

`;

const LibraryCard = styled.article`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.colors.txt};
    gap: 10px;
    width: 100%;
    margin: 10px;
`;

const LibraryH2 = styled.h2`
    font-size: 24px;
    padding: 10px;

`;

const LibraryId = styled.p`
    font-size: 20px;
    padding: 0 0 10px 10px;
`;

const BorrarContent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`;

const BorrarBoton = styled.button`
    background-color: #ff4d4d;
    color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-weight: 900;
    
    `;

const BorrarTodo = styled.button`
    background-color: ${props => props.theme.colors.btn};
    color: #fff;
    border-radius: 5px;
    width: 200px;
    font-weight: 600;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 16px;
`;

export {
    LibraryContainer,
    LibraryTitle,
    LibraryVacio,
    LibraryTrack,
    LibraryCard,
    LibraryH2,
    LibraryId,
    BorrarContent,
    BorrarBoton,
    BorrarTodo,
};