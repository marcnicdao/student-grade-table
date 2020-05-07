//apiKey = "4zYBwVu7";
var formElem = document.querySelector('form')
var gradeForm = new GradeForm(formElem)
var headerElem = document.querySelector('header');
var pageHeader = new PageHeader(headerElem);
var tableELem = document.getElementById('table');
var gradeTable = new GradeTable(tableELem);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
