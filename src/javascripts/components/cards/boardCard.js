// import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card boardCards${boardObject.boardUid} mb-3" style="width: 18rem;" >
  </div>
     <img class="card-img-top" src="${boardObject.image}" alt="Card image cap">
     <div class="card-body">
     <h5 class="card-title">${boardObject.name}</h5>
     <div class= "button-group">
     <button class="btn btn-info see-board-pins" id="${boardObject.boardUid}">Pins</button>
     <button class="btn btn-danger remove-board" id="${boardObject.boardUid}">Remove Board</button>
      </div>  
     </div> 
     </div>      
    </div>`;

  return domString;
};

export default { boardMaker };
