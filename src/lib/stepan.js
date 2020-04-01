
export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    if (document.createElement(element).toString() === "[object HTMLUnknownElement]") {
      throw new StepanError("Invalid tag name");
    }
    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

   static Component = class {
     constructor(parent) {
       // TODO: 1. Create StepanError class to define all framework errors
       //       2. throw an error if parent is null or undefined, or if it's not a valid DOM objec
       if (parent === null || parent === undefined) {
         throw new StepanError("null or undefined reference"); 
       }
       this.parent = parent;
     }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}

class StepanError extends Error {
  constructor(errorText) {
    super(errorText);
    this.errorText = errorText;
  }
}
