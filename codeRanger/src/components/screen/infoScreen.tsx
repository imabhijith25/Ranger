const InfoScreen = ({ screenType }: any) => {
    if (screenType == "empty") {
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
                <p>Mock screen</p>
            </>
        );
    }
};

export default InfoScreen;
