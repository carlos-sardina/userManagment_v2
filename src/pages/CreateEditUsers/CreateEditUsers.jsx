/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { Button } from '../../components';
import {
  ButtonsContainer,
  Container,
  Title,
  Wrapper,
  Error,
  Label,
  InputItem,
} from './CreateEditUsers.styled';

export const CreateEditUsers = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
  };

  const required = (value) => (value ? undefined : 'Required');

  return (
    <Wrapper>
      <Container>
        <Title>Create user</Title>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Field name='firstName' validate={required}>
                {({ input, meta }) => (
                  <InputItem>
                    <Label>
                      <span className='required'>*</span> First Name
                    </Label>
                    <input {...input} type='text' placeholder='First Name' />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </InputItem>
                )}
              </Field>
              <Field name='lastName' validate={required}>
                {({ input, meta }) => (
                  <InputItem>
                    <Label>
                      <span className='required'>*</span> Last Name
                    </Label>
                    <input {...input} type='text' placeholder='Last Name' />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </InputItem>
                )}
              </Field>
              <Field name='email' validate={required}>
                {({ input, meta }) => (
                  <InputItem>
                    <Label>
                      <span className='required'>*</span> Email
                    </Label>
                    <input {...input} type='text' placeholder='email@example.com' />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </InputItem>
                )}
              </Field>
              <Field name='avatarURL'>
                {({ input, meta }) => (
                  <InputItem>
                    <Label>Avatar URL</Label>
                    <input {...input} type='text' placeholder='https://my-image.com/' />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </InputItem>
                )}
              </Field>
              <ButtonsContainer>
                <Button text='Cancel' onClick={() => navigate('/')} isSecondary />
                <Button type='submit' text='Save' disabled={submitting} />
              </ButtonsContainer>
            </form>
          )}
        />
      </Container>
    </Wrapper>
  );
};
