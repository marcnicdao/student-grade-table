class GradeTable{
    constructor(tableElement){
        this.tableElement = tableElement;
    }
    updateGrades(grades){
        var tbody = this.tableElement.querySelector('tbody');
        tbody.textContent = " ";
        for(var index = 0; index < grades.length; index++){
            var newRow = document.createElement('tr');
            var studentName = document.createElement('td');
            studentName.textContent = grades[index].name;

            var studentCourse = document.createElement('td');
            studentCourse.textContent = grades[index].course;

            var studentGrade = document.createElement('td')
            studentGrade.textContent = grades[index].grade;

            newRow.appendChild(studentName);
            newRow.appendChild(studentCourse);
            newRow.appendChild(studentGrade);

            tbody.append(newRow);
        }

    }
}
