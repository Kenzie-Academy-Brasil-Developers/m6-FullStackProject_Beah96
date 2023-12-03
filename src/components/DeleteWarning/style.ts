import { styled } from 'styled-components'

export const StyledDeleteWarning = styled.div`

    span{
        width: 100%;
        max-width: 31.25rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .delete{
        height: 2.8125rem;
        border: transparent;
        border-radius: 1.4375rem;
        background-color: var(--color-grey-dark);
        color:var(--color-white);
        padding: .625rem 3.125rem;

        &:hover {
            background-color: red;
        }
    }

`
