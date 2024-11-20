import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 500,
          margin: "0 auto",
          padding: 4,
          marginTop: 5,
          marginBottom: 5,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Contact Us
        </Typography>
        <Typography variant="p" gutterBottom textAlign="center">
          We'd love to hear from you! Please fill out the form below
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Select
          fullWidth
          margin="normal"
          name="service"
          value={formData.service}
          onChange={handleChange}
          displayEmpty
          required
          sx={{ marginTop: 2 }}
        >
          <MenuItem value="" disabled>
            Select Service
          </MenuItem>
          <MenuItem value="Graphics Design">Graphics Design</MenuItem>
          <MenuItem value="Web Development">Web Development</MenuItem>
        </Select>
        <TextField
          fullWidth
          margin="normal"
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
}
