import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function FormsEx(){
    return (
        <div className="row justify-content-center">
            <div className="card">
                <div className="card-header">
                    <h1>Contact Form</h1>
                </div>
                <div className="card-body">
                    <div class="col-md-12 ml-3 mt-4">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Name : </label>
                                        <input type="text" name="name" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email : </label>
                                        <input type="email" name="email"  className="form-control" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-12">
                                    <button className="btn btn-primary">Click me</button>
                                </div>
                            </div>
                        </form>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default FormsEx;