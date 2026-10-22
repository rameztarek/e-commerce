export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
      >
        <body className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <NavBar />
          {children}
          <Footer />
          <ToastContainer position="bottom-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}