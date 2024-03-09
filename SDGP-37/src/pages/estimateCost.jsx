function EstimateCost(){
    return(
        <>
        <div className="font-abc xl">
        <h3 className="text-white ml-8 mt-4 text-lg font-bold sm:ml-10 sm:mt-10 lg:text-lg lg:mt-8 xl:mt-6 2xl:text-lg 2xl:mt-8 xl:text-lg">Damaged Areas:</h3>
        <div className=" w-2/5 mt-1 sm:ml-14 xl:flex xl:w-11/12 lg:flex sm:flex">
            <div className="sm:w-96 lg:w-10 lg:ml-80 sm:min-h-80 lg:mt-8 sm:mt-4 justify-between bg-gray-800 rounded-xl xl:w-11/12 2xl:w-2/6  w-80 min-h-52 ml-8 2xl:ml-0 "></div>
            <div className="sm:mt-6 lg:mt-10 xl:ml-52 2xl:mt-20 ml-4 mt-4">
                <p className="text-white text-lg lg:text-base  xl:text-lg 2xl:text-lg sm:text-sm">Vehicle brand:</p><br></br>
                <p className="text-white text-lg lg:text-base xl:text-lg 2xl:text-lg sm:text-sm">Vehicle Type:</p><br></br>
                <div className="sm:flex">
                    <div >
                    <p className="text-white text-lg lg:text-base xl:text-lg 2xl:text-lg sm:text-sm">Vehicle Total Estmated Cost:</p>
                    
                    </div>
                    <div>
                    <div className="sm:w-64 sm:ml-48 bg-gray-800 rounded-xl min-h-16 mt-4 mr-100 2xl:mt-0 2xl:ml-14  "></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sm:w-11/12 sm:ml-8 sm:mt-8 lg:mt-8 lg:min-h-44 xl:pl-10 xl:ml-14 xl:mt-10 bg-gray-800 ml-4 w-11/12 mt-8 rounded-xl min-h-36 2xl:w-3/6 2xl:mt-4 2xl:min-h-48 xl:min-h-44 xl:w-9/12">
           <div className="sm:w-11/12 sm:pl-10 flex text-white justify-between  pt-4 2xl:pl-2 pl-4">
            <div>
                <p className="font-bold xl:text-xl 2xl:text-base">Damaged Part</p>
            </div>
            <div>
                <p className="font-bold xl:text-xl 2xl:text-base pl-8">Repair/Replace</p>
            </div>
            <div>
                <p className="font-bold xl:text-xl 2xl:text-base pl-8">Estimated Cost(RS)</p>
            </div>
           </div>
        </div>
        </div>
        </>
    );
}
export default EstimateCost;