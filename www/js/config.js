    if (window.pdfjsLib) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            cma: {
              50: '#F4F4FC', 100: '#E8E8F8', 200: '#D2D2F0', 300: '#B3B2E6', 400: '#9594DC',
              500: '#7C7BCB', 600: '#6A68BE', 700: '#5755A8', 800: '#444388', 900: '#33325E', 950: '#1F1E3D',
              darkbg: '#1D1F24', darkcard: '#272A2F', darkborder: '#3A3F46'
            },
            cmaorange: { DEFAULT: '#388074', dark: '#2B665C' },
            orbit: { ink: '#272A2F', blue: '#7C7BCB', cyan: '#F0B035', coral: '#E87E95', teal: '#388074', orange: '#F99F63' }
          },
          fontFamily: {
            sans: ['Inter', 'Roboto', 'system-ui', '-apple-system', 'sans-serif'],
          }
        }
      }
    }
