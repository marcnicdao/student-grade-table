class App{
    constructor(gradeTable, pageHeader, gradeForm){
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleCreateGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleCreateGradeSuccess.bind(this);
        this.updateCurrentGrade = this.updateCurrentGrade.bind(this)
        this.handleUpdateCurrentGradeSuccess = this.handleUpdateCurrentGradeSuccess.bind(this);
        this.handleUpdateCurenntGradeError = this.handleUpdateCurrentGradeError.bind(this)
    }

    handleGetGradesError(error){
        console.error(error);
    }

    handleGetGradesSuccess(grades){
        this.gradeTable.updateGrades(grades);
        this.gradeForm.grades = grades
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
        this.gradeForm.assignCreateGradeCallback(this.createGrade);
        this.gradeTable.assignDeleteGradeCallBack(this.deleteGrade);
        this.gradeTable.assignFillFormCallBack(this.gradeForm.fillForm)
        this.gradeForm.assignUpdateCurrentGradeCallBack(this.updateCurrentGrade);
    }

    createGrade(name, course, grade){
        $.ajax({
            method: "POST",
            url: "https://sgt.lfzprototypes.com/api/grades",
            data:
            {
                "name": name,
                "course": course,
                "grade": grade
            },
            headers: { "X-Access-Token": "4zYBwVu7" },
            success: this.handleCreateGradeSuccess,
            error: this.handeleCreateGradeError
        })
    }

    handleCreateGradeError(error){
        console.error(error);
    }

    handleCreateGradeSuccess(){
        this.getGrades();
    }
    deleteGrade(id){
        $.ajax({
            method: "DELETE",
            url:'https://sgt.lfzprototypes.com/api/grades/'+ id,
            headers: { "X-Access-Token": "4zYBwVu7"},
            success:this.handleDeleteGradeSuccess,
            error: this.handleDeleteGradeError
        })
    }
    handleDeleteGradeError(error){
        console.error(error)
    }
    handleDeleteGradeSuccess(){
        this.getGrade()
    }
    updateCurrentGrade(name, course, grade){
        console.log(name,course,grade);
        $.ajax({
            method: "PATCH",
            url: 'https://sgt.lfzprototypes.com/api/grades/' + this.gradeForm.id,
            data:
            {
                "name": name || "",
                "course": course || "",
                "grade": grade || ""
            },
            headers: { "X-Access-Token": "4zYBwVu7" },
            success: this.handleUpdateCurrentGradeSuccess,
            error: this.handleUpdateCurrentGradeError
        })
    }
    handleUpdateCurrentGradeError(error){
        console.error(error);
    }
    handleUpdateCurrentGradeSuccess(){
        this.getGrades()
    }

}
