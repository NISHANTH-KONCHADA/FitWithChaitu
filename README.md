<!-- <div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1VWByRRZVS03eflv-ZPE45BUahqQIQmbv

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev` -->

# FitWithChaitu - Fitness Client Management System

FitWithChaitu is a comprehensive web application designed to help fitness coaches , manage their client base efficiently. The platform features a sleek, modern interface for both the coach and potential clients, combining a public-facing informational site with a private, feature-rich management dashboard.
![Add Client Screenshot](https://raw.githubusercontent.com/NISHANTH-KONCHADA/FitWithChaitu/main/screenshots/clientmanage.png)
Client Management Dashboard

## ✨ Features

The application is divided into two main parts: the public website and the coach's private dashboard.

### 🕴️ Coach Dashboard (Private)
- **Secure Authentication:** Secure login portal for the coach.
- **Client Management:** View all clients in a clean, card-based layout.
- **Add & Edit Clients:** Easily add new clients with their details (contact info, goals, start date) and edit them later.
- **Progress Tracking:** Monitor and update client progress (e.g., weight changes from 85kg -> 75kg).
- **Client Status:** Manage client status (e.g., `active`, `paused`).
- **Dynamic Search:** Instantly search and filter clients by name, email, or their specific fitness goal.

### 🌍 Public Website
- **Client Acquisition:** A professional landing page to attract and convert potential clients.
- **Informational Pages:** Sections for Programs, a Blog, and coach information.
- **Lead Generation:** A "Book Your Free Consultation" form to capture leads.
- **Social Proof:** Displays key metrics like "Active Clients," "Years Experience," and "Success Rate" to build trust.
- **Client Login Portal:** A dedicated login page for registered clients to access their personalized space.

## 📸 Screenshots

| Landing Page | Book A Call | Dashboard | Add Client |
| :---: | :---: | :---: | :---: |
| ![Landing Page](https://raw.githubusercontent.com/NISHANTH-KONCHADA/FitWithChaitu/main/screenshots/main.png) | ![Book A Call Form](https://raw.githubusercontent.com/NISHANTH-KONCHADA/FitWithChaitu/main/screenshots/main2.png) | ![Dashboard](https://raw.githubusercontent.com/NISHANTH-KONCHADA/FitWithChaitu/main/screenshots/clientmanage.png) | ![Add Client Form](https://raw.githubusercontent.com/NISHANTH-KONCHADA/FitWithChaitu/main/screenshots/addclient.png) |


## 🛠️ Tech Stack (Example)

This is an example stack. Update it with the technologies you used.

-   **Frontend:** React.js, Vite, Tailwind CSS
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB with Mongoose
-   **Authentication:** JSON Web Tokens (JWT)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn
-   MongoDB instance (local or cloud)

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/your-username/fitwithchaitu.git](https://github.com/your-username/fitwithchaitu.git)
    cd fitwithchaitu
    ```

2.  **Install backend dependencies**
    ```sh
    cd server
    npm install
    ```

3.  **Install frontend dependencies**
    ```sh
    cd ../client
    npm install
    ```

4.  **Set up Environment Variables**

    Create a `.env` file in the `server` directory and add the following variables:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    ```

5.  **Run the application**

    -   To start the backend server (from the `server` directory):
        ```sh
        npm run dev
        ```
    -   To start the frontend development server (from the `client` directory):
        ```sh
        npm run dev
        ```

    The application should now be running on `http://localhost:5173` (or your configured frontend port).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

_Created with ❤️ for Chaitu's fitness coach journey._
