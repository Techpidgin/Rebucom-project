import styled from 'styled-components';
import { media } from 'utils/media';

const ButtonGroupTwo = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-right: 2rem;
    background-color: #101828;
    border-radius: 10px;
    border: none;
    text-width: normal;
  }

  ${media('<=tablet')} {
    & > * {
      width: 100%;
    }

    & > * {
      margin-bottom: 2rem;
      margin-right: 0rem;
    }
  }
`;

export default ButtonGroupTwo;
