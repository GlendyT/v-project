type CitizenDetailItemProps = {
  label: string;
  data: string;
};

export default function CitizenDetailItem({
  label,
  data,
}: CitizenDetailItemProps) {
  return (
    <>
    <p className="font-bold text-gray-700 text-xs flex flex-col">
      {label}
      <span className="font-normal text-sm uppercase">{data}</span>
    </p>
    </>
  );
}
