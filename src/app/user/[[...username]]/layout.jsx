
import Header from '@/components/Header';


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="m-0 w-full">
      
        <body className="w-full">
            <Header/>
            {children}
        
        </body>
      
    </html>
  );
}
