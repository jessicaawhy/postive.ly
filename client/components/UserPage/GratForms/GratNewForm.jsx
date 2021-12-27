import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useUserUpdate } from '../../UserContext';
import StyledForm from './GratForm.styled';
import Button from '../../reusable-styles/Button.styled';

const NewForm = ({ setModal }) => {
  const user = useUser();
  const updateUser = useUserUpdate();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await fetch(`/api/user/${user.username}/gratitudes`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ gratitude: e.target.gratitude.value }),
      });

      const response = await fetch(`/api/user/${user.username}`);
      const data = await response.json();
      await updateUser(data);

      navigate('/home');
      setModal(null);
    } catch (err) {
      alert('Error in adding new gratitude. Please try again');
      navigate('/home');
      setModal(null);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <h2>Add New Gratitude</h2>
      <label htmlFor="gratitude">
        What are you thankful for today?
        <br />
        <input type="text" id="gratitude" name="gratitude" />
      </label>
      <div className="btn-container">
        <Button onClick={() => setModal(null)} color="white">CANCEL</Button>
        <Button type="submit">SUBMIT</Button>
      </div>
    </StyledForm>
  );
};

export default NewForm;
