import { styled } from "styled-components";

export const StyledEditClient = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.25rem;

    form{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
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


    span{
        width: 100%;
        max-width: 31.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`