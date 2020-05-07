class App{
    constructor(gradeTable, pageHeader, gradeForm){
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }
    handleGetGradesError(error){
        console.error(error);
    }
    handleGetGradesSuccess(grades){
        this.gradeTable.updateGrades(grades);

        var gradeSum = 0;
        for(var gradeIndex = 0; gradeIndex < grades.length; gradeIndex++){
            gradeSum += grades[gradeIndex].grade;
            var gradeAverage = gradeSum/grades.length;
        }

        this.pageHeader.updateAverage(gradeAverage)
    }
    getGrades(){
        $.ajax({
            method: "GET",
            url: "https://sgt.lfzprototypes.com/api/grades",
            headers: { "X-Access-Token": "4zYBwVu7"},
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError
        })
    }
    start(){
        this.getGrades();
    }
}
