const boardMaker = (boardObject) => {
  const domString = `<div class="card board" style="width: 18rem;" id=${boardObject.boardUid}>
     <img class="card-img-top" src="${boardObject.image}" alt="Card image cap">
     <div class="card-body">
     <h5 class="card-title">Board ${boardObject.name}</h5>
     <a href="#" id="${boardObject.boardUid}" class="btn btn-danger delete-board">Delete Board</a>
     <div class="card-body" id="${boardObject.boardUid}">
     </div>      
      </div>`;

  return domString;
};

export default { boardMaker };
