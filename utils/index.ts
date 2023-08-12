

export async function fetchCars(){
    const headers={
        'X-RapidAPI-Key': '1ad2367781mshf3366b2faceb64ep1fdc2ajsnc50d3edd8628',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",{
        headers:headers,
    });
    const result=await response.json();
    return result
}

