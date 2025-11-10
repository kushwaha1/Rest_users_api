// Validation middleware for POST /user and PUT /user/:id
// POST: all fields required
// PUT: fields optional (only provided fields validated)

function validateUser(req, res, next) {
    const { firstName, lastName, age, hobby } = req.body;
    const errors = [];

    const isPost = req.method === 'POST'; // check if request is POST

    if (isPost) {
        // POST: all fields must be present and valid
        if (typeof firstName !== 'string' || !firstName.trim()) 
            errors.push('firstName is required and must be a non-empty string');
        if (typeof lastName !== 'string' || !lastName.trim()) 
            errors.push('lastName is required and must be a non-empty string');
        if (typeof hobby !== 'string' || !hobby.trim()) 
            errors.push('hobby is required and must be a non-empty string');
        if (age === undefined || !Number.isInteger(age) || age < 0 || age > 120) 
            errors.push('age is required and must be an integer between 0 and 120');
    } else {
        // PUT: validate only fields that are provided
        if (firstName !== undefined && (typeof firstName !== 'string' || !firstName.trim())) 
            errors.push('firstName must be a non-empty string if provided');
        if (lastName !== undefined && (typeof lastName !== 'string' || !lastName.trim())) 
            errors.push('lastName must be a non-empty string if provided');
        if (hobby !== undefined && (typeof hobby !== 'string' || !hobby.trim())) 
            errors.push('hobby must be a non-empty string if provided');
        if (age !== undefined && (!Number.isInteger(age) || age < 0 || age > 120)) 
            errors.push('age must be an integer between 0 and 120 if provided');
    }

    // If any validation errors, return 400 with error details
    if (errors.length) {
        return res.status(400).json({ 
            statusCode: 400, 
            error: 'Invalid input', 
            details: errors 
        });
    }

    // Continue to controller if validation passes
    next();
}

export default validateUser;