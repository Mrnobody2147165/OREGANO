import './css/Form.css'
import React from 'react'
// @ts-expect-error this type is not refered
import { db } from '../FireBase Database/firebase.js';
import { addDoc, collection } from "firebase/firestore"
import Toast from './Toast'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Form = () => {
    const tl = gsap.timeline();
    useGSAP(() => {
        tl.from('.input-1',{
            x:-1000,
            duration:1.1,
            delay:2,
        })
        tl.from('.input-2',{
            x:-1000,
            duration:1.1,
        })
        tl.from('.input-3',{
            x:-1000,
            duration:1.1,
        })
        tl.from('.input-4',{
            x:-1000,
            duration:1.1,
        })
        tl.from('.input-5',{
            x:-1000,
            duration:1.1,
        })
    });

    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [phonenumber, setPhoneNumber] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');
    const [toast, setToast] = React.useState<{ id: number, message: string, type: string }[]>([]);

    const nextID = React.useRef(0);

    const ContactCollectionRef = collection(db, "Contacts");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const addToast = (message: string, type = 'info') => {
        const newToast = { id: nextID.current++, message, type };
        setToast((prevToasts) => [...prevToasts, newToast]);
    };

    const removeToast = (id: number) => {
        setToast((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    const addDataToFireStore = async (e: React.FormEvent) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');

        if (!name || !email || !message) {
            addToast("Please fill all required fields.", "alert");
            return;
        }

        try {
            await addDoc(ContactCollectionRef, {
                Name: name,
                Email: email,
                PhoneNumber: phonenumber,
                Message: message,
            });
            addToast("FeedBack Submitted !", "success");
        } catch (e) {
            addToast("Error adding data", "error");
            console.log('Error: ' + e);
        }
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={addDataToFireStore}>
                <input className='input-1' onChange={handleNameChange} type="text" placeholder='Name' value={name} />
                <input className='input-2' onChange={handleEmailChange} type="email" placeholder='E-mail' value={email} />
                <input className='input-3' onChange={handlePhoneNumber} type="number" placeholder='Number' value={phonenumber} />
                <textarea onChange={handleMessageChange} className='contact-textarea input-4' name="message" id="message" placeholder='Message' value={message}></textarea>
                <button className='input-5' type="submit">Submit <img src="../../public/Send icon.png" alt="" /></button>
            </form>
            <div className="toast-container">
                {toast.map((t) => (
                    <Toast
                        key={t.id}
                        id={t.id}
                        message={t.message}
                        type={t.type}
                        onClose={removeToast}
                    />
                ))}
            </div>
        </div>
    )
}

export default Form