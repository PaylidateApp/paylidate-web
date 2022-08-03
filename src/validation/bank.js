const buySchema = {
    bank_code: [val => val && val.length > 2 || 'Please select a your bank'],
    acc_num: [val => val && val.length == 10 || 'Account number must be 10 digit'],

}

export default buySchema;