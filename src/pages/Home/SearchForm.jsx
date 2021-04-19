import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, SearchInput } from '../../components';
import { fetchUser } from '../../redux/modules/users';
import { SearchSchema } from '../../utils/validations';

export default function SearchForm() {
  const dispatch = useDispatch();

  function onSubmit({ username }) {
    dispatch(fetchUser(username));
  }

  return (
    <Formik initialValues={{ username: '' }} validationSchema={SearchSchema} onSubmit={onSubmit}>
      {({
        handleSubmit, handleChange, handleBlur, values,
      }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="l-input-group">
            <SearchInput
              type="search"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <Button className="c-button" type="submit">Search</Button>
          </div>
          <small className="c-error"><ErrorMessage name="username" /></small>
        </form>

      )}
    </Formik>
  );
}
