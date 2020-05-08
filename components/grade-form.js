class GradeForm {
    constructor(formElement, submitUpdateButton) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener('submit', this.handleSubmit)
        this.createGrade = null;
        this.submitUpdateButton = submitUpdateButton;
        this.handleUpdate = this.handleUpdate.bind(this)
        this.id = null
        this.fillForm = this.fillForm.bind(this)
        this.formElement.cancelButton
    }
    assignCreateGradeCallback(createGrade) {
        this.createGrade = createGrade;
    }
    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData(event.target);
        var formName = formData.get('name');
        var formCourse = formData.get('course');
        var formGrade = formData.get('grade')

        this.createGrade(formName, formCourse, formGrade)
        event.target.reset();
    }
    handleUpdate() {
        event.preventDefault();
        var updateformData = new FormData(this.formElement);
        var updateformName = updateformData.get('name');
        var updateformCourse = updateformData.get('course');
        var updateformGrade = updateformData.get('grade');
        var formButton = document.getElementById('add');

        this.updateCurrentGrade(updateformName, updateformCourse, updateformGrade);
        this.formElement.reset();

        this.formElement.addEventListener('submit', this.handleSubmit)
        this.formElement.removeEventListener('submit', this.handleUpdate)
        formButton.textContent = "Add"
    }
    assignUpdateCurrentGradeCallBack(updateCurrentGrade) {
        this.updateCurrentGrade = updateCurrentGrade
    }
    fillForm(index, id) {

        var nameField = document.getElementById('name');
        var courseField = document.getElementById('course');
        var gradeField = document.getElementById('grade');
        var formButton = document.getElementById('add');


        this.formElement.removeEventListener('submit', this.handleSubmit)
        this.formElement.addEventListener('submit', this.handleUpdate)

        nameField.value = this.grades[index].name;
        courseField.value = this.grades[index].course;
        gradeField.value = this.grades[index].grade;
        formButton.textContent = "Update"
        this.id = id;
    }
    resetForm(){
        this.formElement.addEventListener('submit', this.handleSubmit)
        this.formElement.removeEventListener('submit', this.handleUpdate)
    }
}
