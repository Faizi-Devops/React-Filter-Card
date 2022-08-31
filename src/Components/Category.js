let Category = () => {
    return (
        <div>
            <h1 className="text-center text-info">Let's Shop</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 col-lg-3 col-xs-4 col-sm-4">
                        <button type="button" class="btn btn-warning w-100 mb-4 ">Men</button>
                        <button type="button" class="btn btn-warning w-100 mb-4">Women</button>
                        <button type="button" class="btn btn-warning w-100 mb-4">Children</button>
                        <button type="button" class="btn btn-warning w-100 mb-4">Black</button>
                        <button type="button" class="btn btn-warning w-100 mb-4">White</button>
                        <button type="button" class="btn btn-warning w-100 mb-4">All</button>

                    </div>
                    <div className="col-9 col-lg-9">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">

                            <div class="card">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

                                


                            </div>
                            <div className="col-lg-4 col-sm-12">

                            <div class="card" >
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>





                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Category;