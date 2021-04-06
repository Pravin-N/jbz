export default function validateInfo(data) {
  let errors = {};

  if (!data.name.trim()) {
    errors.name = "Name required";
  }

  if (!data.message.trim()) {
    errors.message = "Message required";
  }

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}
