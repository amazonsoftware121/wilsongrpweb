import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

//import Root from './routes/Root.jsx';
import ErrorPage from "./ErrorPage";
import './styles.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';



//const Root = lazy(()=>import("./routes/Root.jsx"));

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
        <Suspense>
          <Outlet />
          </Suspense>
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
        async lazy() {
          let Root = await import("./routes/Root.jsx");
          return { Component: Root.default };
        },
      },
      {
        path: "/about",
        async lazy() {
          let About = await import("./routes/About.jsx");
          return { Component: About.default };
        }
      },
      {
        path: "/cloud-services",
        async lazy() {
          let CloudServices = await import("./routes/CloudServices.jsx");
          return { Component: CloudServices.default };
        }
      },
      {
        path: "/data-and-analytics-services",
        async lazy() {
          let DataAndAnalyticsServices = await import("./routes/DataAndAnalyticsServices.jsx");
          return { Component: DataAndAnalyticsServices.default };
        }
      },
      { 
        path: "/web-application-security-assessment-services",
        async lazy() {
          let ApplicationSecurityAssessment = await import("./routes/ApplicationSecurityAssessment.jsx");
          return { Component: ApplicationSecurityAssessment.default };
        }
      },
      {
        path: "/comprehensive-security-assessment",
        async lazy() {
          let ComprehensiveSecurityAssessment = await import("./routes/ComprehensiveSecurityAssessment.jsx");
          return { Component: ComprehensiveSecurityAssessment.default };
        }
      },
      {
        path: "/vulnerability-assessment",
        async lazy() {
          let VulnerabilityAssessment = await import("./routes/VulnerabilityAssessment.jsx");
          return { Component: VulnerabilityAssessment.default };
        }
      },
      {
        path: '/security-assessment-and-authorization-saa',
        async lazy() {
          let SecurityAssessmentAndAuthorization = await import("./routes/SecurityAssessmentAndAuthorization.jsx");
          return { Component: SecurityAssessmentAndAuthorization.default };
        }
      },
      {
        path: '/penetration-testing',
        async lazy() {
          let PenetrationTesting = await import("./routes/PenetrationTesting.jsx");
          return { Component: PenetrationTesting.default };
        }
      },
      {
        path: '/network-security-awareness-training-and-development',
        async lazy() {
          let NetworkSecurityAwareness = await import("./routes/NetworkSecurityAwareness.jsx");
          return { Component: NetworkSecurityAwareness.default };
        }
      },
      {
        path: '/security-plans-policies-and-procedures-development',
        
        async lazy() {
          let SecurityPoliciesAndProceduresDevelopment = await import("./routes/SecurityPoliciesAndProceduresDevelopment.jsx");
          return { Component: SecurityPoliciesAndProceduresDevelopment.default };
        }
      },
      {
        path: '/federal-information-security-management-act-fisma-assessment',
        async lazy() {
          let FismaAssessmentServices = await import("./routes/FismaAssessmentServices.jsx");
          return { Component: FismaAssessmentServices.default };
        }
      },
      {
        path: '/health-insurance-portability-and-accountability-act-hipaa-new',
        async lazy() {
          let Hipaa = await import("./routes/Hipaa.jsx");
          return { Component: Hipaa.default };
        }
      },
      {
        path: 'gdpr-new',
        async lazy(){
          let Gdpr = await import("./routes/Gdpr.jsx");
          return {Component: Gdpr.default};
        }
      },
      {
        path: 'privacy-impact-assessment-new',
        async lazy(){
          let PrivacyImpactAssessment = await import("./routes/PrivacyImpactAssessment.jsx");
          return {Component: PrivacyImpactAssessment.default};
        }
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)