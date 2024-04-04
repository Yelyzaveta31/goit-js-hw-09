const feedbackFormEl = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input[type='email']");
const messageInput = document.querySelector("textarea[name='message']");


const userData = JSON.parse(localStorage.getItem("feedback-form-state"));
const fillFeedbackField = () => {
    try{
   if (userData === null) {
    return;
   }
   for (const key in userData) {
   feedbackFormEl.elements[key].value = userData[key].trim();
    }
    console.log(userData);
}
catch(err) {
console.log(err);
    }
} ;
fillFeedbackField();

feedbackFormEl.addEventListener('input', () => {
    const userData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  });


  feedbackFormEl.addEventListener('submit', event => {
    event.preventDefault();
    const userData =
    JSON.parse(localStorage.getItem('feedback-form-state'));
    if (userData.email.trim() !== '' && userData.message.trim() !=='') {
      console.log(userData);
      localStorage.removeItem('feedback-form-state');
      emailInput.value = '';
      messageInput.value = '';
      alert('Thank you for your feedback!');
    } else {
      alert('Please fill in all fields.');
    }
  });