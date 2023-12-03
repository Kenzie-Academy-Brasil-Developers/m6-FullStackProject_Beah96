import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 2.8125rem;
  border: transparent;
  border-radius: 1.4375rem;
  background-color: var(--brand-blue);
  color:var(--color-white);
  padding: .625rem 3.125rem;

  &:hover {
    background-color: var(--brand-blue-dark);
    border: 2px solid var(--brand-blue-dark);
  }
`;

export const MenuButton = styled.button`
  height: 2.8125rem;
  border: transparent;
  background-image: linear-gradient(295deg, rgba(247,192,236,1) 0%, rgba(167,189,234,1) 100%);
  color: var(--color-white);
  max-width: 200px;
  width: 20%;
  min-width: 140px;
  background-size: 300% 300%;
  animation: var(--animation);
  border-radius: 1.4375rem;
  font-weight: 600;
  text-align: center;

  &:hover {
    border: 2px solid;
    font-weight: 700;
  }
`
