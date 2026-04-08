"use client";

import { createContext, useContext, useState } from "react";
import BookConsultationModal from "../components/bookconsultation";

const ConsultationContext = createContext(null);

export function ConsultationProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ConsultationContext.Provider value={{ open: () => setIsOpen(true) }}>
            {children}
            <BookConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </ConsultationContext.Provider>
    );
}

export function useConsultation() {
    return useContext(ConsultationContext);
}
