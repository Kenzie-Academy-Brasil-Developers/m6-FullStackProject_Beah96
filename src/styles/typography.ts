import styled, { css } from "styled-components";

interface IStyledTypographyTitle {
  fontWeight: "extrabold" | "bold" | "semibold" | "normal";
}

const HeadlineStyles = css<IStyledTypographyTitle>`
  font-family: "Montserrat", sans-serif;
  color:var(--brand-blue-dark);

  ${({ fontWeight }) => {
    switch (fontWeight) {
      case "extrabold":
        return css`
          font-weight: 700;
        `;
      case "bold":
        return css`
          font-weight: 600;
        `;
      case "semibold":
        return css`
          font-weight: 500;
        `;
      case "normal":
        return css`
          font-weight: 400;
        `;
    }
  }}
`;
interface IStyledTypographyText {
  fontSize: "big" | "medium" | "small";
  fontWeight: "extrabold" | "bold" | "semibold" | "normal";
}

const TextStyles = css<IStyledTypographyText>`
  font-family: "Montserrat", sans-serif;
  ${({ fontSize }) => {
    switch (fontSize) {
      case "big":
        return css`
          font-size: clamp(0.875rem, 0.6785rem + 0.7398vw, 1.25rem);
        `;
      case "medium":
        return css`
          font-size: clamp(0.75rem, 0.619rem + 0.4932vw, 1rem);
        `;

      case "small":
        return css`
          font-size: clamp(0.625rem, 0.494rem + 0.4932vw, 0.875rem);
        `;
    }
  }}

  ${({ fontWeight }) => {
    switch (fontWeight) {
      case "extrabold":
        return css`
          font-weight: 700;
        `;
      case "bold":
        return css`
          font-weight: 600;
        `;
      case "semibold":
        return css`
          font-weight: 500;
        `;
      case "normal":
        return css`
          font-weight: 400;
        `;
    }
  }}
`;
export const StyledH1 = styled.h1<IStyledTypographyTitle>`
  ${HeadlineStyles};
  font-size: clamp(1rem, 0.476rem + 1.9729vw, 2rem);
`;
export const StyledH2 = styled.h2<IStyledTypographyTitle>`
  ${HeadlineStyles}
  font-size: clamp(0.9375rem, 0.5117rem + 1.603vw, 1.75rem);
`;
export const StyledH3 = styled.h3<IStyledTypographyTitle>`
  ${HeadlineStyles}
  font-size: clamp(0.875rem, 0.5475rem + 1.233vw, 1.5rem);
`;
export const StyledP = styled.p<IStyledTypographyText>`
  ${TextStyles}
`;
