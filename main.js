
var submitUpdateElem = document.getElementById('update')
var noGradesElem = document.getElementById('no-grades')
var formElem = document.querySelector('form')
var gradeForm = new GradeForm(formElem, submitUpdateElem)
var headerElem = document.querySelector('header');
var pageHeader = new PageHeader(headerElem);
var tableELem = document.getElementById('table');
var gradeTable = new GradeTable(tableELem, noGradesElem);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
