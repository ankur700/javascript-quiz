import React from "react";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen flex justify-center align-center">
      {children}
    </main>
  );
};

export default Main;
