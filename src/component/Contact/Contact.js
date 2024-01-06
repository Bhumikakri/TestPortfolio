import './contact.css';

const Contact = () => {

    const copyToClipboard = () => {
        const email = 'oktayshakirov@gmail.com'; // Replace this with your email
    
        try {
          navigator.clipboard.writeText(email);
          alert(`Email '${email}' copied to clipboard`);
        } catch (error) {
          console.error('Error copying to clipboard:', error);
          alert('Failed to copy to clipboard. Please copy the email manually.');
        }
      };

  return <div className='Contact'>
   <div className='Contactcontainer'>
    <h1>Email:</h1>
    <div className='email'>oktayshakirov@gmail.com<button onClick={copyToClipboard}>copy</button></div>
   </div>
   <div className='Contactcontainer'>
   <h1>Schedule Video Call With Me:</h1>
   <img src="https://oktayshakirov.com/assets/images/calendar.png" />
   </div>
   <div className='Contactcontainer'>
    <h1>Socials:</h1>
    <div style={{display:"flex",gap:"0.5rem"}}>
        <img src="https://oktayshakirov.com/assets/images/socials/github.png" />
        <img src="https://oktayshakirov.com/assets/images/socials/linkedin.png" />
        <img src="https://oktayshakirov.com/assets/images/socials/instagram.png" />
        <img src="https://oktayshakirov.com/assets/images/socials/twitter.png" />
    </div>
   </div>
   <div className='Contactcontainer'>
    <h1>Support My Work:</h1>
    <p>Your support fuels my development journey! With every small donation, you contribute to hostings, domains and other essential costs. All my work is open source and free for everyone to use.</p>
    <button className='Bttn' style={{backgroundColor:"#FFDC01"}}>Buy me a coffee</button>
    <button className='Bttn'>GitHub Sponsors</button>
    <button className='Bttn'><i class="fa-brands fa-paypal"></i><i class="fa-brands fa-cc-paypal"></i></button>
   </div>
  </div>;
};

export default Contact;
