import { useState } from "react"
const Samplelist = () => {
    const fruits = ["ໝາກກ້ວຍ", "ໝາກເງາະ", "ໝາກມ່ວງ", "ໝາກກ້ຽງ"]
    return (
        <div>
            <h2>ລາຍການໝາກໄມ້</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}> {index + 1}. {fruit}</li>
                ))}
            </ul>
        </div>
    )
}

const ASEANCounties = () => {
    const countries = [
        'ລາວ',
        'ໄທ',
        'ຫວຽດນາມ',
        'ກໍາປູເຈ້ຍ',
        'ມຽນມາ',
        'ສິງກະໂປ',
        'ມາເລເຊຍ',
        'ອິນໂດເນເຊຍ',
        'ຟິລິບປິນ',
        'ບຣູໄນ',
    ];
    return (
        <div>
            <h2>ປະເທດອາຊ້ຽນ</h2>
            <ul>
                {countries.map((countries, index) => (
                    <li key={index}> {index + 1}. {countries}</li>
                ))}
            </ul>
        </div>
    )
}

const StudentList = () => {
    const students = [
        {
            name: "ສົມສະນຸກ",
            class: "C1",
            gender: "MALE"
        },
        {
            name: "ສົມຫວັງ",
            class: "A1",
            gender: "MALE"
        },
        {
            name: "ສົມສີ",
            class: "A1",
            gender: "FEMALE"
        },
    ]
    return (
        <div>
            <h2>ລາຍຊື່ນັກຮຽນ</h2>
            <ul>
                {students
                    .filter(
                        (student) => student.class === "A2" && student.gender == "FEMALE"
                    )
                    .map((student, index) => (
                        <li key={index}>
                            {index + 1}. {student.name}, ຫ້ອງ {student.class}
                        </li>
                    ))}
            </ul>
        </div>
    )
}

const TodoList = (onSubmit) => {
    const [todos, setTodos] = useState([
        {
            text: "ຮຽນ Reac",
            completed: false,
        },
        {
            text: "ສ້າງ Reac",
            completed: false,
        },
        {
            text: "ຝຶກຫັດໃຊ້ Reac",
            completed: true,
        },
    ]);
    const [newTodo, setNewTodo] = useState('');

    const onToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos)
    };

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
    };

    return (
        <div>
            <h2>ລາຍການສິ່ງທີ່ຕ້ອງເຮັດ</h2>
            <form onSubmit={addTodo}>
                <input
                    onChange={(event) => setNewTodo(event.target.value)}
                    value={newTodo}
                    type="text"
                    placeholder="ເພີ້ມລາຍການໃໝ່..."
                ></input>
                <button type="submit">ເພີ້ມ</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        onClick={() => onToggleTodo(index)}
                        key={index}
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % images.length
        );
    };
    const preSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };
    return (
        <div className="carousel">
            <h2>Image caroulsel</h2>
            <button className="carousel-button prev" onClick={preSlide}>
                &#10094;
            </button>
            {images.map((image, index) => (
                <img
                    src={image}
                    key={index}
                    alt={`Slide ${index + 1}`}
                    className={`carousel-image ${index === currentIndex ? "active" : ""}`}
                ></img>
            ))}
            <button className="carousel-button next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

const Day5 = () => {
    const carouselImages = [
    'https://th.bing.com/th?id=OIP.-15_9rp1nRdFBCqLgpdtTgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    'https://th.bing.com/th/id/OIP.GmLqFon0NnPC-HhEh-fVLgAAAA?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.c22e3cc001b5e3ed75a0e3b033991abd?rik=EinfiKR%2bdo1%2bpQ&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fphotos%2f1600000%2fPics-from-the-zoo-animals-1674822-2560-1920.jpg&ehk=PRn0SpEc3Prd%2bMRUTd2PbLTEJPqajjY6Sm1H%2bBGSvZ8%3d&risl=&pid=ImgRaw&r=0',
    ]
    return (
        <div className="container">
            <h2>ການສອນ List ແລະ key ໃນ react</h2>
            <hr></hr>
            <Samplelist></Samplelist>
            <hr></hr>
            <ASEANCounties></ASEANCounties>
            <hr></hr>
            <StudentList></StudentList>
            <hr></hr>
            <TodoList></TodoList>
            <hr></hr>
            <ImageCarousel images={carouselImages}></ImageCarousel>
            <style jsx> {`
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    min-height: 100vh;
                    backgroud-color: white;
                    text-align: start;
                    font-family: Phetsarath OT;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    margin-bottom: 10px;
                    padding: 10px;
                    background-color: #f0f0f0;
                    border-radius: 5px;
                }
                button {
                    margin-left: 10px;
                    cursor: pointer;
                    padding: 5px 10px;
                    background-color: #ff4444;
                    color: white;
                    border: 10px;
                    border-radius: 3px;
                }
                hr {
                    color: black;
                    width: 100%;
                }
                .carousel {
                    position: relative;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .carousel-image {
                    width: 100%;
                    height: auto;
                    display: none;
                }
                    .carousel-image.active {
                        display: block;
                    }
                .carousel-button {
                    position: absolute;
                    top: 50%
                    transaform: translateY(-50%);
                    background=color: rgba(0, 0, 0, 0.5);
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    cursor: pointer;
                    font-size: 18px;
                }
                .prev {
                    left: 10px;
                }
                .next {
                    right: 10px;
                }
            `}
            </style>
        </div>
    );
};

export default Day5;