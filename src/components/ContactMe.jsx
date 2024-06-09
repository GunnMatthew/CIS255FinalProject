import { useState } from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Make this functional at some point.
    };

    return (
      <Container>
        <Box>
            <Typography>
                Want to contact me?  Send me an email using the form below!
            </Typography>
            <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2}}>
                    <TextField
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    sx={{ bgcolor: 'white'}}
                    />
                    <TextField
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    sx={{ bgcolor: 'white'}}
                    />
                </Box>
                <TextField
                name="email"
                label="Email Address"
                variant="outlined"
                required
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 2, bgcolor: 'white'}}
                />
                <br/>
                <TextField
                name="message"
                label="Enter your message..."
                variant="outlined"
                multiline
                fullWidth
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                sx={{ mb: 2, bgcolor: 'white'}}
                />
                <br/>
                <Button type="submit" variant="contained">Submit</Button>
            </Box>
        </Box>
      </Container>
    );
  };
  
  export default ContactMe;