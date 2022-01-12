const buySchema = {
    name: [ val => val && val.length > 4 || 'Please type your Product Name'],
    quantity: [ val => val && val > 0 || 'Please add the Quantity'],
    unit: [ val => val && val > 100 || 'Amount must be greater than 100'],
    loadingInfo:{
        message: 'Hold on, you are Creating your Product',
        spinnerColor: 'secondary'
      }
}

export default buySchema;
