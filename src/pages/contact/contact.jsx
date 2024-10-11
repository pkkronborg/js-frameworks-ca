import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
        fullName: yup.string().min(3).required(),
        subject: yup.string().min(3).required(),
        email: yup.string().email().required(),
        body: yup.string().min(3).required()
    }).required();

function Contact() {

    const { register, handleSubmit,  formState: { errors } } = useForm({resolver: yupResolver(schema)});

    function onSubmit(data) {
        console.log(data);
    }
        
    return (
    <div className="d-flex justify-content-center align-items-center">
        <div className="w-50">
        <h1 className="text-center mt-5">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Full name</label>
                <input className="form-control" {...register('fullName')} />
                <p className="text-danger">{errors.fullName?.message}</p>
            </div>
            <div className="form-group">
                <label>Subject</label>
                <input className="form-control" {...register('subject')} />
                <p className="text-danger">{errors.subject?.message}</p> 
            </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" {...register('email')} />
                <p className="text-danger">{errors.email?.message}</p> 
            </div>
            <div className="form-group">
                <label>Body</label>
                <input className="form-control" {...register('body')} />
                <p className="text-danger">{errors.body?.message}</p> 
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <input className="btn btn-primary" type="submit" />
            </div>
        </form>
        </div>
    </div>
    )
}

export default Contact;