import pinData from '../../helpers/data/pinData';

const addPinForm = () => {
  $('#pin-form').html(`
    <h2>Add New Pin</h2>
    <div id="success-message"></div>
    <form>
        <div id="error-message"></div>
        <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Example: Cat Toys">
        </div>
       <div class="form-group">
        <label for="image">Image</label>
        <input type="text" class="form-control" id="image" placeholder="Image address">
        </div>
        <div class="form-group">
        <label for="board">Board Assignment</label>
          <select class="form-control" id="board">
            <option value="">Select a Board</option>
          </select>
      </div>
        <button id="add-pin-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i>Add Pin</button>
    </form>`);

  $('#add-pin-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#name').val() || false,
      image: $('#image').val() || false,
      boardUid: $('#board').val() || false
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      pinData
        .addPin(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Pin Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
      $('#name').val('');
      $('#image').val('');
    }
  });
};

export default {
  addPinForm
};
