import * as Yup from 'yup';

export default function UserValidation(props) {
    const ProductSchema = Yup.object()
        .shape({
            name: Yup.string().lowercase().required(),
            phone: Yup.number().default(0).required(),
        })
    // .when((values, ProductSchema) => {
    //     if (user?.id > 0 ? 0 : 1) {
    //         return ProductSchema.shape({
    //             password: Yup.string().required('Password is required').min(6),
    //         });
    //     }
    // });

    return ProductSchema;
}
