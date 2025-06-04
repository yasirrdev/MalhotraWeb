import React, { ReactNode } from "react";
import PolicyPage from "./page";
interface PolicyLayoutProps {
    children: ReactNode;
}

export default function PolicyLayout() {
    return (
            <main><PolicyPage></PolicyPage></main>
    );
}