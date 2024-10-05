const ErrorMessage = () => {
  // let foodItems = [];
  let foodItems = ["Vegetables", "fruits", "meat", "egg", "fish", "Dal"];

  return <>{foodItems.length === 0 ? <h3>Food list not found!!!</h3> : null}</>;
};

export default ErrorMessage;
