export default function UserInitialValue(data = '') {
    const initialValues = {
        name: data?.name || '123',
        phone: data?.phone || '123',
        address: data?.address || '123',
        email: data?.email || 'email@email.com',
    };
    return initialValues;
}