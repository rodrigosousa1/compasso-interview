import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, Input } from '../../components';
import { fetchUser } from '../../redux/modules/users';

export default function SearchForm() {
  const dispatch = useDispatch();

  function onSubmit({ userName }) {
    dispatch(fetchUser(userName));
  }

  return (
    <Formik initialValues={{ userName: '' }} onSubmit={onSubmit}>
      {({
        handleSubmit, handleChange, handleBlur, values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="search"
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
          />
          <Button type="submit">Buscar</Button>
        </form>
      )}
    </Formik>
  );
}
