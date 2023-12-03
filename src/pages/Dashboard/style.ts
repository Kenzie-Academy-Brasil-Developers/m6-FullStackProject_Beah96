import { styled } from "styled-components";

export const StyledDashboard = styled.main`
    width: 100vw;
    height: 100vh;
    margin-top: 1.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1.875rem;

    section, header{
        width: 80%;
        max-width: 62.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background-color: var(--color-white);
        padding: 1.875rem;
        border-radius: .9375rem;
        box-shadow: .0625rem -0.125rem 1.4375rem .125rem rgba(0,0,0,0.24);
    }

    .buttons{
        flex-wrap: wrap;
        gap: 1.25rem;
    }

    .contacts{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 1.25rem;
        align-items: center;
        justify-content: center;
    }
`
export const StyledHeader = styled.header`

    img, #profile-icon{
        width: clamp(3.125rem, 2.4447rem + 3.4014vw, 5.625rem);
        height: clamp(3.125rem, 2.4447rem + 3.4014vw, 5.625rem);
    }

    #profile{
        border-radius: 50%;
    }

    h2{
        text-align: center;
    }
`