import './globals.css'

export const metadata = {
  title: 'Behind The Screen',
  description: 'Welcome to our platform dedicated to raising awareness about global issues without resorting to exploitative tactics like poverty porn. We believe that compassion and understanding can be fostered without exploiting the hardships faced by marginalized communities.',
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/icon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/icon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/icon/apple-touch-icon.png",
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >{children}</body>
    </html>
  )
}
