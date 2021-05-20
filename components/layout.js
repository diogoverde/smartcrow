import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1 sm:justify-center">
        <div className="px-4 sm:max-w-3xl sm:w-full">
          <Header />
          <main className="w-full mt-10 md:mt-15">{children}</main>
        </div>
      </div>
      <Footer />
      {/* Allows us to disable UI elements if JS is disabled by setting the "js-only" class */}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: ".js-only{display:none;}",
          }}
        />
      </noscript>
    </div>
  );
}
