d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
}; 

// SKILL DRILL DROPDOWN MENU
function updatePage() {
    var dropdownMenu = d3.selectAll("#selectName").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;
  
    console.log(dropdownMenuID);
    console.log(selectedOption);
  }; 