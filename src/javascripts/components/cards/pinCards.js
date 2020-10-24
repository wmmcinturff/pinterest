// import pinData from '../../helpers/data/pinData';

const buildPinCard = (pinObject) => {
  const domString = `<div class="card dinn" style="width: 18rem;" id="${pinObject.uid}">
    <img src="${pinObject.image}" class="card-img-top" alt="${pinObject.name}" />
    <div class="card-body">
      <h5 class="card-title">${pinObject.name}</h5>
    <a href="#" id="${pinObject.uid}" class="btn btn-info update-pin"><i class="far fa-edit"></i>Update Pin</a>
      <a href="#" id="${pinObject.uid}" class="btn btn-primary delete-pin">Delete Pin</a>
    </div>
  </div>`;
  return domString;
};

// SAVE FOR 'DELETE' ACTION //
export default { buildPinCard };
