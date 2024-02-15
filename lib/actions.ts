export async function authenticate(formData: { email: string; password: string }): Promise<boolean> {
    const { email, password } = formData;

    try {
        if (email === 'admin@gmail.com' && password === 'admin') {
            localStorage.setItem('currentUser', email);
            return true; 
        } else {
            throw new Error('Invalid credentials.');
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}