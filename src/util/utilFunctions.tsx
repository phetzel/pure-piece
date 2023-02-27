// validations
export const isValidEmail = (email: string): boolean => {
  const regex: RegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regex.test(email);
};

// format cents into dollars
export const formatPrice = (cents: number) => {
  return (cents / 100).toFixed(2);
};
