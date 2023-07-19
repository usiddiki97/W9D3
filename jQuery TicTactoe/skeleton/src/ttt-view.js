class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard(this.$el);
    this.bindEvents();
  }

  bindEvents() {
    const $grid = $('.grid');
    
    $grid.on('click', '.cell', event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
      console.log(this);
    })
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;

    $square.addClass("clicked");
    this.game.playMove(pos);
  }

  setupBoard($el) {
    const $grid = $('<ul>').addClass('grid');

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {

        let $cell = $("<li class='cell'></li>");
        $cell.data("pos", [rowIdx, colIdx]);
        $grid.append($cell);
      }
    }
    $el.append($grid);
  }
}

module.exports = View;
