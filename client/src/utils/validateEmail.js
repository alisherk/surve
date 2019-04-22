const re = /^([a-z\d]+)@([a-z\d]+)\.([a-z]{2,3})$/; 

export default emails => {
  const invalidEmails = emails
    .split(/[ ,]+/)
    .map(email => email.trim())
    .filter(email => !re.test(email))
    .join(',');
   
 
  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
  return null; 
};
