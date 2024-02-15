export function isAuthenticated() {
    if (typeof window !== 'undefined') {
      const currentUser = localStorage.getItem('currentUser');
      return currentUser !== null;
    }
    return false; // Return false if localStorage is not available
  }
if (isAuthenticated()) {
    console.log('User is authenticated.');
} else {
    console.log('User is not authenticated.');
}
