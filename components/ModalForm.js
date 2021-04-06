import { useState } from "react";
import ContactFormModal from "../components/ContactFormModal";
import FormSuccess from "../components/FormSuccess";

const ModalForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? (
        <ContactFormModal submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </>
  );
};

export default ModalForm;
