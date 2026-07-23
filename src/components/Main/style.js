import styled from 'styled-components';


const MainContainer = styled.section`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    width: 50%;

`;

const MianResults = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 5px;

`;

const MainCards = styled.article`
    /* width: 50%; */
    border: ${props => props.theme.colors.HeadBg} solid 2px;
    /* border-top: ${props => props.theme.colors.HeadBg} solid 2px; */
    /* border-bottom: ${props => props.theme.colors.HeadBg} solid 2px; */
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
`;

const MainCardTitle = styled.h1`
    text-align: center;
    padding: 5px;
    font-size: 24px;
`;

const MainCardTitle2 = styled.h2`
    text-align: center;
    padding: 5px;
    font-size: 24px;
`;

const MainPLoading = styled.p`
    color: ${props => props.theme.colors.txt};
    margin-left: 10px;
`;

const MainPError = styled.p`
    color: red;
    margin-left: 10px;
`;

const Card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    gap: 5px;
`;

const CardAlbum = styled.h2`
    color: ${props => props.theme.colors.txt};
    font-size: 20px;
    width: 50%;
    /* align-self: baseline; */
`;

const CardP =styled.p`
    font-size:18px;
`;

const CardImg = styled.img`
    width: 50%;
`;

const CardTrack = styled.article`
    display: flex;
    flex-direction: column;
    gap: 5px;

`;

const TrackP = styled.p`
    font-size: 16px;
`;

const FontStrong = styled.strong`
    font-weight: bold;
`;

const TrackBoton = styled.button`
    width: 100px;
    align-self: flex-end;
`;


export {
    MainContainer,
    MianResults,
    MainCards,
    MainCardTitle,
    MainCardTitle2,
    MainPLoading,
    MainPError,
    Card,
    CardAlbum,
    CardP,
    CardImg,
    CardTrack,
    TrackP,
    FontStrong,
    TrackBoton,
    

};