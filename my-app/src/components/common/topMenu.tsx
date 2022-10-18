import {FC} from 'react';
import styled from 'styled-components';
import {stackColor} from '../../styledHelpers/colors';


const Wrapper = styled.div` 
 border: 10px solid ${stackColor.black};
 `
 const SecondSpan = styled(SomeSpan)` 
 border: 10px solid yellow;
 `
const ExampleDiv = styled.div<{isActive: boolean}>`
background: yellow;
${props => props.isActive && css`

background: blue;
}`



const NewLink = styled(Link)`
`;

export const Menu: FC = () =>{
    return(
        <Wrapper>
            <SecondSpan>jakis tekst</SecondSpan>
            <ExampleDiv isActive>div</ExampleDiv>
            <ExampleDiv isActive={false}>div</ExampleDiv>
            <link to="posts">Posts</link>
            <Link  to="/">Home</Link>
        </Wrapper>
    )
}