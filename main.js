const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        }
    },
    day: {
        presence: true,
        numericality: {
            lessThan: 32
        }
    },
    month: {
        presence: true,
        numericality: {
            lessThan: 13
        }
    },
    year: {
        presence: true,
        numericality: {
            lessThan: 2021
        }
    }
}


const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            errors: null,
            day: null,
            month: null,
            year: null,
            submitComplete: false,
            img: "images/Me.jpg"
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname,
                age: this.age,
                gender: this.gender,
                email: this.email,
                phone: this.phone,
                day: this.day,
                month: this.month,
                year: this.year
            },
                constraints)
            if (!this.errors) {
                alert("Registered successfully.")
                this.submitComplete = true;
            }
        },
        submitForm() {
            if (this.submitComplete) {
                alert("Your profile is updated successfully.")
            }else {
                alert("Your profile is not update, please check your profile")
            }
        }
    }
})

app.mount('#app')