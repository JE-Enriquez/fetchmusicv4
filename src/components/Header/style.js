import styled from 'styled-components';

const HeadBg = styled.section`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.HeadBg};
    width: 100%;
    height: auto;
    
`;

const HeadAppName = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.colors.FontColor};
    padding: 10px;
    margin-top: 10px;
    text-align: center;
`;

const HeadNav = styled.nav`
    display: flex;
    margin-left: 10px;
    gap: 10px;
    margin-bottom: 10px;
`;

const HeadLi = styled.li`
    cursor: pointer;
    font-size: 20px;
    list-style: none
    
`;

/* const HeadLink = styled.Link`
    text-decoration: none;
    color: ${props => props.theme.colors.FontColor};
`; */


export {
    HeadBg,
    HeadAppName,
    HeadNav,
    HeadLi,
    
};