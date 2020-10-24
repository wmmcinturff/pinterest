// import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card boardCards" style="width: 18rem;" id="${boardObject.boardUid}">
    <img src="${boardObject.image}" class="card-img-top" alt="${boardObject.name}" />
    <div class="card-body">
      <h5 class="card-title">${boardObject.name}</h5>
      <p class="card-description">${boardObject.description}</p>
       <a href="#" id="${boardObject.boardUid}" class="btn btn-info view-pin"><i class="far fa-eye"></i>View Pins</a>
       <a href="#" id="${boardObject.boardUid}" class="btn btn-primary delete-board"><i class="fas fa-minus-circle"></i>Delete Board</a>
    </div>
  </div>`;
  return domString;
};
// NEED TO DELETE BOARD LATER //

export default { boardMaker };
