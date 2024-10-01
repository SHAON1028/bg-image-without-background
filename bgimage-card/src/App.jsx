export default function App() {
  return (
    <div className="relative flex flex-col justify-center  h-[600px] w-[600px] mt-6 ring-2 ">
      <img
        src="https://images.pexels.com/photos/27669807/pexels-photo-27669807/free-photo-of-a-road-is-winding-through-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className="mx-auto object-cover absolute inset-0  max-h-[600px] w-full "
      />

      <div id="card" class="max-w-sm rounded overflow-hidden shadow-lg relative bg-blue-500 mx-auto top-[200px]">
        <img
          class="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}
