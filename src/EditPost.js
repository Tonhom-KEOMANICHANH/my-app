import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import App from "./App";
import Swal from "sweetalert2";
const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";

const EditPost = () => {
    const [editPost, setEditPost] = useState("");
    const [postDetail, setPostDetail] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(`${API_URL}/posts/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setPostDetail(response.data.data.post);
                setEditPost(response.data.data.post.content);
            } catch (error) {
                Swal.fire("Error", "Failed to fetch post", "error");
            }
        };
        fetchPosts();
    }, [id]);

    const handleEdit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.patch(
                `${API_URL}/posts/${id}`,
                { content: editPost },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            Swal.fire("success", "post update successfully", "success");
        } catch (error) {
            Swal.fire("Error",error?.response?.data?.message ?? "Failed to update post", "error");
        }
    }

    return (
        <div>
            <h2>Edit post ໄອດີ: {id}</h2>
            <h4>ຜູ້ຂຽນ: {postDetail?.author?.first_name} {postDetail?.author?.surname}</h4>
            <form onSubmit={handleEdit}>
                <textarea
                    value={editPost}
                    onChange={(e) => setEditPost(e.target.value)}
                    cols={30}
                    rows={10}
                    placeholder="ແກ້ໄຂໂພສຂອງທ່ານ"
                ></textarea>
                <button type="submit">ອັບເດດໂພສ</button>
            </form>
            <button>ກັບຄືນ</button>
        </div>
    );
};

export default EditPost