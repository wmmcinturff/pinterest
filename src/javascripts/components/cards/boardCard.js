import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card farmer" style="width: 18rem;" id=${boardObject.uid}>
     <img class="card-img-top" src="${boardObject.image}" alt="Card image cap">
     <div class="card-body">
     <h5 class="card-title">Board ${boardObject.name}</h5>
      <a href="#" class="btn btn-primary view-board" id=${boardObject.uid}>View Board</a>
      <a href="#" id="${boardObject.uid}" class="btn btn-danger delete-farmer">Delete Board</a>
      </div>
      </div>`;

  $('body').on('click', '.card.board .btn.delete-board', (e) => {
    e.stopImmediatePropagation();
    $(`.card#${e.currentTarget.id}`).remove();
    boardData.deleteBoard(e.currentTarget.id);
  });
  return domString;
};

export default { boardMaker };
