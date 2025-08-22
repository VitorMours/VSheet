import { Fragment, useState } from "react";

export default function Signin() {
    const [submitted, setSubmitted] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Aqui você pode adicionar a lógica de validação e submissão real
    };

    const inputClasses = `input input-bordered w-full ${submitted ? 'valid:border-green-500 invalid:border-red-500' : ''}`;

    return (
        <Fragment>
            <div className="text-center mb-5">
                <h1 className="text-3xl font-bold">Sign in<br></br></h1>
            </div>
            <div className="card w-full max-w-lg shadow-xl bg-base-100">
                <form onSubmit={handleLogin}>
                    <div className="card-body">
                        <div className="flex flex-row">
                            <div className="form-control mr-2">
                                <label className="label">
                                    <span className="label-text py-1">First Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <div className="form-control ml-2">
                                <label className="label">
                                    <span className="label-text py-1">Last Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className={inputClasses}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text py-1">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="your.email@email.com"
                                className={inputClasses}
                                required
                            />
                        </div>
                        <div className="form-control ">
                            <label className="label ">
                                <span className="label-text py-1">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className={inputClasses}
                                required
                                minLength={6}
                            />
                        </div>
                        <div className="form-control ">
                            <label className="label ">
                                <span className="label-text py-1">Type your password again</span>
                            </label>
                            <input
                                type="password"
                                placeholder="re-type your password"
                                className={inputClasses}
                                required
                                minLength={6}
                            />
                        </div>
                        <div className="form-control mt-6 w-full">
                            <button className="btn btn-primary w-full" type="submit">Starting a new journey...</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}