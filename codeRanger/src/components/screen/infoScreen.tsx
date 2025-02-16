const InfoScreen = ({ selectedItem }: any) => {
    if (!selectedItem) {
        return (
            <>
                <div>
                    <p className="mt-4 text-sm text-muted-foreground flex justify-center">
                        Please select a request to see details
                    </p>
                </div>
            </>
        );
    } else {
        return (
            <>
                {Object.keys(selectedItem).map((item) => (
                    <div className="flex justify-start gap-10 ">
                        <div className="text-xs   w-[150px] pb-2">
                            <p>{item}</p>
                        </div>
                        <div className=" max-w-[300px] text-xs overflow-x-scroll w-[100%] custom-scrollbar">
                            <p>{selectedItem[item]}</p>
                        </div>
                    </div>
                ))}
            </>
        );
    }
};

export default InfoScreen;
