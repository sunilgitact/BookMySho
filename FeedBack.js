import React from 'react'
import emailjs from 'emailjs-com';

const FeedBack = () => {




    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    <script src='https://smtpjs.com/v3/smtp.js'></script>


    // function SendMail() { 
    //     Email.send({
    //         Host : "smtp.gmail.com",
    //         Username : "tcs.sunils@gmail.com",
    //         Password : "Sunil@1234",
    //         To : 'tcs.sunils@gmail.com',
    //         From : document.getElementById('Email').value,
    //         Subject : "This is the subject",
    //         Body : "And this is the body"
    //     }).then(
    //       message => alert(message)
    //     );
        
    // }



    return (
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
    }

//   return (
//     <>
//     <div id='Container'>
//         <form onSubmit={SendMail} return false >
//             <h3>Send Your FeedBack</h3>
//             <input type="text"  id='Fname' placeholder='Enter Your Name' required/>
//             <input type="email"  id='Email' placeholder='Enter Your Email' required/>
//             <input type="number"  id='number' placeholder='Enter Your Number' required/>
//             <textarea  id="message" cols="30" rows="8" placeholder='Please Shear you FeedBack'></textarea>
//             <button type='submit'>submit</button>
//         </form>


        


//     </div>
//     </>
//   )
// }

export default FeedBack