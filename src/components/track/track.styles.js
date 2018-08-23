import styled from 'styled-components';
import {green} from '../../assets/constants';

export const TrackCard = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;

    audio{
        background-color: ${green};
        padding: 6px;
        border-radius: 100px;
    }

`;

export const Image = styled.img`
    width:100%;
`;

export const Title = styled.h2`
    font-weight: initial;
    font-size: 20px;
    font-style: italic;
    text-align: center;
`;