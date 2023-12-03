import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root{
        
        --color-black: #000;
        --color-white: #fff;
        --color-grey: #dee2e6;
        --color-grey-dark: #6c757d;
        --lightgray: #EFF0F2;
        --brand-blue-dark: #465AB4;
        --brand-blue: #7C91EB;
        --brand-blue-light: #A7BDEA;
        --enfasis-pink: #F7C0EC;  
        --enfasis-pink-dark: #EAc0ec;
        --animation: colors 15s ease infinite;
    }

    button{
        cursor: pointer;
    }

    body{
        background: linear-gradient(45deg, #A7BDEA, #B4BEEA, #C2BEEB, #CFBFEB, #DCBFEB, #EAC0EC, #F7C0EC);
        font-family: 'Montserrat', sans-serif;
        height: 100vh;
        width: 100%;
        background-size: 300% 300%;
        animation: colors 15s ease infinite;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal_box{
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal{
        background-color: var(--color-white);
        width: 35rem;
        height: fit-content;
        max-height: 31.25rem;
        border-radius: .625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.25rem;
        gap: 1.25rem;
    }
    .modal>form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;
        width: 100%;
    }

    button, input, select, textarea, option{
        font-family: 'Montserrat', sans-serif;
        outline: none;
        border: none;
    }
    
    @keyframes colors {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

