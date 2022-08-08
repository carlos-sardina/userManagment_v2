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

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: space-around;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  display: flex;

  .required {
    color: red;
    margin-right: 0.2rem;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;

export const InputItem = styled.div`
  margin-bottom: 1rem;

  input {
    border: 1px solid #cfd8dc;
    border-radius: 5px;
    padding: 10px;
    width: 300px;
    box-sizing: border-box;
    display: block;
  }
`;