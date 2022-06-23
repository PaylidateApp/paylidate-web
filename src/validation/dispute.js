const buySchema = {
    subject: [val => val && val.length > 2 || 'Please type a valid subject'],
    description: [val => val && val.length > 5 || 'Please explain you dipute very well'],

}

export default buySchema;