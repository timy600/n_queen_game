//VARIABLES
var grid = [];
var size_grid = 0;
var grid_area = 0;
var queenSet = [];

//FUNCTIONS

//Get the size of the grid then initialize it.
function grid_size_question() {
  $('body').empty();
  size_grid = prompt("N = ");
  grid_area = size_grid * size_grid;
  grid = [];
  queenSet = [];
  if (size_grid > 0) {
    init_html_grid()
    init_js_grid();
    init_css();
    call_document_ready();
  }
}

//Create both the html header and the grid
function init_html_grid() {
  $("body").append("<div class='header'></div>");
  $(".header").append("<h1>N Queens Puzzle</h1>");
  $(".header").append("<div class='score'><p id='score_ti'>Score</p><p id='score'><strong>0</strong></p></div>");
  $(".header").append('<button onclick="grid_size_question()">Go Again!</button>');
  $("body").append("<div class='grid'></div>");
  var count_row = 0;
  var count_column = 0
  while (count_row < size_grid) {
      count_column = 0;
      grid[count_row] = [];
      $(".grid").append("<div class='row' id='row"+[count_row] +"'></div>");
      while (count_column < size_grid) {
        id_row = "#row" + [count_row];
        $(id_row).append("<div class='tile' id='"+[count_row]+"t"+[count_column]+"'></div>");
        count_column++;
      }
      count_row++;
    }
}
// A similar grid is created with arrays to keep the score on JS
// 0 means the tile is still available
// 1 means the tile is already blocked
function init_js_grid() {
    var init_row = 0;
    var init_column = 0;
    while (init_row < size_grid) {
        init_column = 0;
        grid[init_row] = [];
        while (init_column < size_grid) {
            grid[init_row][init_column] = 0;
            init_column ++;
        }
        init_row ++;
    }
}

//Once the grid is set, this function allows the document to respond to click events
function call_document_ready() {
  $(document).ready(function(){
    $(".tile").click(function(event) {
      var tile_id_array = event.target.id.split("t");
      if (grid[tile_id_array[0]][tile_id_array[1]] == 1) {
          alert("Tile already blocked");
      } else {
        // Looping over each tile to see if they should be painted in red
        var grid_row;
        var grid_column;
        for (grid_row = 0; grid_row < grid.length; grid_row++) {
          for (grid_column = 0; grid_column < grid[grid_row].length; grid_column++) {
            if (grid_column == tile_id_array[1]) {
              paint_red(grid_row,grid_column);
            }
            else if (grid_row == tile_id_array[0]) {
              paint_red(grid_row,grid_column);
            }
            else if (Math.abs(tile_id_array[0] - grid_row) == Math.abs(tile_id_array[1] - grid_column)) {
              paint_red(grid_row,grid_column);
            }
          }
        }
        // Loop over the queens current set to paint their tiles black
        var i;
        queenSet.push("#" + event.target.id);
        queenSet.forEach((item, i) => {
          $(item).css("background-color", "black");
        });
        $("#score").text(queenSet.length);
        check_victory();
      }
    });
  });
}

function check_victory() {
  var grid_row;
  var grid_column;
  var grid_score = 0;
  for (grid_row = 0; grid_row < grid.length; grid_row++) {
    for (grid_column = 0; grid_column < grid[grid_row].length; grid_column++) {
      grid_score = grid_score + grid[grid_row][grid_column];
    }
  }
  if (grid_score == grid_area) {
    alert("Grid full");
  }
}

function paint_red(grid_row, grid_column) {
  $("#" + [grid_row] + "t" + [grid_column]).css("background-color", "red");
  grid[grid_row][grid_column] = 1;
}

// Since this was intendedto be a Plug-in, the css is internalized here:
function init_css() {
  $(".grid").css("z-index","1");
  $(".grid").css("overflow-x","scroll");
  $(".grid").css("overflow-y","scroll");
  $(".row").css("margin","0px");
  $(".row").css("padding","0px");

  $(".tile").css("display","inline-block");
  $(".tile").css("margin","0px");
  $(".tile").css("height","50px");
  $(".tile").css("width","50px");
  $(".tile").css("z-index","2");
  $(".tile").css("background-color","white");
  $(".tile").css("border-style","solid");
  $(".tile").css("border-color","black");
  $(".tile").css("border-width","1px");

  $("h3").css("font-family","sans-serif");
  $("h3").css("z-index","3");
  $("h3").css("font-size","30px");
  $("h3").css("position","relative");
  $("h3").css("text-align","center");
  $("h3").css("top","50px");

  $("h2").css("position","relative");
  $("h2").css("font-family","Georgia");
  $("h2").css("margin-left","350px");
}
