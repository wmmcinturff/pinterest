import pinData from '../../helpers/data/pinData';

const pinMaker = (pinObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${pinObject.firebaseKey}">
      <div class="card-body">
      <h5 class="card-title">${pinObject.name}</h5>
      <p class="card-text"> image: ${pinObject.image}<br /></p>
      </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${pinObject.boardName}</li>
        </ul>
        <div class="card-body">
        <a href="#" id="${pinObject.firebaseKey}" class="btn btn-info update-pin><i class="far fa-edit"></i> Update Pin</a>
        <a href="#" id="${pinObject.firebaseKey}" class="btn btn-danger delete-pin">Delete Pin</a>
      </div>
      </div>`;

  $('body').on('click', '.delete-pin', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    pinData.deletePin(firebaseKey);
  });

  return domString;
};

export default { pinMaker };
