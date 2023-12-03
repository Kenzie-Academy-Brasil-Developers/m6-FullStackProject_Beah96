import { styled } from "styled-components";

export const StyledContactCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.125rem;
    width: 30%;
    min-width: 6.25rem;
    border: .125rem solid var(--color-grey);
    border-radius: .625rem;
    padding: .625rem;


    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    span{
        display: flex;
        flex-direction: column;

    }

    img, #profile-icon{
        width: clamp(2.5rem, 1.9898rem + 2.551vw, 4.375rem);
        height: clamp(2.5rem, 1.9898rem + 2.551vw, 4.375rem);
        border-radius: 50%;
    }

    .profile{
        justify-content: start;
        gap: 1.25rem;
    }

    .profile>p{
        color: var(--brand-blue-dark)
    }

    button{
        background-color: transparent;
        border: 1px solid var(--color-grey);
        margin-top: 10px;
        padding: 5px;
        border-radius: 5px;
        &:hover{
        box-shadow: 0.25px -0.5px 6px 0.25px rgba(0,0,0,0.24);
        }
    }
    .info{
        align-items: center;
        justify-content: space-evenly;
        gap: 1.25rem;
    }
    
`