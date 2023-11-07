function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    // Check if the 'name' field is empty
    if (values.name === "") {
        error.name = "Name should not be empty";
    } else {
        error.name = ""; // No error if not empty
    }

    // Check if the 'email' field is empty and matches the email pattern
    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is incorrect";
    } else {
        error.email = ""; // No error if not empty and format is correct
    }

    // Check if the 'password' field is empty and matches the password pattern
    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password format is incorrect";
    } else {
        error.password = ""; // No error if not empty and format is correct
    }

    return error; // Return the error object with validation results
}

export default Validation;
