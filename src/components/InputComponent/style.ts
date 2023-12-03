import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    max-width: 31.25rem;
    height: 2rem;
    border:  .125rem solid var(--brand-blue-light);
    border-radius: 3.125rem;
    background-color: var(--lightgrey);
    padding-left: 1.25rem;

    ::placeholder{
        padding-left: 1.25rem;
        font-size: 1.3125rem;
    }

    &:hover{
        border: .125rem solid var(--enfasis-pink-dark);
        transition: .20s;
    }

    &:focus{
        border: .125rem solid var(--enfasis-pink);
        transition: .20s;
    }
`

