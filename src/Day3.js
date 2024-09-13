import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        birth: "",
        address: "",
        email: "",
        gender: "",
        message: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((preData) => ({
            ...preData,
            [name]: value,
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(
            formData.name == "" ||
            formData.surname == "" ||
            formData.birth == "" ||
            formData.address == "" ||
            formData.email == "" ||
            formData.gender == ""
        ) {
            Swal.fire({
                title: "ກຸລຸນາພີມຊື່ຂອງທ່ານເຂົ້າລະບົບ?",
                text: "ບໍ່ດັ່ງນັ້ນ ຈະບໍ່ສາມາດສົ່ງໄດ້",
                icon: "ຄໍາຖາມ",
                confirmButtonText: 'warning',
                cancelButtonText: 'ຍົກເລີກ',
            });
            return
        }
        // ຖາມລູກຄ້າວ່າຈະສົ່ງຂໍ້ມູນແທ້ບໍ?
        const isSubmit = await Swal.fire({
            title: "ທ່ານຈະສົ່ງຂໍ້ມູນແທ້ບໍ?",
            text: "ຂໍ້ມູນຂອງທ່ານຈະຖືນໍາສົ່ງເຂົ້າລະບົບຫຼັງບ້ານ",
            icon: "ຄໍາຖາມ",
            confirmButtonText: 'ຕົກລົງ',
            cancelButtonText: 'ຍົກເລີກ',
            showCloseButtonText: true,
            showCancelButton: true
        });
        
        onSubmit(formData);
        setFormData ({
            name: "",
            surname: "",
            birth: "",
            address: "",
            gender: "",
            message: "",
        });
        // swal.fire({
        //     title: "ສໍາເລັດ",
        //     text: "ຂໍ້ມູນຂອງທ່ານໄດ້ຖືກສົ່ງສໍາເລັດແລ້ວ",
        //     icon: "success",
        //     confirmButtonText: 'ຕົກລົງ'
        // })
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="ຊື່" required></input>
            <input onChange={handleChange} value={formData.surname} type="text" name="surname" placeholder="ນາມສະກຸນ" required></input>
            <input onChange={handleChange} value={formData.birth} type="date" name="birth" placeholder="ວັນເກີດ" required></input>
            <input onChange={handleChange} value={formData.address} type="text" name="address" placeholder="address" required></input>
            <input onChange={handleChange} value={formData.email} type="email" name="email" placeholder="ອີແມວ" required></input>
            <select onChange={handleChange} value={formData.gender} name="gender" required>
                <option value="">ເລືຶອກເພດ</option>
                <option value="ຊາຍ">ຊາຍ</option>
                <option value="ຍິງ">ຍິງ</option>
                <option value="ອື່ນໆ">ອື່ນໆ</option>
            </select>
            <textarea onChange={handleChange} value={formData.message} name="message" placeholder="ຂໍ້ຄວາມ" required></textarea>
            <button type="submit">ສົ່ງ</button>
        </form>
    );
};

const Day3 = () => {
    const [submissions, setSubmissions] = useState([]);
    const handleSubmit = (formData) => {
        setSubmissions([...submissions, formData]);
    }
    return (
        <div className="container">
            <Form onSubmit={handleSubmit}></Form>
            <div className="submissions">
                <h3>ຂໍ້ມູນທີ່ໄດ້ຮັບ</h3>
                {submissions.map((ss, index) => (
                    <div classname="submissions-item">
                        <p>
                            <strong>ຊື່: </strong> {ss.name}
                        </p>
                        <p>
                            <strong>ນາມສະກຸນ: </strong> {ss.surname}
                        </p>
                        <p>
                            <strong>ວັນເດືອນປີເກີດ: </strong> {ss.birth}
                        </p>
                        <p>
                            <strong>ທີ່ຢູ່: </strong> {ss.address}
                        </p>
                        <p>
                            <strong>ອີແມວ: </strong> {ss.email}
                        </p>
                        <p>
                            <strong>ເພດ: </strong> {ss.gender}
                        </p>
                        <p>
                            <strong>ຂໍ້ຄວາມ: </strong> {ss.message}
                        </p>

                    </div>
                ))}

            </div>
            <style jsx>
                {`
                 .container {
                    min-height: 100vh;
                    padding: 20px;
                    max-width: 600px;
                    text-align: center;
                    margin: 0 auto;
                }
                .form {
                    display: flex;
                    flex-direction: column;
                    width: 300px;
                    padding: 20px;
                    background-color: orange;
                    border-radius: 8px;
                    box-shadow : 0 0 10px rgba (0, 0, 0, 0.1);
                    margin-bottom: 20px
                }
                .form input, 
                .form textarea,
                .form select {
                    margin: 10px 0;
                    padding: 10px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                    font-size: 16px;
                }
                .form textarea {
                    min-height: 100px;
                    resize: vertical;
                }
                .form button {
                    margin: 10px 0;
                    padding: 10px;
                    background-color: #4CAF50;
                    color: black;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                }
                .submissions {
                    width: 100%;
                    max-width: 500px;
                    margin-top: 20px;
                    text-align: center;
                    background-color: green;
                    }
                .submissions-item {
                    background-color: green;
                    border-radius: 8px;
                    padding: 15px;
                    margin-bottom: 15px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                }
                `}
            </style>
        </div>
    );
};

export default Day3;