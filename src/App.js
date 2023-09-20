import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productName: '',
    version: '',
    satisfaction: '',
    thoughts: '',
    easeOfUse: 3, // Default slider values
    performance: 3,
    reliability: 3,
    features: 3,
    recommend: 'maybe',
    additionalComments: '',
    discoverMethods: {
      onlineSearch: false,
      socialMedia: false,
      friendsRecommendation: false,
      advertisement: false,
      other: '',
    },
    contactUs: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        discoverMethods: {
          ...formData.discoverMethods,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };
  const [satisfaction, setSatisfaction] = useState('neutral'); // Default to neutral

  const handleSatisfactionChange = (event) => {
    setSatisfaction(event.target.value);
  };

  return (
    <div className="container">
    <div className="feedback-form">
      <h1>Thank you for choosing our speakers</h1>
      <p>We're committed to providing you with the best experience possible. Please share your feedback to help us improve.</p>

      <form onSubmit={handleSubmit}>
        <h2>Your Contact Information (Optional):</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        <div className="form-grou">
          <label>Rate your overall satisfaction</label>
          <label><input type="radio" value="extremelyHapy" checked={satisfaction === 'extremelyHappy'}
          onChange={handleSatisfactionChange}/> Extremely Happy</label>
          <label><input type="radio" value="satisfied"checked={satisfaction === 'satisfied'}
          onChange={handleSatisfactionChange}/> Satisfied</label>
          <label><input type="radio" value="neutral" checked={satisfaction === 'neutral'}
          onChange={handleSatisfactionChange}/> Neutral</label>
          <label><input type="radio" value="notBad" checked={satisfaction === 'notbad'}
          onChange={handleSatisfactionChange}/>Not Bad</label>
          <label><input type="radio" value="bad" checked={satisfaction === 'bad'}
          onChange={handleSatisfactionChange}/>Bad</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="thank-you-message">Thank you for being awesome! Your feedback is like a compass guiding us to greatness. We truly appreciate it.</p>
    </div>
    </div>
  );
};

export default App;
