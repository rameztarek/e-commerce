import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        variables: {
          colorPrimary: "#f59e0b",      // لون الزرار الأساسي
          colorText: "#111827",
          colorBackground: "#ffffff",
          colorInputBackground: "#f9fafb",
          borderRadius: "0.75rem",
          fontFamily: "Inter, sans-serif",
        },
        elements: {
          card: "shadow-xl border border-gray-100",
          headerTitle: "text-2xl font-bold",
          formButtonPrimary: "bg-amber-500 hover:bg-amber-600 text-sm normal-case",
          formFieldInput: "rounded-lg border-gray-300 focus:ring-amber-500",
          footerActionLink: "text-amber-600 hover:text-amber-700",
        },
      }}
    />
  );
}