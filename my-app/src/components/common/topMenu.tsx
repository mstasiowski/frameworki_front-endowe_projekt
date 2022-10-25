import {FC} from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { SomeSpan } from './Components'

import {colorStack} from '../../style/colorStack';


const Wrapper = styled.div` 
 border: 10px solid ${colorStack.black};
 `
 const SecondSpan = styled(SomeSpan)` 
 border: 10px solid yellow;
 `
 const ExampleDiv = styled.div<{isActive: boolean}>`
 backgroud:yellow;
 ${props=>props.isActive && css`
 background:blue;
 `}
 `;


const NewLink = styled(Link)`
`;

export const TopMenu: FC = () =>{
    return(
        <Wrapper>
            <SecondSpan>jakis tekst</SecondSpan>
            <ExampleDiv isActive>div</ExampleDiv>
            <ExampleDiv isActive={false}>div</ExampleDiv>
            <Link to="posts">Posts</Link>
            <Link  to="/">Home</Link>
        </Wrapper>
    )
}