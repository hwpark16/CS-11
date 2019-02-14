
sorting_direction = "";
sorted_column = "";


function sortColumn(column, index) {
  "use strict";

  /*
   * TODO: Sort the column given by the index, coloring the header as necessary.
   *
   * Some notes:
   * - You will have to keep track of some sort of global state in order to know
   *   which column you are currently sorting and which direction is the current
   *   sort direction. This is kind of gross, but for this particular file you
   *   can't really do much.
   * - Arrays have a sort method that normally sorts by JavaScript's default
   *   method, but you can actually provide your own function; if you provide a
   *   function to Array.prototype.sort, it will take two arguments (comparing
   *   items, say a and b), and return -1 if a < b, 1 if a > b, and 0 if a == b.
   * - There's no really nice way to actually sort rows of things, so you'll
   *   have to first store the rows in the correct order somewhere, clear out
   *   the table, and append them back in the correct order.
   */
   var i;
   var a;
   var b;
   var data = document.getElementsByTagName("tr");
   var column_info = [];
   var temp = [];
   for (i = 1; i < data.length; i++) {
       column_info.push([data[i].children[index].innerHTML, i]);
       temp.push(data[i].cloneNode(true));
   }

   	// Sets colors of headers
	if (sorted_column === column) {
		if (sorting_direction === "ascending") {
			sorting_direction = "descending";
			column.style.color = "red";
		}

		else {
			sorting_direction = "ascending";
			column.style.color = "blue";
		}
	}	
		
   	// Sets colors of headers
	if (sorted_column != column) {
		if (sorted_column !== "") {
			sorted_column.style.color = "";
		}

		column.style.color = "blue";
		sorting_direction = "ascending";
		sorted_column = column;
	}

	// Sorts the columns in ascending order
	if(sorting_direction == "ascending") {
		if (index === 1) {
			column_info.sort(function(a,b) {
				a = parseInt(a, 10);
				b = parseInt(b, 10);
				return a - b;
			});
		}
		else {
			column_info.sort(function(a,b) {
				if (a[0] < b[0]) {
					return -1;
				}
				if (a[0] > b[0]) {
					return 1;
				}
				return 0;
			});
		}
	}

	// Sorts the columns in descending order
	if (sorting_direction == "descending") {
		if (index === 1) {
			column_info.sort(function(a,b) {
				a = parseInt(a, 10);
				b = parseInt(b, 10);
				return b - a;
			});
		}
		else {
			column_info.sort(function(a,b) {
				if (a[0] > b[0]) {
					return -1;
				}
				if (a[0] < b[0]) {
					return 1;
				}
				return 0;
			});
		}
	}


	var body = document.getElementsByTagName("tbody")[0];
	while (data.length > 1) {
		data[1].remove();
	}

	for (i = 0; i < column_info.length; i++) {
		index = column_info[i][1];
		body.appendChild(temp[index - 1]);
	}
}


window.addEventListener("load", function(e) {
  "use strict";
  // Attaches a click listener on all header cells to call
  // bindColumnListener

  var i;
  var elements = document.getElementById("header").children;

  for (i = 0; i < elements.length; i++) {
  	elements[i].addEventListener("click", (function(i) {
  		return function(e) {
  			sortColumn(elements[i], i);
  		};
  	})(i));
  }
});
