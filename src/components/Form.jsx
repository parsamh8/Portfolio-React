import { useState } from 'react';

function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'userName') {
            setUserName(value);
        } else {
            setMessage(value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Prepare the form data to be sent
        const formData = new FormData();
        formData.append('access_key', '7fd63e3d-ec66-4bc4-ae1c-590dad675148'); // Replace 'your_access_key_here' with your actual access key from Web3Forms
        formData.append('email', email);
        formData.append('name', userName);
        formData.append('message', message);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for your message. Parsa will contact you soon.');
                setUserName('');
                setMessage('');
                setEmail('');
            } else {
                setErrorMessage('Failed to send message.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            setErrorMessage('Failed to send message.');
        });
    };

    return (
        <div>
            <div style={{paddingLeft: 23}} className="container text-center contact-me-form">
                <form className="form" onSubmit={handleFormSubmit}>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                        required
                    />
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="name"
                        required 
                    />
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        placeholder="your message"
                        required
                    /><br/>
                    <button type="submit">Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Form;
