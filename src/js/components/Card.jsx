import image from "../../img/rigo-baby.jpg"

const Card = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-5 mb-5">
      <div class="col">
        <div class="card h-100 ">
          <img src={image} alt="Descripción de la imagen" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer text-center">
            <button className="btn btn-primary btn-lg " type = "button">Find out more</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={image} alt="Descripción de la imagen" />

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer text-center">
            <button className="btn btn-primary btn-lg" type = "button">Find out more</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={image} alt="Descripción de la imagen" />

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer text-center">
            <button className="btn btn-primary btn-lg" type = "button">Find out more</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={image} alt="Descripción de la imagen" />

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer text-center">
            <button className="btn btn-primary btn-lg" type = "button">Find out more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

