import styled from 'styled-components';


export const Pagemain = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: center;
    height: 800px;
    position: 0 30px;
    z-index: 1

    /* Add :before styles*/

`;

export const PageBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    wight: 100%
    height: 100%
    overflow: hidden;
`;

export const VideoBg = styled.video`
    widht: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const TextContent = styled.div` 
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-itmes: center;
    margin-top: -190px;
`;

export const TextH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;