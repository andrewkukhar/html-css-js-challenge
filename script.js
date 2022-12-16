      class FormHandler {
        constructor(property) {
          this.property = property;
          this.onSubmit = this.onSubmit.bind(this);
          this.onToolbarClick = this.onToolbarClick.bind(this);
          document.getElementById("form").addEventListener("submit", this.onSubmit);
          document.getElementById("button-1").addEventListener("click", this.onToolbarClick);
          document.getElementById("button-2").addEventListener("click", this.onToolbarClick);
          document.getElementById("button-3").addEventListener("click", this.onToolbarClick);
          document.getElementById("button-4").addEventListener("click", this.onToolbarClick);
        }
        onSubmit(event) {
          event.preventDefault();
          alert(`Form clicked. Property: ${this.property}`);
        }
        onToolbarClick(event) {
          alert(`Button clicked. Property: ${this.property}`);
        }
      }
      const formHandler = new FormHandler("my property");