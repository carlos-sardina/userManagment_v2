/* eslint-disable no-useless-escape */
export const required = (value) => (value ? undefined : 'Required');

export const isUrl = (value) =>
  value &&
  !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
    value,
  )
    ? 'Invalid url'
    : undefined;

export const isEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;

export const composeValidations =
  (...validations) =>
  (value) =>
    validations.reduce((error, validation) => error || validation(value), undefined);
