import React from "react";
import {Link} from "react-router-dom";

let EditCandidate = () => {
    return(
        <React.Fragment>
            <section className="add-candidate p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-primary fw-bold">Edit Candidate</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                asperiores ea expedita ipsum laborum minima modi, molestiae mollitia nam non odit quaerat
                                repellendus sint soluta tempora ullam, velit voluptates voluptatum.</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form >
                                <div className="mb-2">
                                    <input type="text"className="form-control" placeholder="First Name"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text"className="form-control" placeholder="Last Name"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text"className="form-control" placeholder="Photo Url"/>
                                </div>
                                <div className="mb-2">
                                    <input type="number"className="form-control" placeholder="Mobile"/>
                                </div>
                                <div className="mb-2">
                                    <input type="email"className="form-control" placeholder="Email"/>
                                </div>
                                <div className="mb-2">
                                    <select className="from-control">
                                        <option value="">Select a Title</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit"className="btn btn-success" value="Update"/>
                                    <Link to={'/candidate/list'} className="btn btn-primary ms-2">Cancel</Link>
                                </div>


                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" className="candidate-img" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default EditCandidate;