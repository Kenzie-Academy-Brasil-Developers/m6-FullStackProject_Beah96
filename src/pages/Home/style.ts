import { styled } from "styled-components";

export const StyledHome = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    
    section{
        background-color: var(--color-white);
        width: 25rem;
        height: 31.25rem;
        border-radius: .625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;
        box-shadow: 1px -2px 23px 2px rgba(0,0,0,0.24);
    }

    button{
        font-size: clamp(0.875rem, 0.6785rem + 0.7398vw, 1.25rem);
        font-weight: 400;
    }
    
    p{
        color: var(--color-grey-dark)
    }

    .logo_section>img{
        width: clamp(12.5rem, 9.5238rem + 11.2045vw, 20rem);
        height: clamp(12.5rem, 9.5238rem + 11.2045vw, 20rem);
    }

    .logo{
        display: none;
    }

    @media screen and (max-width: 28.125rem){
        .logo_section{
            display: none;
        }
        section{
            width: 80%;
        }

        .logo{
            display: block;
            width: clamp(9.375rem, -0.1488rem + 47.619vw, 12.5rem);
        }
    }

`