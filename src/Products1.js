import "./styles.css";
import axios from "axios";

function Products1() {
  apiCall();
  function apiCall() {
    return (
      // Make a request for a user with a given ID
      axios

        .get("https://fakestoreapi.com/products")
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        })
    );
  }

  return (
    <div>
      <div className="card ,width: 18rem">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Products1;
