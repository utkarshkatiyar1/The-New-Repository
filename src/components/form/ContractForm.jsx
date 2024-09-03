"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation";
import { useRef } from "react";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";


const formSchema = z.object({
  pat: z.string().min(1, { message: "PAT is required" }),
  AdhaarNumber: z.string().min(1, { message: "username is required" }),
  PhoneNumber: z.string().min(1, { message: "username is required" }),
  Address: z.string().min(1, { message: "username is required" }),
  username: z.string().min(1, { message: "username is required" }),
})



export function ContractForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pat: "",
      AdhaarNumber: "",
      PhoneNumber: "",
      Address: "",
      username: ""
    },
  });

  const onSubmit = async () => {
    console.log("values")
    router.push('/');
    // const savedGithubAccountData = await createGithubAccount({
    //   pat: values.pat,
    //   username: values.username,
    // });
    // const parsedObject = JSON.parse(JSON.stringify(savedGithubAccountData));
    // console.log(parsedObject.pat)
    // form.reset();
 
  }
  // ...

  const [dateOfContract, setDateOfContract] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [farmerName, setFarmerName] = useState("");
  const [farmerFatherName, setFarmerFatherName] = useState("");
  const [farmerAge, setFarmerAge] = useState("");
  const [farmerAddress, setFarmerAddress] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [totalFieldArea, setTotalFieldArea] = useState("");
  const [agreedArea, setAgreedArea] = useState("");
  const [amount, setAmount] = useState("");

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  const handleScroll = (e, ref) => {
    if (e.target !== ref.current) {
      return;
    }
    ref.current.scrollTop = e.target.scrollTop;
  };

  return (
    <div className="flex gap-5 w-full h-[100vh]">
        <div ref={div1Ref}
            onScroll={(e) => handleScroll(e, div1Ref)}
            className="w-[40%] p-10 overflow-y-scroll h-full scrollbar-hide">
                <div className="font-bold text-lg mb-5">Create Contract</div>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="dateOfContract"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold text-[#797979]">
                        {"Date :"}
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={dateOfContract} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setDateOfContract);
                        }}
                        />
                    </FormControl>
                    <FormMessage/> 
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    CompanyName :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={companyName} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setCompanyName);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="buyerName"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    BuyerName :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={buyerName} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setBuyerName);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="farmerName"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    FarmerName :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={farmerName} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setFarmerName);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="farmerFatherName"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    FarmerFatherName :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={farmerFatherName} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setFarmerFatherName);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="farmerAge"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    FarmerAge :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={farmerAge} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setFarmerAge);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="farmerAddress"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    FarmerAddress :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={farmerAddress} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setFarmerAddress);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="companyAddress"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    CompanyAddress :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={companyAddress} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setCompanyAddress);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="totalFieldArea"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    TotalFieldArea :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={totalFieldArea} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setTotalFieldArea);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="agreedArea"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    AgreedArea :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={agreedArea} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setAgreedArea);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-base-semibold  text-[#797979]">
                    Amount :
                    </FormLabel>

                    <FormControl>
                        <Input
                        type="text"
                        className="border-[1px] border-[#d3d3d3] rounded-md"
                        {...field}
                        value={amount} 
                        onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e, setAmount);
                        }}
                        />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>
                )}
                />

                


                <Button onClick={onSubmit} type="submit">Done</Button>
            </form>
          </Form>


        </div>

        <div className="flex flex-col items-center w-[60%] bg-[#272E3F] h-full p-1">
            <div 
            ref={div2Ref}
            onScroll={(e) => handleScroll(e, div2Ref)}
            className="bg-white w-[80%] p-[4rem] flex flex-col items-center text-xs overflow-y-scroll scrollbar-hide">
                <div className="mb-4">AGREEMENT</div>
                <p className=" text-justify">
                    This AGREEMENT made this day of <span className="text-green-500 font-bold">{!dateOfContract ? "..........." : dateOfContract}</span> a company incorporated under the Companies Act 1956, and having its registered office at <span className="text-green-500 font-bold">{!companyName ? "..........." : companyName}</span> represented by <span className="text-green-500 font-bold">{!buyerName ? "..........." : buyerName}</span>
                        {"("} hereinafter referred to as the company, which expression shall include its successors and assignees of the one part{")"}
                        AND
                        <span className="text-green-500 font-bold">{!farmerName ? "..........." : farmerName}</span> S/O <span className="text-green-500 font-bold">{!farmerFatherName ? "..........." : farmerFatherName}</span> aged <span className="text-green-500 font-bold">{!farmerAge ? "..........." : farmerAge}</span>years, residing at
                        <span className="text-green-500 font-bold">{!farmerAddress ? "..........." : farmerAddress}</span>
                        hereinafter referred to as the FARMER, {"("}the expression farmer shall include his/her legal heirs, representatives, successors,
                        testators, administrators assignees{")"} of the other part{")"}:
                        WHEREAS the Company is a Registered 100% EOU mainly engaged in the processing and export of vegetables, fresh fruits, pickled
                        and in brine form for all purposes and for this purpose has its factory and processing facilities at <span className="text-green-500 font-bold">{!companyAddress ? "..........." : companyAddress}</span>. INDIA and was on the look out for suitable farmers who
                        would be willing to grow the said products particularly gherkins, onion, chillies etc., by entering into a long term arrangement with the
                        Company and also by undertaking to sell their entire produce of the said crop to the Company alone.
                        AND WHEREAS the Farmer is owning and/or in possession of agricultural land suitable for growing the crops required by the
                        Company for export and accordingly is desirous of entering into an agreement with the Company for growing the said crop as per the
                        specification, terms and conditions that are stipulated by the Company including selling of 100% of the crop produced by the farmer
                        to the Company on mutually acceptable terms and conditions and accordingly this agreement is entered into between the parties.
                        AND WHEREAS the farmer herein after understanding the requirements of the Company and their terms and requirements has
                        agreed to the terms set out and has agreed to comply with the same. The parties have consequently reduced into writing the terms
                        and conditions as details hereinafter. 
                </p>
                <div className="mb-1 font-semibold">NOW THIS AGREEMENT BETWEEN THE PARTIES WITNESSETH AS FOLLOWS: </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-1 ml-6">
                        <span>1.</span>
                        <p>The Farmer undertake to grow in his agricultural land measuring <span className="text-green-500 font-bold">{!totalFieldArea ? "..........." : totalFieldArea}</span> acre/ <span className="text-green-500 font-bold">{!agreedArea ? "..........." : agreedArea}</span> acre the said crop at the rate
                            of three crop cycle in a year or such other crops as may be specified by the Company in that regard. The farmer has
                            agree that the said land shall not be used for any other purpose other than growing of the specified crop as mentioned
                            in this agreement. </p>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <span>2.</span>
                        <p>The farmer further unconditionally agrees to sell the entire crop produced on the said land to the Company exclusively
                            and undertakes not to sell any of the crops grown in the said land to anybody except with the previous consent of the
                            company in writing. 
                            </p>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <span>3.</span>
                        <p> The parties have agreed that it shall be the responsibility of the Farmer to take adequate/necessary steps for growing
                            the said crop and also ensuring that the technical guidance and instructions given by the Company are followed
                            faithfully and the farmer undertakes to comply with regard to the quality of seeds to be used, grades/variety of fertilizers
                            to be used and also the measures stipulated for plant protection including the usage of plant protection chemicals.
                                                        </p>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <span>4.</span>
                        <p> It shall be the responsibility of the farmer to grade and sort the crops grown as per the specifications given by the
                        Company from time to time and also for organising delivery of the said crops / produce to the collection centers as
                        may be specified by the Company. 
                          </p>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <span>5.</span>
                        <p> The Company shall have the right to inspect the land where the crops are grown and also for giving necessary
                        instructions/guidance to the farmer in all matters connected with the growing of the said crop under this agreement. All
                        instructions and guidances given during such inspections shall be followed by the farmer.  
                          </p>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <span>6.</span>
                        <p> The Company assures the farmer that it shall endeavor to help the farmer in all respects particularly for procurement
                        and distribution of seeds, fertilizers, plant protection chemicals at competitive rates. All such items/materials supplied by
                        the Company will be used by the farmer only for growing of the crops recommended and production thereon of the
                        crops specifically covered under this agreement and not for any other purpose whatsoever. The farmer shall not part
                        with the material supplied by the company nor misappropriate the same. 
                        </p>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <span>6.</span>
                        <p> The Company assures the farmer that it shall endeavor to help the farmer in all respects particularly for procurement
                        and distribution of seeds, fertilizers, plant protection chemicals at competitive rates. All such items/materials supplied by
                        the Company will be used by the farmer only for growing of the crops recommended and production thereon of the
                        crops specifically covered under this agreement and not for any other purpose whatsoever. The farmer shall not part
                        with the material supplied by the company nor misappropriate the same. 
                        </p>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <span>7.</span>
                        <p> The company may at its sole discretion may consider extending financial assistance which would be limited to Rs <span className="text-green-500 font-bold">{!amount ? "..........." : amount}</span> to the farmer, on company technical
                        reports/recommendation given by the area supervisors to assist the farmer and meeting the terms of this agreement
                        including for ensuring proper yield of the crop from the said land. It is however, clarified that this financial assistance
                        cannot be claimed by the farmer as a matter of right. 
                        </p>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <span>8.</span>
                        <p> All disputes of differences arising under this agreement will be settled mutually in an amicable manner by both the
                        parties failing which the matter will be referred to arbitration and in such an event the provisions of Arbitration and
                        Conciliation Act, 1996 shall apply. 
                        </p>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <span>9.</span>
                        <p> This agreement will be subject to the jurisdiction of competent courts in Bangalore City.
                        </p>
                    </div>
                </div>

                <div className="mt-4 mb-10">IN WITTNESS WHEREOF both the parties have affixed their seal/signature on the <span className="text-green-500 font-bold">{!dateOfContract ? "..........." : dateOfContract}</span> in
                the presence of following witnesses. </div>

                <div className="flex flex-col gap-6 w-full items-center">
                    <div className="w-[80%] flex justify-between">
                        <div>COMPANY</div>
                        <div>FARMER</div>
                    </div>
                    <div className="w-[80%] flex justify-between">
                        <div>WITNESS</div>
                        <div>WITNESS</div>
                    </div>
                </div>

            </div>
            
        </div>
      

    </div>
    
  )
}
