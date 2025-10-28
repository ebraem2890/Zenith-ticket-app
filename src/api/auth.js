export function mockLogin({ email, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email && password && password.length >= 4) {
                const fakeToken = btoa(`${email}:${Date.now()}`)
                const user = { email, name: email.split('@')[0] || 'User' }
                resolve({ token: fakeToken, user })
            } else {
                reject({ message: 'Invalid credentials' })
            }
        }, 600)
    })
}


export function mockLogout() {
    return new Promise((resolve) => setTimeout(() => resolve(true), 200))
}