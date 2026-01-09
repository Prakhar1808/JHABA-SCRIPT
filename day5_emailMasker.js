function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const localPart = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  
  // Keep first and last character of local part
  if (localPart.length <= 1) {
    return localPart + domain;
  }
  
  const firstChar = localPart[0];
  const lastChar = localPart[localPart.length - 1];
  const maskedMiddle = "*".repeat(localPart.length - 2);
  return firstChar + maskedMiddle + lastChar + domain;
}

let email="prakhar@email.com";
console.log(maskEmail(email));
