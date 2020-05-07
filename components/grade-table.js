class GradeTable {
    constructor(tableElement, noGradesElement) {
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }
    updateGrades(grades) {
        var tbody = this.tableElement.querySelector('tbody');
        tbody.textContent = " ";
        for (var index = 0; index < grades.length; index++) {
            var grade = grades[index]
            tbody.append(this.renderGradeRow(grade, this.deleteGrade));

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
    renderGradeRow(data, deleteGrade) {
        var deleteRow = document.createElement('tr');
        var deleteRowName = document.createElement('td');
        var deleteRowCourse = document.createElement('td');
        var deleteRowGrade = document.createElement('td');
        var deleteButtonCell = document.createElement('td');
        var deleteButton = document.createElement('button');

        deleteRowName.textContent = data.name;
        deleteRowCourse.textContent = data.course;
        deleteRowGrade.textContent = data.grade;

        deleteButton.className = "btn btn-danger";
        deleteButton.textContent = 'DELETE';
        deleteButton.addEventListener('click', () => deleteGrade(data.id));
        deleteButtonCell.appendChild(deleteButton);


        deleteRow.appendChild(deleteRowName);
        deleteRow.appendChild(deleteRowCourse);
        deleteRow.appendChild(deleteRowGrade);
        deleteRow.appendChild(deleteButtonCell);

        return deleteRow;
    }
}
