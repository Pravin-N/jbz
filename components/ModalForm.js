import React from "react";

const ModalForm = () => {
  return (
    <>
      {/* Modal Form Begin */}
      <div
        className="appointment-modal modal fade"
        id="appointmentModalForm"
        tabIndex="1"
        role="dialog"
        aria-labelledby="appointmentModalForm"
        aria-hidden="true"
      >
        <div className="modal-dialog d-flex align-items-center" role="document">
          <div className="container">
            <div className=" row justify-content-center">
              <div className="col-lg-8 col-12">
                {/* Modal Content Begin */}
                <div className="modal-content">
                  {/* Modal Close Button Begin */}
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <img src="assets/img/icons/close.svg" alt="" />
                  </button>
                  {/* End Modal Close End */}

                  {/* Appointment Form Begin */}
                  <form action="#" method="POST" className="appointment-form">
                    <h2 className="form-title">Request Appoinment</h2>
                    <input
                      className="theme-input-style"
                      type="text"
                      placeholder="Full Name"
                    />
                    <input
                      className="theme-input-style"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className="theme-input-style"
                      type="tel"
                      placeholder="Phone"
                    />

                    <select className="theme-input-style clearfix">
                      <option value="" disabled="" defaultValue="">
                        Select purpose
                      </option>
                      <option value="01">Business</option>
                      <option value="01">Consultancy</option>
                    </select>

                    <textarea
                      className="theme-input-style"
                      placeholder="Message"
                    ></textarea>

                    <button className="btn" type="submit">
                      <span>Send request</span>
                    </button>
                  </form>
                  {/* End Appointment Form End */}
                </div>
                {/* Modal Content End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Form End */}
    </>
  );
};

export default ModalForm;
