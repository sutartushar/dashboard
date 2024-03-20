# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

PROCESS STEP BY STEP-

1 - Setup React Project: Make sure you have a React project set up. You can use Create React App or any other preferred method.

2- Install Dependencies: You need to install the necessary dependencies. Run the following command in your project directory:-
npm install axios react-chartjs-2 chart.js . Goto my-app , npm install , to run use npm run dev.

3- Create DashboardOverview Component: Create a new file called DashboardOverview.js or any name you prefer and paste the provided code into it.

4- Import Dependencies: At the beginning of the file, import the necessary dependencies.

5- Define DashboardOverview Component: Create a functional component called DashboardOverview using React's functional component syntax.

6- State Management with useState: Use the useState hook to manage the state for the fetched data. Initialize data state to null.

7- Fetch Data with Axios: Utilize the useEffect hook to fetch data when the component mounts. Inside the useEffect, define an asynchronous function fetchData using axios.get to fetch data from a JSON file. Adjust the file path accordingly.

8- Handle Data Fetching Errors: Use a try-catch block to handle any errors that may occur during data fetching.

9- Render Category Distribution Chart: In the return statement, check if the data has been fetched successfully (data &&). If so, render the Bar component from react-chartjs-2. Pass the necessary data for the chart, including labels and datasets.

10- Styling: Utilize CSS modules for styling. Adjust the class names and styles in Dashboard.module.css according to your preference.

11- Export Component: Export the DashboardOverview component as the default export.

12- Integrate Component: Finally, integrate the DashboardOverview component into your application wherever you want to display the Category Distribution dashboard.
