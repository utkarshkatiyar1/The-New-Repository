import { ContractForm } from "@/components/form/ContractForm";




const CreateContarctPage = ({params, searchParams}) => {
    // const {name} = params
    // console.log(searchParams)
    // const name = searchParams.name;
    // const address = searchParams.address;
    // const price = searchParams.price;
    // const imagePath = decodeURIComponent(searchParams.imagePath);
    // console.log(imagePath)


  return (
    <div className="flex justify-between h-full">
        <ContractForm/>

    </div>
  );
};

export default CreateContarctPage;
