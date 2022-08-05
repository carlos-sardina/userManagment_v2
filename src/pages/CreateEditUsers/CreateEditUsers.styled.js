import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  background-color: #eceff1;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #cfd8dc;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;

  button:first-child {
    margin-right: 1rem;
  }
`;