"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { BUDGET_OPTIONS } from "@/content/contact";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";

const inputClass =
  "w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-body text-[var(--color-text-primary)] outline-none transition-colors duration-250 placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-accent)]";

const errorClass = "mt-1 text-caption text-[var(--color-error)]";

export function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        let message = "Something went wrong. Please try again.";
        try {
          const data = await response.json();
          if (data?.error) message = data.error;
        } catch {
          // response wasn't JSON — fall back to default message
        }
        setSubmitError(message);
        return;
      }

      setSubmitSuccess(true);
    } catch {
      // network error, timeout, DNS failure, etc.
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  const handleReset = () => {
    reset();
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  if (submitSuccess) {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center"
      >
        <h3 className="text-h5 font-semibold text-[var(--color-text-primary)]">Message received.</h3>
        <p className="mt-2 text-body text-[var(--color-text-secondary)]">
          We'll get back to you shortly.
        </p>
        <Button variant="text" className="mt-6" onClick={handleReset} data-cursor="clickable">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-small font-medium text-[var(--color-text-primary)]">
            Name
          </label>
          <input id="name" type="text" autoComplete="name" className={inputClass} {...register("name")} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-small font-medium text-[var(--color-text-primary)]">
            Email
          </label>
          <input id="email" type="email" autoComplete="email" className={inputClass} {...register("email")} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-small font-medium text-[var(--color-text-primary)]">
          Company <span className="text-[var(--color-text-secondary)]">(optional)</span>
        </label>
        <input id="company" type="text" autoComplete="organization" className={inputClass} {...register("company")} />
      </div>

      <div>
        <label htmlFor="project" className="mb-2 block text-small font-medium text-[var(--color-text-primary)]">
          Project
        </label>
        <textarea
          id="project"
          rows={3}
          placeholder="What are you looking to build?"
          className={inputClass}
          {...register("project")}
        />
        {errors.project && <p className={errorClass}>{errors.project.message}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-small font-medium text-[var(--color-text-primary)]">
          Budget <span className="text-[var(--color-text-secondary)]">(optional)</span>
        </label>
        <select id="budget" className={inputClass} defaultValue={BUDGET_OPTIONS[0]} {...register("budget")}>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-small font-medium text-[var(--color-text-primary)]">
          Message
        </label>
        <textarea id="message" rows={5} className={inputClass} {...register("message")} />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {submitError && <p className={errorClass}>{submitError}</p>}

      <Button type="submit" variant="primary" showArrow disabled={isSubmitting} className="w-fit" data-cursor="clickable">
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}