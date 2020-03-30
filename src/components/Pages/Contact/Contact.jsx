// Henter react
import React from 'react';
// Henter form hook fra NPM React-hook-form
import { useForm, ErrorMessage } from "react-hook-form";

const Form = props => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        console.log(values);
    }

    return (
        <div>
            <h1>Kontakt os</h1>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            name="email" 
                            ref={register({
                                required: "Nødvendig",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address"
                                }
                            })} 
                        />
                        <ErrorMessage errors={errors} name={"email"}>
                            {({message}) => <span>{message}</span>}
                        </ErrorMessage>
                    </div>

                    <div>
                        <label htmlFor="name">Navn</label>
                        <input 
                            name="name" 
                            ref={register({
                                required: "Nødvendig",
                                pattern: {
                                    validate: value => value !== "admin" || "Nice try!"
                                }
                            })} 
                        />
                        <ErrorMessage errors={errors} name={"name"}>
                            {({message}) => <span>{message}</span>}
                        </ErrorMessage>
                    </div>
                    <button type="submit">Send</button>
                    <br />
                    {props.children}

                </form>
            </section>
        </div>
    )    
}

export default Form;