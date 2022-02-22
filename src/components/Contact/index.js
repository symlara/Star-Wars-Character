import React from 'react';
// import { validateEmail } from '../../utils/helpers';


function Contact() {
    return (
        <div class="pa3 pa5-ns" id="contact">
        <h1 class="f3 f2-m f1-l">Lets Connect!</h1>
        <div class="f5 lh-copy measure-narrow">
          <ul>
            <li>
              <a class="dim" href="mailto:asym14@gmail.com">Email</a>
            </li>
            <li>
              <a class="dim" href="LinkedIn: https://www.linkedin.com/in/aaliyah-symlar-931213102">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    )

}


export default Contact;


















// function ContactForm() {
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//     const { name, email, message } = formState;

//     const [errorMessage, setErrorMessage] = useState('');

//     function handleChange(e) {
//       if (e.target.name === 'email') {
//           const isValid = validateEmail(e.target.value);
//           console.log(isValid);
//           // isValid conditional statement
//           if(!isValid) {
//               setErrorMessage('Your email is invalid.');
//           }else {
//               setErrorMessage('');
//           }
//       }else {
//           if (!e.target.value.length) {
//               setErrorMessage(`${e.target.name} is required.`);
//           }else {
//               setErrorMessage('');
//           }
//       }
//       if (!errorMessage) {
//         setFormState({...formState,  [e.target.name]: e.target.value })
//         // console.log('errorMessage', errorMessage);
//       }
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(formState);
//         alert("Your information has been submitted!")
//       }
    
//     return (
//         <section>
//             <h1 id="contact-me">Contact me</h1>
//             <form id="contact-form" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name" className="name">Name:</label>
//                     <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="email" className="email">Email address:</label>
//                     <input type="email" name="email" defaultValue={email}  onBlur={handleChange} />
//                 </div>
//                 <div> 
//                     <label htmlFor="message" className="message">Message:</label>
//                     <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//                     </div>

//                     {errorMessage && (
//                         <div>
//                             <p className="error-text">{errorMessage}</p>
//                         </div>
//                     )}
//                     <button type="submit">Submit</button>
//             </form>
//         </section>
//     )

// }

// export default ContactForm;