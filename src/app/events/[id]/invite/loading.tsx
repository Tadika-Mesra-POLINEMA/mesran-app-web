export default function Loading() {
  return (
    <div className="flex flex-col w-full min-h-[100dvh] p-12 mx-auto lg:w-2/6 md:w-1/2">
      <div className="skeleton w-full h-32"></div>
      <div className="skeleton w-full h-96 mt-5"></div>
    </div>
  );
}
