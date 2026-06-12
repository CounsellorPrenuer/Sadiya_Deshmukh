import './globals.css';

export const metadata = {
  title: 'Career With Confidence',
  description: 'Empowering your Future'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
