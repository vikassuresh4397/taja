const getName = (firstName: string, lastName?: string): string => {
    if (lastName) {
      return `${firstName} ${lastName}`;
    } else {
      return firstName;
    }
  }
  
  export default getName;
  