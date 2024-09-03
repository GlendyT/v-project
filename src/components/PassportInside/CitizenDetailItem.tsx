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
      <p className=" font-michroma font-extrabold text-violet-950 text-[6px] flex flex-col max-sm:text-[6px]">
        {label}
        <span className="font-normal text-[9px] max-sm:text-[7px] uppercase">{data}</span>
      </p>
    </>
  );
}
