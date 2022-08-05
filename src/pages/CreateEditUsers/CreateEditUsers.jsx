import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../../components';
import { ButtonsContainer, Container, Form, Title, Wrapper } from './CreateEditUsers.styled';

export const CreateEditUsers = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Title>Create user</Title>
        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Avatar URL' />
        </Form>
        <ButtonsContainer>
          <Button text='Cancel' onClick={() => navigate('/')} isSecondary />
          <Button text='Create' onClick={() => {}} />
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
};
