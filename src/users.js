import React from 'react';
import {
  Filter,
  List,
  Datagrid,
  TextField,
  TextInput,
  EmailField,
  ReferenceInput,
  SelectInput
} from 'react-admin';
import MyUrlField from './MyUrlField';

const UsersFilter = props => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
    </Filter>
  );
};

export const UserList = props => (
  <List filters={<UsersFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
