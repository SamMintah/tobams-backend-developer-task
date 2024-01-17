# Tobams Backend Developer Task

This repository contains my solution for the Backend Developer Task as part of the application process for the Backend Developer Intern position at Tobams Group.

## Task Overview

The task involves creating an Image Upload and GET Endpoint using Typescript. The primary requirements include processing image uploads, saving images to a MongoDB database, implementing validation checks, constructing client responses, and ensuring proper error handling.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed (and running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tobams-backend-task.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tobams-backend-task
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your MongoDB database and update the connection string in `src/utils/database.ts`.

## Endpoints

### Upload Image
- **Endpoint:** `POST /upload`
- **Request:**
  - Use `multipart/form-data` for the request body with a single file parameter named `image`.
- **Response:**
  - `200 OK` - Image uploaded successfully.
  - `400 Bad Request` - No image file provided or invalid file type.
  - `500 Internal Server Error` - Server error.

### Get Image
- **Endpoint:** `GET /get_image/:id`
- **Parameters:**
  - `id` - The ID of the image to retrieve.
- **Response:**
  - The image file with the appropriate content type.
  - `404 Not Found` - Image not found.
  - `500 Internal Server Error` - Server error.

