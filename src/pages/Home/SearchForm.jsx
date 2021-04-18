import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, Input } from '../../components';
import { fetchUser } from '../../redux/modules/users';

export default function SearchForm() {
  const dispatch = useDispatch();

  function onSubmit({ username }) {
    dispatch(fetchUser(username));
  }

  return (
    <Formik initialValues={{ username: '' }} onSubmit={onSubmit}>
      {({
        handleSubmit, handleChange, handleBlur, values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="search"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <Button type="submit">Buscar</Button>
        </form>
      )}
    </Formik>
  );
}
