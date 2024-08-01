export const FormError: React.FC<{ message: string }> = (props) => (
  <div className="px-3 py-2 ring-red-400 ring-2 rounded-md text-destructive">
    {props.message}
  </div>
);
