/* eslint-disable no-unneeded-ternary */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from '../../components';
import { Action, Container, ImageContainer, Row } from './Home.styled';

const getAvatar = (url) => (
  <ImageContainer>
    <img
      src={
        url
          ? url
          : 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'
      }
      alt='avatar'
    />
  </ImageContainer>
);

export const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch({ type: 'REMOVE_USER', payload: id });
  };

  const data = React.useMemo(
    () =>
      users.map((user) => ({
        ...user,
        key: user.id,
        edit: <Action>Edit</Action>,
        delete: <Action onClick={() => deleteUser(user.id)}>Delete</Action>,
        avatar: getAvatar(user.avatarURL),
      })),
    [users],
  );
  const columns = React.useMemo(
    () => [
      {
        Header: 'Avatar',
        accessor: 'avatar',
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Actions',
        accessor: 'edit',
      },
      {
        Header: 'Actions',
        accessor: 'delete',
      },
    ],
    [],
  );

  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Button text='Create user' onClick={() => navigate('/users/create')} />
      </Row>
      <Table columns={columns} data={data} />
    </Container>
  );
};
