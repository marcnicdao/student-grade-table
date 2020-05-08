class GradeTable {
    constructor(tableElement, noGradesElement) {
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
        this.field
    }
    updateGrades(grades) {
        var tbody = this.tableElement.querySelector('tbody');
        tbody.textContent = " ";
        for (var index = 0; index < grades.length; index++) {
            var grade = grades[index]
            tbody.append(this.renderGradeRow(grade, this.deleteGrade, this.fillForm, index));

        }

        var noGradesElem = document.getElementById('no-grades')
        if (!grades.length) {
            noGradesElem.classList.remove('d-none');
        } else {
            noGradesElem.className = 'd-none'
        }
    }
    assignDeleteGradeCallBack(deleteGrade) {
        this.deleteGrade = deleteGrade;
    }
    renderGradeRow(data, deleteGrade, fillForm, index) {
        var row = document.createElement('tr');
        var rowName = document.createElement('td');
        var rowCourse = document.createElement('td');
        var rowGrade = document.createElement('td');
        var buttonCell = document.createElement('td');
        var deleteButton = document.createElement('button');
        var updateButton = document.createElement('button')

        rowName.textContent = data.name;
        rowCourse.textContent = data.course;
        rowGrade.textContent = data.grade;


        updateButton.className = "btn btn-primary fas fa-edit"
        updateButton.addEventListener('click', () => fillForm(index, data.id))
        deleteButton.className = "btn btn-danger fas fa-minus-circle";
        deleteButton.addEventListener('click', () => deleteGrade(data.id));
        buttonCell.appendChild(updateButton);
        buttonCell.appendChild(deleteButton);


        row.appendChild(rowName);
        row.appendChild(rowCourse);
        row.appendChild(rowGrade);
        row.appendChild(buttonCell);

        return row;
    }

    assignFillFormCallBack(fillForm){
        this.fillForm = fillForm
    }



}
