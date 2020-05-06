//apiKey = "4zYBwVu7";
var headerElem = document.querySelector('header');
var pageHeader = new PageHeader('headerElem');
var tableELem = document.getElementById('table');
var gradeTable = new GradeTable(tableELem);
var app = new App(gradeTable, pageHeader);
app.start();
