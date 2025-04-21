export const metadata = {
    title: 'Video Site',
    description: 'Dynamic YouTube video manager',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-gray-100 text-gray-900">
          {children}
        </body>
      </html>
    );
  }
  