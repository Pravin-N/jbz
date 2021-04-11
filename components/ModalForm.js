import { useState } from "react";
import ContactFormModal from "../components/ContactFormModal";
import FormSuccess from "../components/FormSuccess";

const ModalForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  function formView() {
    setIsSubmitted(false);
  }

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
                    onClick={formView}
                  >
                    <img
                      src="assets/img/icons/close.svg"
                      alt=""
                      height="20"
                      width="20"
                    />
                  </button>
                  {/* End Modal Close End */}
                  {!isSubmitted ? (
                    <ContactFormModal submitForm={submitForm} />
                  ) : (
                    <FormSuccess />
                  )}
                  {/* Appointment Form Begin */}

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
