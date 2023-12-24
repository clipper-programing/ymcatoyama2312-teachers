export default function hanedaEticket() {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n\t.barcode {\n\t\tleft: 50%;\n\t\tbox-shadow: 1px 0 0 1px, 5px 0 0 1px, 10px 0 0 1px, 11px 0 0 1px, 15px 0 0 1px, 18px 0 0 1px, 22px 0 0 1px, 23px 0 0 1px, 26px 0 0 1px, 30px 0 0 1px, 35px 0 0 1px, 37px 0 0 1px, 41px 0 0 1px, 44px 0 0 1px, 47px 0 0 1px, 51px 0 0 1px, 56px 0 0 1px, 59px 0 0 1px, 64px 0 0 1px, 68px 0 0 1px, 72px 0 0 1px, 74px 0 0 1px, 77px 0 0 1px, 81px 0 0 1px, 85px 0 0 1px, 88px 0 0 1px, 92px 0 0 1px, 95px 0 0 1px, 96px 0 0 1px, 97px 0 0 1px, 101px 0 0 1px, 105px 0 0 1px, 109px 0 0 1px, 110px 0 0 1px, 113px 0 0 1px, 116px 0 0 1px, 120px 0 0 1px, 123px 0 0 1px, 127px 0 0 1px, 130px 0 0 1px, 131px 0 0 1px, 134px 0 0 1px, 135px 0 0 1px, 138px 0 0 1px, 141px 0 0 1px, 144px 0 0 1px, 147px 0 0 1px, 148px 0 0 1px, 151px 0 0 1px, 155px 0 0 1px, 158px 0 0 1px, 162px 0 0 1px, 165px 0 0 1px, 168px 0 0 1px, 173px 0 0 1px, 176px 0 0 1px, 177px 0 0 1px, 180px 0 0 1px;\n\t\tdisplay: inline-block;\n\t\ttransform: translateX(-90px);\n\t}\n"
                }}
            />
            <div
                className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
                id="hanedaEticket"
                style={{
                    backgroundImage:
                        "url(/starflyer-bg.jpg)"
                }}
            >
                <div className="max-w-md w-full h-full mx-auto z-10 bg-black rounded-3xl">
                    <div className="flex flex-col">
                        <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                            <div className="flex-none sm:flex">
                                
                                <div className="flex-auto justify-evenly">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center  my-1">
                                            <span className="mr-3 rounded-full bg-white w-8 h-8">
                                                <img
                                                    src="/starflyer-logo.jpg"
                                                    className="h-8 p-1"
                                                />
                                            </span>
                                            <h2 className="font-medium">StarFlyer</h2>
                                        </div>
                                        <div className="ml-auto text-black">A350-1000</div>
                                    </div>
                                    <div className="border-b border-dashed border-b-2 my-5" />
                                    <div className="flex items-center">
                                        <div className="flex flex-col">
                                            <div className="flex-auto text-xs text-gray-400 my-1">
                                                <span className="mr-1 ">MO</span>
                                                <span>19 22</span>
                                            </div>
                                            <div className="w-full flex-none text-lg text-black font-bold leading-none">
                                                HND
                                            </div>
                                            <div className="text-xs">Tokyo Haneda</div>
                                        </div>
                                        <div className="flex flex-col mx-auto">
                                            <img
                                                src="/starflyer-logo.jpg"
                                                className="w-20 p-1"
                                            />
                                        </div>
                                        <div className="flex flex-col ">
                                            <div className="flex-auto text-xs text-gray-400 my-1">
                                                <span className="mr-1">MO</span>
                                                <span>19 23</span>
                                            </div>
                                            <div className="w-full flex-none text-lg text-black font-bold leading-none">
                                                KIX
                                            </div>
                                            <div className="text-xs">Osaka Kansai</div>
                                        </div>
                                    </div>
                                    <div className="border-b border-dashed border-b-2 my-5 pt-5">
                                        <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -left-2" />
                                        <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -right-2" />
                                    </div>
                                    <div className="flex items-center mb-5 p-5 text-sm">
                                        <div className="flex flex-col">
                                            <span className="text-sm">Flight</span>
                                            <div className="font-semibold">SF130</div>
                                        </div>
                                        <div className="flex flex-col ml-auto">
                                            <span className="text-sm">Gate</span>
                                            <div className="font-semibold">B3</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4 px-5">
                                        <div className="flex flex-col text-sm">
                                            <span className="">Board</span>
                                            <div className="font-semibold">11:50AM</div>
                                        </div>
                                        <div className="flex flex-col mx-auto text-sm">
                                            <span className="">Departs</span>
                                            <div className="font-semibold">11:30Am</div>
                                        </div>
                                        <div className="flex flex-col text-sm">
                                            <span className="">Arrived</span>
                                            <div className="font-semibold">2:00PM</div>
                                        </div>
                                    </div>
                                    <div className="border-b border-dashed border-b-2 my-5 pt-5">
                                        <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -left-2" />
                                        <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -right-2" />
                                    </div>
                                    <div className="flex items-center px-5 pt-3 text-sm">
                                        <div className="flex flex-col">
                                            <span className="">Passanger</span>
                                            <div className="font-semibold">Cody</div>
                                        </div>
                                        <div className="flex flex-col mx-auto">
                                            <span className="">Class</span>
                                            <div className="font-semibold">Economy</div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="">Seat</span>
                                            <div className="font-semibold">12 E</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col py-5  justify-center text-sm ">
                                        <h6 className="font-bold text-center">Boarding Pass</h6>
                                        <div className="barcode h-14 w-0 inline-block mt-4 relative left-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}