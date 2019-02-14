var SortTable = function () {
    "use strict";

    var SortTable = function(id, types) {
      var i;
      var elements = 
        document.getElementById(id).children[0].children[0].children;

      for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", (function(i) {
          return function(e) {
            this.sortColumn(i, elements[i]);
          };
        })(i).bind(this));
      }

      var new_types = [];
      if (types.length === 0 || !(types instanceof Array)) {
        for (i = 0; i < elements.length; i++) {
          new_types.push("string");
        }
      }

      for (i = 0; i < elements.length; i++) {
        if (types[i] === Number) {
          new_types.push("number");
        }
        else {
          new_types.push("string");
        }
        
      }

      this.sorting_direction = "";
      this.sorted_column = "";
      this.types = new_types;

    };

    SortTable.prototype.sortColumn = function(index, column) {
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
      if (this.sorted_column === column) {
        if (this.sorting_direction === "ascending") {
          this.sorting_direction = "descending";
          column.style.color = "red";
        }

        else {
          this.sorting_direction = "ascending";
          column.style.color = "blue";
        }
      } 
        
        // Sets colors of headers
      if (this.sorted_column !== column) {
        if (this.sorted_column !== "") {
          this.sorted_column.style.color = "";
        }

        column.style.color = "blue";
        this.sorting_direction = "ascending";
        this.sorted_column = column;
      }

      // Sorts the columns in ascending order
      if(this.sorting_direction === "ascending") {
        if (this.types[index] === "number") {
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
      if (this.sorting_direction === "descending") {
        if (this.types[index] === "number") {
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
    };

    return SortTable;

} ();