var app = new Vue({
  el: '#app',
  data: {
    text: 'Hello',
    page: {
      'step-1': true,
      'step-2': false,
      count: 2
    },
    isResultsShow: false,
    inputsForPages: {
      'step-1': {
        model: null,
        name: 'full name',
        type: 'text',
        defaultValue: 'Vasya'
      },
      'step-2': {
        model: null,
        name: 'age',
        type: 'number'
      }
    }
  },
  methods: {
    nextStep(currentStep){
      this.page[`step-${currentStep}`] = false;
      
      if(this.page[`step-${currentStep + 1}`] == false) {
        this.page[`step-${currentStep + 1}`] = true;
      } else {
        console.log('End.');

        this.finalResults();
      }
    },
    onEnter(ev, currentStep){
      if(ev.keyCode != 13) return;

      this.nextStep(currentStep);  
    },
    finalResults() {
      this.isResultsShow = true;
    }
  }
});