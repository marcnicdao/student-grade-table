class GradeForm {
    constructor(formElement, submitUpdateButton) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener('submit', this.handleSubmit)
        this.createGrade = null;
        this.submitUpdateButton = submitUpdateButton;
        this.handleUpdate = this.handleUpdate.bind(this)
        this.submitUpdateButton.addEventListener('click', this.handleUpdate)
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
        var addButton = document.getElementById('add');
        var updateButton = document.getElementById('update');

        this.updateCurrentGrade(updateformName, updateformCourse, updateformGrade);
        this.formElement.reset();

        addButton.classList.remove('d-none')
        updateButton.classList.add('d-none')
    }
    assignUpdateCurrentGradeCallBack(updateCurrentGrade) {
        this.updateCurrentGrade = updateCurrentGrade
    }
}
