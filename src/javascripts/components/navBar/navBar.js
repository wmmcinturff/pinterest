const pinNavbar = (name = 'Procrastinator') => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><i class="fab fa-pinterest"></i>Pinterest</a>
      <button class="navbar-toggler" type="button" 
      data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav mr-auto">
        <li class="nav-item mx-3"  id="boards-link">
         <a class="nav-link" href="#"><i class="fas fa-paw"></i> Boards</a>
        </li>
        <li class="nav-item mx-3" id="pins-link">
         <a class="nav-link" href="#"><i class="fas fa-thumbtack"></i>Pins</a>
        </li>
        <li class="nav-item mx-3" id="add-pin-link">
         <a class="nav-link" href="#"><i class="fas fa-plus-circle"></i> Add A Pin</a>
        </li>
       </ul>

      <ul class="navbar-nav ml-auto">
        <li id='nav-username' class="user-info-nav">${name}</li>
        <li id='btn-login' class="nav-item">
        </li>
        <li id='btn-logout' class="nav-item">
        </li>
      </ul>
     </div>
    </nav>`
  );
};

export default { pinNavbar };
