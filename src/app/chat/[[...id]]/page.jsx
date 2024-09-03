import LeftChatbar from "@/components/LeftChatbar";
import MainChat from "@/components/MainChat";
import RightChatbar from "@/components/RightChatbar";



const ProductPage = ({params, searchParams}) => {
    // const {name} = params
    console.log(searchParams)
    const name = searchParams.name;
    const address = searchParams.address;
    const price = searchParams.price;
    const imagePath = decodeURIComponent(searchParams.imagePath);
    console.log(imagePath)


  return (
    <div className="flex justify-between h-full">
        
        <LeftChatbar/>
        <MainChat id={params.id} name={name} address={address} price={price} imagePath={imagePath}/>
        {/* <RightChatbar/> */}

    </div>
  );
};

export default ProductPage;
