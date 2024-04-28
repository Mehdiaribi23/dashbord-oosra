import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [generatedLink, setGeneratedLink] = useState('');
  const [clickCount, setClickCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Générer le lien spécifique ici en utilisant les données du formulaire
    const link = `http://example.com/${formData.firstName}-${formData.lastName}`;
    setGeneratedLink(link);
  };

  const handleRedirect = () => {
    setClickCount(prevCount => prevCount + 1); // Met à jour le nombre de clics
    window.open('https://play.google.com/store/apps/details?id=com.demo.oosra', '_blank');
  };

  return (
    <div style={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="firstName" style={styles.label}>First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="lastName" style={styles.label}>Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Generate Link</button>
      </form>
      {generatedLink && (
        <p>
          Generated Link: 
          <a href="#" onClick={handleRedirect} style={styles.link}>{generatedLink}</a>
        </p>
      )}
      <p style={styles.clickCount}>Number of Clicks: {clickCount}</p>
    </div>
  );
};

const styles = {
  formContainer: {
    maxWidth: '400px',
    marginTop: '150px',
    marginBottom: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    cursor: 'pointer',
  },
  clickCount: {
    marginTop: '20px',
  },
};

export default FormComponent;
