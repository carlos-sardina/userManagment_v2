import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Action = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;
