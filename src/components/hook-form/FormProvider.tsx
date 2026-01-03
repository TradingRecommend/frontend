// form
import { FormProvider as Form, UseFormReturn } from "react-hook-form";

interface CustomProviderProps {
  methods: UseFormReturn<any>;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  children: React.ReactNode;
}

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: CustomProviderProps) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
