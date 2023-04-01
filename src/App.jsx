import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return(
    <div>
      <div className="background w-full h-screen relative overflow-x-hidden flex justify-center" >
      
        <h1 className="bg-white absolute w-11/12 py-5 mx-auto my-5 rounded-lg text-center font-bold text-3xl">Random Gif</h1>

        <div className="w-11/12 py-2 mx-auto flex justify-between mt-[120px] flex-col lg:flex-row">
          <div className="w-[100%] lg:w-[49%] mb-20 lg:mb-0">
          <Random/>

          </div>
          <div className="w-[100%] lg:w-[49%] mb-20 lg:mb-0">
          <Tag/>

          </div>
        </div> 
        
   
        
      </div>
    </div>
  );
}
