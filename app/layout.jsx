export const metadata = {
  title: 'Forecast Dashboard',
  description: 'Forecast customer dashboard model',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
