'use client'; // if you're using Next.js 13 app directory

import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Box,
  Stack,
  LinearProgress,
  Typography,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";

const MenAdmin = () => {
  const [formData, setFormData] = useState({
    idno: "",
    name: "",
    brand: "",
    image: null,
    description: "",
    price: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file (e.g., JPEG, PNG)");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB");
        return;
      }
      setError("");
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setUploadProgress(0);

    if (!formData.image) {
      setError("Please upload an image.");
      return;
    }

    const data = new FormData();
    data.append("image", formData.image);
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("idno", formData.idno);
    data.append("brand", formData.brand);
    data.append("price", formData.price);

    try {
      const res = await axios.post("http://localhost:3500/men", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      setResponse(res.data);
      setSuccess("Upload successful!");
      setPreviewImage(null);
      setUploadProgress(0);
      setFormData({
        idno: "",
        name: "",
        brand: "",
        image: null,
        description: "",
        price: "",
      });
    } catch (err) {
      setError("Failed to upload, please try again.");
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          p: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Upload Shopping Material
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} direction="column">
            <Box>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="image-upload"
                type="file"
                onChange={handleFileChange}
              />

              <label htmlFor="image-upload">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<PhotoCamera />}
                  sx={{
                    mb: 2,
                    borderBottom: "1px solid #1ed14b",
                    fontWeight: "bold",
                    borderRadius: "20px",
                  }}
                >
                  Upload Image
                </Button>
              </label>
              {previewImage && (
                <Box sx={{ mt: 2 }}>
                  <img
                    src={previewImage}
                    alt="Preview"
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                </Box>
              )}
            </Box>

            <TextField
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Brand number"
              name="idno"
              type="text"
              value={formData.idno}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Brand"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
              inputProps={{ min: 0, step: "0.01" }}
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                margin: "auto",
                borderBottom: "1px solid #1ed14b",
                fontWeight: "bold",
                borderRadius: "20px",
                display: "block",
              }}
            >
              Add to Cart
            </Button>

            {uploadProgress > 0 && (
              <LinearProgress variant="determinate" value={uploadProgress} />
            )}

            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}

            {success && (
              <Typography color="success.main" variant="body2">
                {success}
              </Typography>
            )}

            {response && (
              <Typography variant="body2" sx={{ mt: 2 }}>
                Server Response: {JSON.stringify(response)}
              </Typography>
            )}
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default MenAdmin;

