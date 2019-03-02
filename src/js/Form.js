import axios from "axios";
import App from "./index";

const API_URL = "https://api.github.com/users";

class Form {
  constructor(addCard) {
    this.API_URL = "";
    this.searchTerm = "";

    this.addCard = addCard;

    this.searchInput = document.querySelector('input[type="text"]');
    this.searchInput.addEventListener("keyup", () => this.handleKeyup(event));

    this.searchForm = document.getElementById("form");
    this.searchForm.addEventListener("submit", () => this.handleSubmit(event));
  }

  handleKeyup(event) {
    this.searchTerm = event.target.value.trim();
    this.API_URL = `${API_URL}/${this.searchTerm}`;
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(this.API_URL)
      .then(({ data }) => this.addCard(data))
      .catch(err => console.log("Promise Rejected", err));
    this.searchForm.reset();
  }
}

export default Form;