// Problem Statement on https://www.youtube.com/watch?v=EirBuUUPbio
// Alternate solution https://codesandbox.io/p/sandbox/delicate-river-8zur7n?file=%2Fsrc%2FApp.js%3A22%2C16-22%2C23
import React, {useState} from 'react';

const Body = () => {
    const countries = [
        { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
        { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
        { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
      ];

      const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);

      const countryList = () => {
        console.log(countries);
         return countries.map((item, index) => {
            console.log(item);
            return <option value={index}>{item.name}</option>
        }
        )
      }
      const cityList = () => {
        console.log(countries);
         return countries[selectedCountryIndex].cities.map((item, index) => {
            console.log(item);
            return <option value={index}>{item}</option>
        }
        )
      }

    return (
        <>
            <div>Select country and city</div>
            <div>
                Select Country
                <select 
                    value={selectedCountryIndex}
                    onChange={(e) => {setSelectedCountryIndex(e.target.value)}}
                >
                    {countryList()}
                </select>
            </div>
            <div>
                Select City
                <select>
                    {cityList()}
                </select>
            </div>
        </>
    );
}

export default Body;