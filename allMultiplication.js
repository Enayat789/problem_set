//Print all the multiplication tables with numbers from 1 to 10.

function printTables(last_table) {
  var tables = [];

  for (let i = 1; i <= last_table; i++) {
    var table = [];
    for (let j = 1; j <= 10; j++) {
      const multiply = i + " x " + j + " = " + i * j;
      table.push(" " + multiply);
    }
    tables.push(table);
  }

  return tables;
}

const result = printTables(20);
console.log(result);
