"use client";
import { useState, FormEvent } from "react";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Logic Pop-up Notifikasi (Disesuaikan dengan Tailwind v4 di page.tsx)
  const showToast = (message: string, type: "success" | "error") => {
    const toastNotification = document.getElementById("toast-notification");
    if (!toastNotification) return;

    const toastMessage = toastNotification.querySelector(".toast-message");
    const toastIconContainer = toastNotification.querySelector(".toast-icon");
    
    if (toastMessage) toastMessage.textContent = message;

    // Ganti warna icon box berdasarkan tipe
    if (toastIconContainer) {
      if (type === "success") {
        toastIconContainer.className = "toast-icon w-6 h-6 text-emerald-500 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0";
        // Pake icon check
        toastIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      } else {
        toastIconContainer.className = "toast-icon w-6 h-6 text-red-500 rounded-full bg-red-500/20 flex items-center justify-center shrink-0";
        // Pake icon silang/exclamation
        toastIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
      }
    }

    // Munculkan toast pake class 'show' (sesuai inline style di page.tsx)
    toastNotification.classList.add("show");

    // Sembunyiin setelah 5 detik
    setTimeout(() => {
      toastNotification.classList.remove("show");
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      
      const result = await response.json();

      if (result.success) {
        showToast("Message sent successfully!", "success");
        form.reset(); 
      } else {
        showToast(result.message || "Something went wrong.", "error");
      }
    } catch (error) {
      showToast("Network error. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};