type CitizenDetalProps = {
  image: string;
};

export default function CitizenPage1({ image }: CitizenDetalProps) {
  return (
    <div className=" shadow-md rounded-xl w-full h-50 ">
      <img src={image} />
    </div>
  );
}
