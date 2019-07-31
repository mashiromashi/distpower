import React, { Component } from "react";
import { DataTable } from "react-data-components";
import { api_url } from "../../util/apiURL";
import "./User-List-Page.css";
import Select from "react-select";
const columns = [
  { title: "User ID", prop: "userId" },
  { title: "Name", prop: "name" },
  { title: "Email", prop: "email" },
  { title: "Mobile No.", prop: "mobileNo" },
  { title: "Role", prop: "role" },
  { title: "Status", prop: "isActive" },
  { title: "", prop: "editUser" },
  { title: "", prop: "suspendUser" },
  { title: "", prop: "deleteUser" }
];

const roleOptions = [
  { value: "USER", label: "User" },
  { value: "ADMIN", label: "Admin" }
];
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "user",
      userData: props.userData,
      userInfo: [],
      role: null,
      deleteUserID: 0,
      addUserData: {
        userId: 0,
        name: "",
        email: "",
        mobileNo: "",
        isActive: true,
        password: ""
      },

      addError: {
        userIdError: false,
        nameError: false,
        emailError: false,
        mobileNoError: false,
        roleError: false,
        isActiveError: false,
        passwordError: false
      },

      suspendUserData: {
        userId: Number,
        isActive: false
      },

      activateUserData: {
        userId: Number,
        isActive: true
      },

      editUserData: {},
      editError: {
        userIdError: false,
        nameError: false,
        emailError: false,
        mobileNoError: false,
        roleError: false,
        isActiveError: false,
        passwordError: false
      }
    };

    this.suspendUser = this.suspendUser.bind(this);

    this.deleteUser = this.deleteUser.bind(this);

    this.addUser = this.addUser.bind(this);
    this.addChange = this.addChange.bind(this);

    this.editUser = this.editUser.bind(this);
    this.editChange = this.editChange.bind(this);

    this._handleRoleChange = this._handleRoleChange.bind(this);
  }
  async getAllUsers() {
    await fetch(`${api_url}/v1/admin/get-users`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-AUTH-TOKEN": sessionStorage.getItem("userJwt")
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        let userArray = [];

        for (let i = 0; i < data.data.length; i++) {
          let status = null;
          let suspendActive = null;
          if (data.data[i].isActive === true) {
            status = "Active";
            suspendActive = (
              <button
                type="button"
                class="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target="#suspend"
                onClick={() => this.setState({ suspendUserData: data.data[i] })}
              >
                Suspend
              </button>
            );
          } else {
            status = "Inactive";
            suspendActive = (
              <button
                type="button"
                className="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target="#activate"
                onClick={() =>
                  this.setState({ activateUserData: data.data[i] })
                }
              >
                Activate
              </button>
            );
          }
          userArray.push({
            userId: data.data[i].userId,
            name: data.data[i].name,
            email: data.data[i].email,
            mobileNo: data.data[i].mobileNo,
            role: data.data[i].role,
            isActive: status,
            editUser: (
              <button
                type="button"
                class="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#edit"
                onClick={this.setState({ editUserData: data.data[i] })}
              >
                Edit
              </button>
            ),
            suspendUser: suspendActive,
            deleteUser: (
              <button
                type="button"
                className="btn btn-danger btn-sm"
                data-toggle="modal"
                data-target="#delete"
                onClick={() =>
                  this.setState({ deleteUserID: data.data[i].userId })
                }
              >
                Delete
              </button>
            )
          });
        }

        this.setState({
          userInfo: userArray
        });
      });
  }

  _handleRoleChange = value => {
    console.log(value.value);

    this.setState({ role: value.value });
  };

  _validateEmail = emailInput => {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.match(mailFormat)) {
      return true;
    } else {
      return false;
    }
  };

  addChange = e => {
    let data = this.state.addUserData;
    let name = e.target.dataset.name;
    data[name] = e.target.value;
    this.setState({
      addUserData: data
    }),
      () => {
        console.log(this.state.addUserData);
      };
  };
  addUser = () => {
    const _data = this.state.addUserData;
    const role = this.state.role;

    let data = _data;

    let errorList = this.state.addError;

    if (data.name === "") {
      errorList.nameError = true;
    } else {
      errorList.name = false;
    }
    if (data.email === "") {
      errorList.emailError = true;
    } else {
      errorList.emailError = false;
    }
    if (data.password === "") {
      errorList.passwordError = true;
    } else {
      errorList.passwordError = false;
    }
    if (data.mobileNo === "") {
      errorList.mobileNoError = true;
    } else {
      errorList.mobileNoError = false;
    }
    if (this._validateEmail(data.email) === false) {
      errorList.emailError = true;
    } else {
      errorList.emailError = false;
    }

    this.setState({
      addError: errorList
    });
    if (role === "" && role === "USER") {
      errorList.roleError = true;
    } else {
      errorList.roleError = false;
      data["role"] = role;
    }
    if (
      this._validateEmail(data.email) === true &&
      data.password !== "" &&
      data.name !== "" &&
      data.mobileNo !== ""
    ) {
      fetch(`${api_url}/v1/admin/save-user`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "X-AUTH-TOKEN": sessionStorage.getItem("userJwt")
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          console.log(data);

          console.log(res);
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => {
          this.setState(
            {
              addUserData: {
                name: "",
                email: "",
                mobileNo: "",
                role: "",
                isActive: "",
                password: ""
              }
            },
            () => {
              this.getAllUsers();
              document.querySelector("#addmodal").click();
            }
          );
        });
    } else {
    }
  };

  suspendUser = () => {
    let data = this.state.suspendUserData;

    fetch(`${api_url}/v1/admin/suspend-user`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-AUTH-TOKEN": sessionStorage.getItem("userJwt")
      },
      body: JSON.stringify({
        userId: data.userId,
        isActive: false
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        console.log(res);
        this.setState(
          {
            suspendUserData: {}
          },
          () => {
            this.getAllUsers();
            document.querySelector("#suspendmodal").click();
          }
        );
      });
  };

  activateUser = () => {
    let data = this.state.activateUserData;

    fetch(`${api_url}/v1/admin/suspend-user`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-AUTH-TOKEN": sessionStorage.getItem("userJwt")
      },
      body: JSON.stringify({
        userId: data.userId,
        isActive: true
      })
    })
      .then(res => {
        console.log(res);
        if (res.ok) {
          return res.json;
        }
      })
      .then(res => {
        console.log(res);
        this.setState(
          {
            activateUser: {}
          },
          () => {
            this.getAllUsers();
            document.querySelector("#activatemodal").click();
          }
        );
      });
  };
  editUser = () => {
    const _data = this.state.editUserData;
    const role = this.state.role;

    let data = _data;

    let errorList = this.state.editError;
    if (data.userId === "") {
      errorList.userIdError = true;
    } else {
      errorList.userIdError = false;
    }
    if (data.name === "") {
      errorList.nameError = true;
    } else {
      errorList.name = false;
    }
    if (data.email === "") {
      errorList.emailError = true;
    } else {
      errorList.emailError = false;
    }
    if (data.password === "") {
      errorList.passwordError = true;
    } else {
      errorList.passwordError = false;
    }
    if (data.mobileNo === "") {
      errorList.mobileNoError = true;
    } else {
      errorList.mobileNoError = false;
    }
    if (this._validateEmail(data.email) === false) {
      errorList.emailError = true;
    } else {
      errorList.emailError = false;
    }

    this.setState({
      editError: errorList
    });
    if (role === "" && role === "USER") {
      errorList.roleError = true;
    } else {
      errorList.roleError = false;
      data["role"] = role;
    }
    if (
      this._validateEmail(data.email) === true &&
      data.password !== "" &&
      data.name !== "" &&
      data.mobileNo !== "" &&
      data.userId !== ""
    ) {
      fetch(`${api_url}/v1/admin/save-user`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "X-AUTH-TOKEN": sessionStorage.getItem("userJwt")
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => [
          this.setState(
            {
              editUserData: {}
            },
            () => {
              this.getAllUsers();
              document.querySelector("#editmodal").click();
            }
          )
        ]);
    }
  };

  editChange = e => {
    let data = this.state.editUserData;
    let name = e.target.dataset.name;
    data[name] = e.target.value;
    this.setState({
      editUserData: data
    });
  };
  deleteUser = () => {
    fetch(`${api_url}/v1/admin/delete-user/${this.state.deleteUserID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-AUTH-TOKEN": sessionStorage.getItem("userJwt")
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        document.querySelector("#deletemodal").click();
        this.getAllUsers();
      });
  };

  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    const { userInfo } = this.state;
    return (
      <div className="container">
        <div className="table_container">
          <div className="add">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#add"
            >
              <i className="glyphicon glyphicon-plus" />
              Add User
            </button>
          </div>
          <DataTable
            keys="userInfo"
            columns={columns}
            initialData={userInfo}
            initialPageLength={5}
            initialSortBy={{ prop: "userId", order: "ascending" }}
            pageLengthOptions={[5, 20, 50]}
          />

          {/* Suspend Modal */}
          <div class="modal fade" id="suspend" role="dialog">
            <div class="modal-dialog">
              {/* Modal Content */}
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title" />
                </div>
                <div class="modal-body">
                  <p>Suspend user ?</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    id="suspendmodal"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={this.suspendUser}
                  >
                    Suspend
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Activate Modal */}
          <div class="modal fade" id="activate" role="dialog">
            <div class="modal-dialog">
              {/* Modal Content */}
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title" />
                </div>
                <div class="modal-body">
                  <p>Activate user ?</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    id="activatemodal"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.activateUser}
                  >
                    Activate
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Delete Modal */}
          <div class="modal fade" id="delete" role="dialog">
            <div class="modal-dialog">
              {/* Modal Content */}
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title" />
                </div>
                <div class="modal-body">
                  <p>Delete user ?</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    id="deletemodal"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={this.deleteUser}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Add Modal */}
          <div class="modal fade" id="add" role="dialog">
            <div class="modal-dialog">
              {/* Modal Content */}
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title" />
                </div>
                <div class="modal-body">
                  <p>Add user</p>
                </div>
                <div class="modal-body p-5">
                  <form className="form-group">
                    <label>Name</label>
                    <div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Name"
                        data-name="name"
                        value={this.state.addUserData.name}
                        onChange={this.addChange}
                      />
                      {this.state.addError.nameError ? (
                        <small className="error-txt">Name is required</small>
                      ) : (
                        ""
                      )}
                    </div>
                    <label>E-Mail</label>
                    <div>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter Email"
                        data-name="email"
                        value={this.state.addUserData.email}
                        onChange={this.addChange}
                      />
                      {this.state.addError.emailerror ? (
                        <small className="error-txt">Email is required</small>
                      ) : (
                        ""
                      )}
                    </div>
                    <label>Password</label>
                    <div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter password"
                        data-name="password"
                        value={this.state.addUserData.password}
                        onChange={this.addChange}
                      />
                      {this.state.addError.passwordError ? (
                        <small className="error-txt">
                          Password is required
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <label>Mobile Number</label>
                    <div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Mobile Number"
                        data-name="mobileNo"
                        value={this.state.addUserData.mobileNo}
                        onChange={this.addChange}
                      />
                      {this.state.addError.mobileNoError ? (
                        <small className="error-txt">
                          Mobile Number is required
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <label>Role</label>
                    <div>
                      <Select
                        options={roleOptions}
                        data-name="role"
                        value={this.state.addUserData.role}
                        onChange={this._handleRoleChange}
                      />
                      {this.state.addError.roleError ? (
                        <small className="error-txt">Role is required</small>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    id="addmodal"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.addUser}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Edit Modal */}
          <div class="modal fade" id="edit" role="dialog">
            <div class="modal-dialog">
              {/* Modal Content */}
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title" />
                </div>
                <div class="modal-body">
                  <p>Edit user</p>
                </div>
                <div class="modal-body p-5">
                  <form className="form-group">
                    <label>User ID</label>
                    <div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter User ID"
                        data-name="userId"
                        value={this.state.editUserData.userId}
                        onChange={this.editChange}
                      />
                      {this.state.editError.userIdError ? (
                        <small className="error-txt">User ID is required</small>
                      ) : (
                        ""
                      )}
                    </div>
                    <label>Name</label>
                    <div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Name"
                        data-name="name"
                        value={this.state.editUserData.name}
                        onChange={this.editChange}
                      />
                      {this.state.editError.nameError ? (
                        <small className="error-txt">Name is required</small>
                      ) : (
                        ""
                      )}
                    </div>
                    <label>E-Mail</label>
                    <div>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter Email"
                        data-name="email"
                        value={this.state.editUserData.email}
                        onChange={this.editChange}
                      />
                      {this.state.editError.emailerror ? (
                        <small className="error-txt">Email is required</small>
                      ) : (
                        ""
                      )}
                    </div>
                    <label>Password</label>
                    <div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter password"
                        data-name="password"
                        value={this.state.editUserData.password}
                        onChange={this.editChange}
                      />
                      {this.state.editError.passwordError ? (
                        <small className="error-txt">
                          Password is required
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <label>Mobile Number</label>
                    <div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Mobile Number"
                        data-name="mobileNo"
                        value={this.state.editUserData.mobileNo}
                        onChange={this.editChange}
                      />
                      {this.state.editError.mobileNoError ? (
                        <small className="error-txt">
                          Mobile Number is required
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <label>Role</label>
                    <div>
                      <Select
                        options={roleOptions}
                        data-name="role"
                        value={this.state.editUserData.role}
                        onChange={this._handleRoleChange}
                      />
                      {this.state.editError.roleError ? (
                        <small className="error-txt">Role is required</small>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    id="editmodal"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.editUser}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
