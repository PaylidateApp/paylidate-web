const buySchema = {
    name: [val => val && val.length > 2 || 'Please type your Product Name'],
    quantity: [val => val && val > 0 || 'Please add the Quantity'],
    price: [val => val && val > 50 || 'Amount must be greater than 100'],
    loadingInfo: {
        message: 'Hold on, you are Creating your Product',
        spinnerColor: 'secondary'
    },
    require: [val => !!val || 'Field can not be emty'],
    seller_email: [val => val != 'paylidate@gmail.com' || 'You can not use your email'],
}

export default buySchema;