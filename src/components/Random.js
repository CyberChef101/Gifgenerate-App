import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Random () {
        
    const {gif, loading,fetchData} = useGif();

    
    return(
        <div className="w-1/2  bg-green-500 mt-[140px] rounded-lg border border-black flex flex-col items-center gap-y-10">
        
                <h1 className="  font-bold text-2xl underline uppercase mt-[15px]"> A Random Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src= {gif} width="450"  alt='gif'/>)
            }


            <button onClick={() => fetchData()}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide">

        Generate

        </button>

            
        </div>
    )
}