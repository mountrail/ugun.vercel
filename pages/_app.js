
export const colors = (prefix, level) => {
  const colorSet = {
    primary: "zinc-800",
    secondary: "zinc-50",
    tertiary: "sky-50",
  };
  return `${prefix}-${colorSet[level]}`;
};

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
