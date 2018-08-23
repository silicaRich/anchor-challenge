import styled from 'styled-components';

export const PlayerContainer = styled.div`
    display: flex;
    align-items: center;    
    width: 700px;
    justify-content: space-between;
`;
export const Prev = styled.img`
    width:100px;
    height:100px;
    transition: transform .2s; 
    &:hover{
        transform: scale(1.5); 
        cursor: pointer;
    }
`;
export const Next = styled.img`
    width:100px;
    height:100px;
    transition: transform .2s; 
    &:hover{
        transform: scale(1.5); 
        cursor: pointer;
    }
`;
