'use client';
import { useFormik } from "formik"
import * as yup from 'yup';

export default function ContactTab(){
    const initialvalues = {
        name: '',
        email: '',
        secondName: '',
        website: '',
        message: ''
    }
    const validationSchema = yup.object({
        name: yup.string().required('Name is required!'),
        email: yup.string().email('Invalid email').required('Email is required!'),
        secondName: yup.string(),
        website: yup.string(),
        message: yup.string().required('Message is required!')
    })
    const formik = useFormik({
        initialValues: initialvalues,
        validationSchema: validationSchema,
        onSubmit: (values)=>{
            console.log(values)
        }
    })

    return(
        <div
            className="md:grid grid-cols-7 items-start gap-[5rem]"
        >
            <div
                className="md:col-span-5 mb-6 md:mb-0"
            >
                <h3
                    className="capitalize font-heading text-[1rem] md:text-xl mb-6"
                >
                    say hello!
                </h3>
                <form 
                    onSubmit={formik.handleSubmit}
                    
                >
                    <div
                        className="flex flex-wrap gap-[4%] gap-y-1 items-center mb-2"
                    >
                        <div
                            className="w-[48%] relative"
                        >
                            <input
                                type="text"
                                className="w-full mb-6 py-2 px-4 block border border-secondaryColor-100 rounded outline-none focus:border-primaryColor transition duration-300 ease-linear"
                                name="name" 
                                placeholder="Name*"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.name && formik.touched.name &&
                                <div
                                    className="text-primaryColor text-sm absolute left-0 bottom-1"
                                >
                                    {formik.errors.name}
                                </div>
                            }
                        </div>
                        <div
                            className="w-[48%] relative"
                        >
                            <input
                                type="text"
                                className="w-full mb-6 py-2 px-4 block border border-secondaryColor-100 rounded outline-none focus:border-primaryColor transition duration-300 ease-linear"
                                name="secondName" 
                                placeholder="Second Name"
                                value={formik.values.secondName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.secondName && formik.touched.secondName &&
                                <div
                                    className="text-primaryColor text-sm absolute left-0 bottom-1"
                                >
                                    {formik.errors.secondName}
                                </div>
                            }
                        </div>
                        <div
                            className="w-[48%] relative"
                        >
                            <input
                                type="text"
                                className="w-full mb-6 py-2 px-4 block border border-secondaryColor-100 rounded outline-none focus:border-primaryColor transition duration-300 ease-linear"
                                name="email" 
                                placeholder="Email*"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email &&
                                <div
                                    className="text-primaryColor text-sm absolute left-0 bottom-1"
                                >
                                    {formik.errors.email}
                                </div>
                            }
                        </div>
                        <div
                            className="w-[48%] relative"
                        >
                            <input
                                type="text"
                                className="w-full mb-6 py-2 px-4 block border border-secondaryColor-100 rounded outline-none focus:border-primaryColor transition duration-300 ease-linear"
                                name="website" 
                                placeholder="Website"
                                value={formik.values.website}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.website && formik.touched.website &&
                                <div
                                    className="text-primaryColor text-sm absolute left-0 bottom-1"
                                >
                                    {formik.errors.website}
                                </div>
                            }
                        </div>
                        <div
                            className="w-[100%] relative"
                        >
                            <textarea
                                className="w-full h-[8rem] mb-6 py-2 px-4 block border border-secondaryColor-100 rounded outline-none focus:border-primaryColor transition duration-300 ease-linear"
                                name="message" 
                                placeholder="Message*"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.message && formik.touched.message &&
                                <div
                                    className="text-primaryColor text-sm absolute left-0 bottom-1"
                                >
                                    {formik.errors.message}
                                </div>
                            }
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="capitalize py-2 px-4 text-white bg-primaryColor rounded"
                    >
                        submit
                    </button>
                </form>
            </div>
            <div
                className="md:col-span-2"
            >
                 <h3
                    className="capitalize font-heading text-[1rem] md:text-xl mb-6"
                >
                    contacts
                </h3>
                <div
                    className="mb-4"
                >
                    <span
                        className="block mb-2 capitalize"
                    >
                        main office:
                    </span>
                    <span
                        className="block mb-2 text-secondaryColor-100"
                    >
                        Address: 1600 Pennsylvania Ave NW, Washington, DC 20500
                    </span>
                    <span
                        className="block mb-2 text-secondaryColor-100"
                    >
                        Phone: +990 312 123 45 67
                    </span>
                    <span
                        className="block mb-2 text-secondaryColor-100"
                    >
                        Email: hello@domain.com
                    </span>
                </div>
                <div
                    className="mb-4"
                >
                    <span
                        className="block mb-2 capitalize"
                    >
                        secondary office:
                    </span>
                    <span
                        className="block mb-2 text-secondaryColor-100"
                    >
                        Address: 1600 Pennsylvania Ave NW, Washington, DC 20500
                    </span>
                    <span
                        className="block mb-2 text-secondaryColor-100"
                    >
                        Phone: +990 312 123 45 67
                    </span>
                    <span
                        className="block mb-2 text-secondaryColor-100"
                    >
                        Email: hello@domain.com
                    </span>
                </div>
                <div
                    className="mb-4"
                >
                    <span
                        className="block mb-2 capitalize"
                    >
                        business hours:
                    </span>
                    <span
                        className="block mb-2 text-secondaryColor-100"
                    >
                        Monday - Friday: 08:00 - 17:59
                    </span>
                    <span
                        className="block mb-2 text-secondaryColor-100"
                    >
                        Saturday - Sunday: 09:00 - 13:59
                    </span>
                </div>
            </div>
        </div>
    )
}