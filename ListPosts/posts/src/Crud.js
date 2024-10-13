import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { BiSolidComment } from "react-icons/bi";
import { FaBars, FaEdit, FaPlus, FaTrash, FaUsers } from "react-icons/fa";
import { HiViewColumns } from "react-icons/hi2";
import { IoFilter } from "react-icons/io5";
import { MdDownload, MdPostAdd } from "react-icons/md";
import "./posts.css";

const fixed = [
  {
    id: 1,
    title: "Sample Post 1",
    publishedAt: "01/01/2024",
    category: "Lifestyle",
    commentable: true,
  },
  {
    id: 2,
    title: "Sample Post 2",
    publishedAt: "02/02/2024",
    category: "Tech",
    commentable: false,
  },
  {
    id: 3,
    title: "Sample Post 3",
    publishedAt: "03/03/2024",
    category: "Business",
    commentable: true,
  },
];

const Crud = () => {
  const [posts, setPosts] = useState(fixed);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newPost, setNewPost] = useState({
    title: "",
    publishedAt: "",
    category: "",
    commentable: false,
  });
  const [editMode, setEditMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleCreatePost = () => {
    setPosts([...posts, { id: posts.length + 1, ...newPost }]);
    setNewPost({
      title: "",
      publishedAt: "",
      category: "",
      commentable: false,
    });
    setIsModalOpen(false);
  };

  const handleEditPost = () => {
    setPosts(
      posts.map((post) =>
        post.id === selectedPost.id ? { ...selectedPost } : post
      )
    );
    setEditMode(false);
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  const handleDeletePosts = () => {
    setPosts(posts.filter((post) => !selectedIds.includes(post.id)));
    setSelectedIds([]);
  };

  const openEditModal = (post) => {
    setSelectedPost(post);
    setEditMode(true);
    setIsModalOpen(true);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>
            <MdPostAdd /> <span>Posts</span>
          </li>
          <li>
            <BiSolidComment /> <span>Comments</span>
          </li>
          <li>
            <FaBars /> <span>Tags</span>
          </li>
          <li>
            <FaUsers /> <span>Users</span>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="top-actions">
          <input
            type="text"
            className="search-bar"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="buttons">
            <button>
              <HiViewColumns /> Columns
            </button>
            <button>
              <IoFilter />
              Add Filter
            </button>
            <button onClick={() => setIsModalOpen(true)}>
              <FaPlus /> Create
            </button>
            <button onClick={() => handleDeletePosts()}>
              <FaTrash /> Delete
            </button>
            <button>
              <CSVLink
                data={posts}
                filename="posts.csv"
                style={{ textDecoration: "none", color: "#1067c4" }}
              >
                <MdDownload /> Export
              </CSVLink>
            </button>
          </div>
        </div>

        <table className="post-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Id</th>
              <th>Title</th>
              <th>Published At</th>
              <th>Category</th>
              <th>Commentable</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(post.id)}
                    onChange={() => handleCheckboxChange(post.id)}
                  />
                </td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.publishedAt}</td>
                <td>{post.category}</td>
                <td>{post.commentable ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => openEditModal(post)}>
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>{editMode ? "Edit Post" : "Create New Post"}</h3>
              <input
                type="text"
                placeholder="Title"
                value={editMode ? selectedPost?.title : newPost.title}
                onChange={(e) =>
                  editMode
                    ? setSelectedPost({
                        ...selectedPost,
                        title: e.target.value,
                      })
                    : setNewPost({ ...newPost, title: e.target.value })
                }
              />
              <input
                type="date"
                placeholder="Published At"
                value={
                  editMode ? selectedPost?.publishedAt : newPost.publishedAt
                }
                onChange={(e) =>
                  editMode
                    ? setSelectedPost({
                        ...selectedPost,
                        publishedAt: e.target.value,
                      })
                    : setNewPost({ ...newPost, publishedAt: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Category"
                value={editMode ? selectedPost?.category : newPost.category}
                onChange={(e) =>
                  editMode
                    ? setSelectedPost({
                        ...selectedPost,
                        category: e.target.value,
                      })
                    : setNewPost({ ...newPost, category: e.target.value })
                }
              />
              <label>
                Commentable:
                <input
                  type="checkbox"
                  checked={
                    editMode ? selectedPost?.commentable : newPost.commentable
                  }
                  onChange={(e) =>
                    editMode
                      ? setSelectedPost({
                          ...selectedPost,
                          commentable: e.target.checked,
                        })
                      : setNewPost({
                          ...newPost,
                          commentable: e.target.checked,
                        })
                  }
                />
              </label>
              <button onClick={editMode ? handleEditPost : handleCreatePost}>
                {editMode ? "Save Changes" : "Create Post"}
              </button>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crud;
