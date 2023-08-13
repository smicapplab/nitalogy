import './globals.css'

export const metadata = {
  title: 'Behind The Screen',
  description: 'Welcome to our platform dedicated to raising awareness about global issues without resorting to exploitative tactics like poverty porn. We believe that compassion and understanding can be fostered without exploiting the hardships faced by marginalized communities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >{children}</body>
    </html>
  )
}
