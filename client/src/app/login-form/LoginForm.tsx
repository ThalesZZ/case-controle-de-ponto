import styled from 'styled-components';
import { TextInput } from "../../components/text-input";

export function LoginForm(): React.ReactElement {
    return (
        <Container>
            <TextInput />
        </Container>
    )
}

const Container = styled.div`
    border: 1px solid red;
    width: 28%;
`