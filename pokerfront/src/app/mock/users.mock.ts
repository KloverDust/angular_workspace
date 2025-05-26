export interface User {
    username: string;
    password: string;
}

export const USERS: User[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'admin', password: 'admin123' }
]; 