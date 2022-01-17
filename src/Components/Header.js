import { StyledHeader,Nav,Logo,Image} from './Styles/Header.styled'
import { Container } from './Styles/Container.styled'
import { Flex } from './Styles/Flex.styled'
import { Button } from './Styles/Button.styled'

export default function Header() {
    return (
        <StyledHeader bg='pink'>
            <Container >
            <Nav>
                 <Logo src = "./bubble/logo.svg" alt = '' /> 
                 <Button>Try for free</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>Build the community your fans will Love</h1>
                    <p>
                            React is a fantastic
                             JavaScript library for building rich user interfaces. It provides a great component abstraction for organizing your interfaces into well-functioning code, but what about the look and feel of the app? 
                            There are various ways of styling
                    </p>
                    <Button bg = ''>
                        Get started for free
                    </Button>
                </div>
                <Image src = "./bubble/illustration-mockups.svg" alt = ''/>
            </Flex>
            </Container>
        </StyledHeader>
    )
}
