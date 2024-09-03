export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center my-1 bg-greenButton text-white font-bold p-1 uppercase text-xs ">
      {children}
    </p>
  );
}
