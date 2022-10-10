/**
 * In the following React template, create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. 
 * Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered.
 * This way the application can function as a simple phone book. 
 * When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:
 * 
    First name = Coder
    Last name = Byte
    Phone = 8885559999
 * 
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
    table: {
        borderCollapse: "collapse"
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px'
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
} as const;

function PhoneBookForm({ addEntryToPhoneBook }) {

		const initialContactForm = {
			userFirstname: 'Coder',
			userLastname: 'Byte',
			userPhone: '8885559999'
		}

		const [contactForm, setContactForm] = useState(initialContactForm);
		
		const handleChange = e => setContactForm(oldContactForm => ({...oldContactForm, [e.target.name] : e.target.value}));

		const handleSubmit = e => {
			e.preventDefault();
			addEntryToPhoneBook(oldContacts => [...oldContacts, contactForm].sort((a, b) => a.userLastname.localeCompare(b.userLastname)));
		}

    return (
			<form onSubmit={handleSubmit} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstname'
                type='text'
								value={contactForm.userFirstname}
								onChange={handleChange}
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastname'
                type='text'
								value={contactForm.userLastname}
								onChange={handleChange}

            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                type='text'
								value={contactForm.userPhone}
								onChange={handleChange}
            />
            <br />
            <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}

function InformationTable({contacts}) {

    return (
        <table style={style.table} className='informationTable'>
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
						<tbody>
							{contacts.map(contact => (
								<tr key={contact.userPhone}>
									<td style={style.tableCell}>{contact.userFirstname}</td> 
									<td style={style.tableCell}>{contact.userLastname}</td>
									<td style={style.tableCell}>{contact.userPhone}</td>
								</tr>
							))}
						</tbody>
        </table>
    );
}

function Application(props) {
	const [contacts, setContacts] = useState([]);

    return (
        <section>
						<PhoneBookForm addEntryToPhoneBook={setContacts} />
						<InformationTable contacts={contacts} />
        </section>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('test-03')
);