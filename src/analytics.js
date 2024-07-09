import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-PECQ9558M1');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
