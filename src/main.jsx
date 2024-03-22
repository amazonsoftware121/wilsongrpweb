import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Root from './routes/Root.jsx';
import ErrorPage from "./ErrorPage";
import About from './routes/About.jsx';
import CloudServices from './routes/CloudServices.jsx';
import './styles.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DataAndAnalyticsServices from './routes/DataAndAnalyticsServices.jsx';
import ComprehensiveSecurityAssessment from './routes/ComprehensiveSecurityAssessment.jsx';
import ApplicationSecurityAssessment from './routes/ApplicationSecurityAssessment.jsx';
import VulnerabilityAssessment from './routes/VulnerabilityAssessment.jsx';
import SecurityAssessmentAndAuthorization from './routes/SecurityAssessmentAndAuthorization.jsx';
import PenetrationTesting from './routes/PenetrationTesting.jsx';
import NetworkSecurityAwareness from './routes/NetworkSecurityAwareness.jsx';
import SecurityPoliciesAndProceduresDevelopment from './routes/SecurityPoliciesAndProceduresDevelopment.jsx';
import FismaAssessmentServices from './routes/FismaAssessmentServices.jsx';

const theme = createTheme({

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1448px !important', // Set the default max-width to 1400
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' && 'outlined' &&
            ownerState.color === 'primary' && {
              backgroundColor: '#28A0CF',
              color: '#fff',
            }),
        }),
      },
    },

  },

  typography: {
    button: {
      textTransform: "none"
    },
    color: "#28A0CF",

    fontFamily: [
      'Poppins', 'sans-serif',
    ].join(','),
  },

  palette: {
    primary: {
      main: '#28A0CF',
      light: '#f5f5f5',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#000',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
  

});





const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <Header />
        <div className='mainContent'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Use index: true for the root path
        element: <Root />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cloud-services",
        element: <CloudServices />
      },
      {
        path: "/data-and-analytics-services",
        element: <DataAndAnalyticsServices />
      },
      {
        path: "/web-application-security-assessment-services",
        element: <ApplicationSecurityAssessment />
      },
      {
        path: "/comprehensive-security-assessment",
        element: <ComprehensiveSecurityAssessment />
      },
      {
        path: "/vulnerability-assessment-new",
        element: <VulnerabilityAssessment />
      },
      {
        path: '/security-assessment-and-authorization-saa-new',
        element: <SecurityAssessmentAndAuthorization />
      },
      {
        path: '/penetration-testing-new',
        element: <PenetrationTesting />
      },
      {
        path: '/network-security-awareness-training-and-development-new',
        element: <NetworkSecurityAwareness />
      },
      {
        path: '/security-plans-policies-and-procedures-development-new',
        element: <SecurityPoliciesAndProceduresDevelopment />
      },
      {
        path: '/federal-information-security-management-act-fisma-assessment-new',
        element: <FismaAssessmentServices />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
