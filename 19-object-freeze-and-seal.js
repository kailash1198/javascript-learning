const student = {
    firstName : 'Kailash',
    lastName :'Kumar'
}

console.log(student.firstName)

Object.seal(student)
Object.freeze(student)
student.lastName='Aryan'

console.log(student.lastName)