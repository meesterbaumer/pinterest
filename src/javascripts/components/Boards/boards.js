import utilities from '../../helpers/utilities';
import boardsData from '../../helpers/data/boardsData';


const printBoards = (uid) => {
  boardsData.getBoardByUid(uid)
    .then((boards) => {
      let domString = '<h2>Pinterest</h2>';
      domString += '<div id="board-section" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += `
        <div class="card ${board.id} main-board" style="width: 18rem;">
        <div class="card-body ${board.uid}">
        <h5 class="card-title">${board.name}</h5>
        <p class="card-text">${board.description}</p>
        <a id="pin-button" href="#" class="btn btn-primary">View Pins</a>
        </div>
        </div>
        `;
      });
      domString += '</div>';
      utilities.printToDom('board-section', domString);
    })
    .catch((error) => console.error(error));
};

export default { printBoards };
