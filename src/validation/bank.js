const buySchema = {
    bank_code: [val => val && val.length > 2 || 'Please select a your bank'],
    acc_num: [val => val && val.length == 10 || 'Account number must be 10 digit'],
    wit_pin: [val => val && val.length == 6 || 'Withdrawal pin must be 6 digit'],
    bvn: [val => val && val.length == 11 || 'BVN must be 11 digit'],

}

export default buySchema;