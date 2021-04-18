import * as Yup from 'yup';

function validateUsername(value) {
  const regex = new RegExp(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);
  return regex.test(value);
}

export const SearchSchema = Yup.object().shape({
  username: Yup.string()
    .test('is-valid-username', 'This username is invalid.', validateUsername)
    .required('This field is required.'),
});
