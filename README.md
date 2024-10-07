# DevelopsToday - Countries List

**Author:** Bruno Rodrigues  

## Description

DevelopsToday -Countries List is a full-stack application created as part of a test assessment. The project involves building two small applications that provide information about countries. It includes a Backend (BE) developed with Node.js (using Express) and a Frontend (FE) built with with Next.js. This structure allows users to easily access and interact with a variety of country-related data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)

## Installation

To install the necessary dependencies for both the frontend and backend, run the following command:

```bash
npm install
```

This will install the dependencies for the root project as well as for both the frontend and backend components.

## Usage

To start the development servers for both the frontend and backend simultaneously, use the following command:

```bash
npm run dev
```

This will use `concurrently` to run the development scripts located in the respective directories:

- **Frontend:** `npm run dev --prefix frontend`
- **Backend:** `npm run dev --prefix backend`

## Scripts

- **dev**: Runs the development server for both frontend and backend.
- **install**: Installs dependencies for the main project, frontend, and backend.




