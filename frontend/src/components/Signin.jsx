import { Fragment, useState } from "react";

export default function Signin() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "check_password": ""
    });

    function validateInput(data) {
        if (!data.first_name.trim() || !data.last_name.trim() || data.password == data.check_password) {
            return true;
        }
        return false;
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateInput(formData)) {
            setSubmitted(false);
            setShowModal(true);
            return;
        }
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 5000));
        setSubmitted(true);
        console.log(formData);
        setFormData({
            "first_name": "",
            "last_name": "",
            "email": "",
            "password": "",
            "check_password": ""
        });

        setIsLoading(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const inputClasses = `input input-bordered w-full ${submitted ? 'valid:border-green-500 invalid:border-red-500' : ''}`;

    return (
        <Fragment>
            {isLoading && (
                <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
                    <div className="text-center">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                        <p className="mt-4 text-lg font-semibold">Processing your registration...</p>
                    </div>
                </div>
            )}
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box w-3/4 h-1/4">
                        <h3 className="font-bold text-lg text-error">Erro de Envio</h3>
                        <p className="py-4">Algum campo foi preenchido de maneira errada...</p>
                        <div className="modal-action">
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowModal(false)}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
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
                                    name="first_name"
                                    onChange={handleInputChange}
                                    value={formData.first_name}
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
                                    name="last_name"
                                    onChange={handleInputChange}
                                    value={formData.last_name}
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
                                name="email"
                                onChange={handleInputChange}
                                value={formData.email}
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
                                name="password"
                                onChange={handleInputChange}
                                value={formData.password}
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
                                name="check_password"
                                onChange={handleInputChange}
                                value={formData.check_password}
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