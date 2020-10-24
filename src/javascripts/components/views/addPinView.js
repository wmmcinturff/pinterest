import form from '../forms/pinForm';

const pinFormView = () => {
  $('#app').html('<div class = "forms" id = "pin-form"></div>');
  form.addPinForm();
};

export default { pinFormView };
