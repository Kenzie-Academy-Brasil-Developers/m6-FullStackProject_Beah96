import { styled } from "styled-components";

export const StyledLogin = styled.main`
    background-color: var(--color-white);
    width: 35rem;
    height: 31.25rem;
    border-radius: .625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    box-shadow: .0625rem -0.125rem 1.4375rem .125rem rgba(0,0,0,0.24);

    .buttons{
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 1.5625rem;
        margin-top: .625rem;
    }

    .login>h3{
        margin-bottom: .9375rem;
    }
    .buttons>span, .login{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    div{
        width: 100%;
    }
     
    img{
        width: 60%;
        margin-left: .625rem;
    }

    @media screen and (max-width: 49.75rem){
        width: clamp(18.75rem, 7.8256rem + 54.6218vw, 35rem);   
    }
`