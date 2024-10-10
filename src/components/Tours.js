import Card from "./Card";

function Tours({tours, removeTour}){
    return(
        <div className="container">
            <div>
                <h1>Plan Tour</h1>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        {/* if unique id not present then can use index */}
                        {/* Keys must pass in map function */}
                        return <Card key={tour.id} {...tour} removeTour={removeTour}/>
                })
                }
            </div>
        </div>
    )
}

export default Tours;