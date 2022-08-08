import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from '../../components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Home = () => {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    [],
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
        Header: 'Edit',
        accessor: 'edit',
      },
      {
        Header: 'Delete',
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
