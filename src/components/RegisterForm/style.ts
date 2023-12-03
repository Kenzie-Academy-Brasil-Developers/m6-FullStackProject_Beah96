import { styled } from "styled-components";

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.25rem;
    height: fit-content;
    

    input{
        width: 80%;
    }

    p{
        color: var(--color-grey-dark);
        font-size: .875rem;
    }

`