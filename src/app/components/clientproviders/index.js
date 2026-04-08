"use client";

import { ConsultationProvider } from "../../context/ConsultationContext";

export default function ClientProviders({ children }) {
    return <ConsultationProvider>{children}</ConsultationProvider>;
}
