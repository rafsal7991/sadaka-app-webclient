import React, { useState } from "react";

const AddUserForm = ({ addUser, returnToUserTable }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    email: "",
    mobilePhone: "",
    secondaryMobilePhone: "",
    password: "",
    passwordExpiredDate: "",
    enableAccount: false,
    accountLocked: false,
    credentialExpired: false,
    role: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide success message after 3 seconds
      returnToUserTable(); // Return to UserTable2
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  const handleCancel = () => {
    returnToUserTable(); // Return to UserTable2 when cancel button is clicked
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const inputStyle = {
    border: '2px solid rgb(23, 8, 105)',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    width: '100%', // Ensures input fields take up full width
    boxSizing: 'border-box', // Ensures padding and border are included in width
  };

  const inputHoverFocusStyle = {
    borderColor: 'rgb(255, 92, 10)',
  };

  const checkboxContainerStyle = {
    border: '1px solid grey',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    marginBottom: '1rem',
  };

  const checkboxLabelStyle = {
    marginLeft: '0.5rem', // Adjust margin as needed
  };

  const roleOptions = [
    { value: '', label: 'Select Role' },
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
    { value: 'manager', label: 'Manager' },
    { value: 'staff', label: 'Staff' },
  ];

  return (
    <div className="card p-4">
      <h4 className="card-title">Create User</h4>
      <div className="mb-4 text-sm text-red-500">
        <strong>Fields marked with * are mandatory</strong>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="col-span-1">
          <div className="mb-4">
            <label htmlFor="firstName" className="form-label">
              First Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              onMouseOver={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onMouseOut={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobilePhone" className="form-label">
              Mobile Phone
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="mobilePhone"
              name="mobilePhone"
              className="form-control"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              onMouseOver={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onMouseOut={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              value={formData.mobilePhone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
                id="password"
                name="password"
                className="form-control"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
                onBlur={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
                onMouseOver={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
                onMouseOut={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-1"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-span-1">
          <div className="mb-4">
            <label htmlFor="lastName" className="form-label">
              Last Name
                <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              onMouseOver={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onMouseOut={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="secondaryMobilePhone" className="form-label">
              Secondary Mobile Phone
            </label>
            <input
              type="text"
              id="secondaryMobilePhone"
              name="secondaryMobilePhone"
              className="form-control"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              onMouseOver={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onMouseOut={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              value={formData.secondaryMobilePhone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="passwordExpiredDate" className="form-label">
              Password Expired Date
              <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="passwordExpiredDate"
              name="passwordExpiredDate"
              className="form-control"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              onMouseOver={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onMouseOut={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              value={formData.passwordExpiredDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1">
           <div className="mb-4">
            <label htmlFor="role" className="form-label">
              Role
                <span className="text-red-500">*</span>
            </label>
            <select
              id="role"
              name="role"
              className="form-select"
              style={{ ...inputStyle, height: '2.5rem' }} // Adjust height as needed
              onFocus={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              onMouseOver={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onMouseOut={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="form-control"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              onMouseOver={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onMouseOut={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              onMouseOver={(e) => e.target.style.borderColor = inputHoverFocusStyle.borderColor}
              onMouseOut={(e) => e.target.style.borderColor = 'rgb(23, 8, 105)'}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="col-span-3 flex flex-wrap items-center justify-between gap-4">
          <div className="mb-4" style={checkboxContainerStyle}>
            <input
              type="checkbox"
              id="enableAccount"
              name="enableAccount"
              className="form-check-input"
              checked={formData.enableAccount}
              onChange={handleInputChange}
            />
            <label htmlFor="enableAccount" className="form-check-label" style={checkboxLabelStyle}>
              Enable Account
            </label>
          </div>
          <div className="mb-4" style={checkboxContainerStyle}>
            <input
              type="checkbox"
              id="accountLocked"
              name="accountLocked"
              className="form-check-input"
              checked={formData.accountLocked}
              onChange={handleInputChange}
            />
            <label htmlFor="accountLocked" className="form-check-label" style={checkboxLabelStyle}>
              Account Locked
            </label>
          </div>
          <div className="mb-4" style={checkboxContainerStyle}>
            <input
              type="checkbox"
              id="credentialExpired"
              name="credentialExpired"
              className="form-check-input"
              checked={formData.credentialExpired}
              onChange={handleInputChange}
            />
            <label htmlFor="credentialExpired" className="form-check-label" style={checkboxLabelStyle}>
              Credential Expired
            </label>
          </div>
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="col-span-3 flex justify-end gap-4">
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: 'rgb(225, 92, 10)', color: 'white' }}
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: 'rgb(23, 8, 105)', color: 'white' }}
          >
            Submit
          </button>
        </div>
      </form>

      {showSuccessMessage && (
        <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> User added successfully.</span>
        </div>
      )}
    </div>
  );
};

export default AddUserForm;
