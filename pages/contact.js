import { useState } from "react";
import ContactForm from "../components/contactform";
import FormSuccess from "../components/FormSuccess";

const contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <ContactForm submitForm={submitForm} /> : <FormSuccess />}
    </>
  );
};

export default contact;
