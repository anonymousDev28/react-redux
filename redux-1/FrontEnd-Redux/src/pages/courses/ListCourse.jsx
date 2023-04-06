import React from "react";
import { Link } from "react-router-dom";
import { useGetAllCourseQuery } from "../../app/services/courseService";

function ListCourse() {
  const { data, isLoading, isError, error } = useGetAllCourseQuery();
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (isError) {
    return <h2>Error: {error}</h2>;
  }
  console.log(data);
  return (
    <div className="course-container mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2 className="fs-5 mb-4">Chủ đề</h2>
            <div className="topic-item input-group d-flex align-items-center mb-1">
              <input type="radio" value="Backend" id="backend" name="topic" />
              <label htmlFor="backend" className="ms-2 fs-5">
                Lập trình Backend
              </label>
            </div>
            <div className="topic-item input-group d-flex align-items-center mb-1">
              <input type="radio" value="Frontend" id="frontend" name="topic" />
              <label htmlFor="frontend" className="ms-2 fs-5">
                Lập trình Frontend
              </label>
            </div>
            <div className="topic-item input-group d-flex align-items-center mb-1">
              <input type="radio" value="Di động" id="mobile" name="topic" />
              <label htmlFor="mobile" className="ms-2 fs-5">
                Lập trình di động
              </label>
            </div>
            <div className="topic-item input-group d-flex align-items-center mb-1">
              <input type="radio" value="Database" id="database" name="topic" />
              <label htmlFor="database" className="ms-2 fs-5">
                Cơ sở dữ liệu
              </label>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                  <input
                    type="text"
                    placeholder="Tìm kiếm khóa học"
                    className="form-control border-0 seach-form-input"
                  />
                  <span className="text-black-50 seach-form-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="course-list row">
              {data.length > 0 &&
                data.map((c, index) => (
                  <div className="col-md-4" key={c.id}>
                    <div className="course-item shadow-sm rounded mb-4">
                      <div className="course-item-image">
                        <img
                          src={c.thumbnail}
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-4 text-dark">
                          <Link to={`/khoa-hoc/${c.id}`}>{c.name}</Link>
                        </h2>
                        <div className="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p className="type">{c.type}</p>
                          <p className="rating">
                            <span>{c.rating}</span>
                            <span className="text-warning">
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p className="price text-danger fs-5">{c.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCourse;
