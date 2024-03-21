export default function Card(props: { index: number; flip: boolean; dog: string; }){
    return (
        <div key={props.index} className={(props.flip ? "" : "cursor-pointer ") + "w-full h-full shadow-[0px_0px_5px_2px] shadow-slate-700 rounded-lg ease-linear duration-150 hover:shadow-[0px_0px_20px_10px] hover:shadow-slate-400 justify-center items-center div grow-0 flex justify-center" + (props.index + 1).toString()}>
          {props.flip ? (props.dog.endsWith(".mp4") || props.dog.endsWith("webM") ? <video autoPlay loop muted className="object-scale-down w-full h-full object-center m-0" ><source src={props.dog} type="video/mp4" />Your browser does not support the video tag.</video> : <img src={props.dog} className="object-scale-down w-full h-full object-center m-0" alt="doggo" />) : (props.index + 1).toString()}
        </div>
    )
}
