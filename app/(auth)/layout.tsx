import React from "react";
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className='flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-center bg-cover bg-fixed'>
                {children}
        </div>
    );
}