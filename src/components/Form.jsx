import { validateEmail } from "../utils/helper"
import { useState } from 'react';

function Form() {

    const [email, setEmail] = useState('');
    const [name, setUserName] = useState('');
    const [message, themessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setUserName(inputValue);
        } else {
            themessage(inputValue);
        }
    };
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
            setErrorMessage(`Email or Name is invalid.`);
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }

        alert(`Parsa Will Contact You Soon`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        themessage('');
        setEmail('');

    };

    return (
        <div>
            <div style={{ paddingLeft: 23 }} className="container text-center contact-me-form">
                <div></div>
                <form action="https://api.web3forms.com/submit" method="POST" className="form" onSubmit={handleFormSubmit}>
                    <input type="hidden" name="access_key" value="7fd63e3d-ec66-4bc4-ae1c-590dad675148"/>

                    <input
                        value={name}
                        name="name" required
                        onChange={handleInputChange}
                        type="text"
                        placeholder="name"
                    />
                    <input
                        value={email}
                        name="email" required
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                    />
                    <textarea
                        value={message}
                        name="message" required
                        onChange={handleInputChange}
                        type="message"
                        placeholder="your message"
                    ></textarea>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form
