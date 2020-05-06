class PageHeader{
    constructor(headerElement){
        this.headerElement = headerElement;
    }
    updateAverage(newAverage){
        var averageElem = document.querySelector('span');
        averageElem.textContent = newAverage;
    }
}
