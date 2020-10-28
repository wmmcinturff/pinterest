import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card boardCards" style="width: 18rem;" id="${boardObject.firebaseKey}">
    <img src="${boardObject.image}" class="card-img-top" alt="${boardObject.name}" />
    <div class="card-body">
      <h5 class="card-title">${boardObject.name}</h5>
      <p class="card-description">${boardObject.description}</p>
      <a href="#" id="${boardObject.firebaseKey}" class="btn btn-info see-board-pins" id="${boardObject.firebaseKey}">Pins</a> 
      <a href="#" id="${boardObject.firebaseKey}" class="btn btn-primary delete-board"><i class="fas fa-minus-circle"></i>Delete Board</a>
    </div>
  </div>`;

  $('body').on('click', '.delete-board', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    boardData.deleteBoard(firebaseKey);
  });
  return domString;
};

export default { boardMaker };
