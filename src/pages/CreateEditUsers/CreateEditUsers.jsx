/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { composeValidations, isEmail, isUrl, required } from '../../utils/validations';
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
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users).filter((u) => u.id === Number(id))[0];

  const onSubmit = (values) => {
    if (id) {
      dispatch({ type: 'UPDATE_USER', payload: { ...values, id: Number(id) } });
    } else {
      dispatch({ type: 'ADD_USER', payload: { ...values, id: Math.floor(Math.random() * 100) } });
    }

    navigate('/');
  };

  return (
    <Wrapper>
      <Container>
        <Title>{user?.id ? 'Edit' : 'Create'} user</Title>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Field name='firstName' initialValue={user?.firstName} validate={required}>
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
              <Field name='lastName' initialValue={user?.lastName} validate={required}>
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
              <Field
                name='email'
                initialValue={user?.email}
                validate={composeValidations(required, isEmail)}
              >
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
              <Field name='avatarURL' initialValue={user?.avatarURL} validate={isUrl}>
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
