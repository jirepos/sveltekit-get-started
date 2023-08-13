<script lang="ts">
  import Country from './Country.svelte';	
    
  let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla"
                 ,"Antigua and Barbuda","Argentina","Armenia","Aruba","Australia"
                 ,"Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize"
                 ,"Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil"
                 ,"British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia"
                 ,"Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic"
                 ,"Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia"
                 ,"Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic"
                 ,"Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia"
                 ,"Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia"
                 ,"French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar"
                 ,"Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau"
                 ,"Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia"
                 ,"Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan"
                 ,"Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait"
                 ,"Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya"
                 ,"Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar"
                 ,"Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania"
                 ,"Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro"
                 ,"Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal"
                 ,"Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua"
                 ,"Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine"
                 ,"Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
                 ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon"
                 ,"Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia"
                 ,"Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands"
                 ,"Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts and Nevis"
                 ,"St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria"
                 ,"Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago"
                 ,"Tunisia","Turkey","Turkmenistan","Turks and Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates"
                 ,"United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela"
                 ,"Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];  
    
  /* FILTERING countres DATA BASED ON INPUT */	
  let filteredCountries:any[] = [];
  // $: console.log(filteredCountries)	
  
  const filterCountries = () => {
    let storageArr:any[] = []
    if (inputValue) {
      countries.forEach(country => {
         if (country.toLowerCase().startsWith(inputValue.toLowerCase())) {
           storageArr = [...storageArr, makeMatchBold(country)];
         }
      });
    }
    filteredCountries = storageArr;
  }	
  
  
  /* HANDLING THE INPUT */
  let searchInput; // use with bind:this to focus element
  let inputValue = "";
    
  $: if (!inputValue) {
    filteredCountries = [];
    hiLiteIndex = null;
  }
  
  const clearInput = () => {
    inputValue = "";	
    searchInput.focus();
  }
    
  const setInputVal = (countryName) => {
    inputValue = removeBold(countryName);
    filteredCountries = [];
    hiLiteIndex = null;
    // @ts-ignore
    document.querySelector('#country-input')?.focus();
  }	
  
  const submitValue = () => {
    if (inputValue) {
      console.log(`${inputValue} is submitted!`);
      setTimeout(clearInput, 1000);
    } else {
      alert("You didn't type anything.")
    }
  }
  
  const makeMatchBold = (str) => {
    // replace part of (country name === inputValue) with strong tags
    let matched = str.substring(0, inputValue.length);
    let makeBold = `<strong>${matched}</strong>`;
    let boldedMatch = str.replace(matched, makeBold);
    return boldedMatch;
  }
  
  const removeBold = (str) => {
    //replace < and > all characters between
    return str.replace(/<(.)*?>/g, "");
    // return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
  }	
    
  
  /* NAVIGATING OVER THE LIST OF COUNTRIES W HIGHLIGHTING */	
  let hiLiteIndex:any | null = null;
  //$: console.log(hiLiteIndex);	
  $: hiLitedCountry = filteredCountries[hiLiteIndex]; 	
    
  const navigateList = (e) => {
    if (e.key === "ArrowDown" && hiLiteIndex <= filteredCountries.length-1) {
      hiLiteIndex === null ? hiLiteIndex = 0 : hiLiteIndex += 1
    } else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
      hiLiteIndex === 0 ? hiLiteIndex = filteredCountries.length-1 : hiLiteIndex -= 1
    } else if (e.key === "Enter") {
      setInputVal(filteredCountries[hiLiteIndex]);
    } else {
      return;
    }
  } 
  </script>
  
  
  <svelte:window on:keydown={navigateList} />
  
  <form autocomplete="off" on:submit|preventDefault={submitValue}>
    <div class="autocomplete">
      <input id="country-input" 
             type="text" 
             placeholder="Search Country Names" 
             bind:this={searchInput}
             bind:value={inputValue} 
             on:input={filterCountries}>
    </div>
    
    <input type="submit">
    
    <!-- FILTERED LIST OF COUNTRIES -->
    {#if filteredCountries.length > 0}
      <ul id="autocomplete-items-list">
        {#each filteredCountries as country, i}
          <Country itemLabel={country} highlighted={i === hiLiteIndex} on:click={() => setInputVal(country)} />
        {/each}			
      </ul>
    {/if}
  </form>
    
    
  <style>
  div.autocomplete {
    /*the container must be positioned relative:*/
    position: relative;
    display: inline-block;
    width: 300px;
  }
  input {
    border: 1px solid transparent;
    background-color: #f1f1f1;
    padding: 10px;
    font-size: 16px;
    margin: 0;
  }
  input[type=text] {
    background-color: #f1f1f1;
    width: 100%;
  }
  input[type=submit] {
    background-color: DodgerBlue;
    color: #fff;
  }
    
  #autocomplete-items-list {
    position: relative;
    margin: 0;
    padding: 0;
    top: 0;
    width: 297px;
    border: 1px solid #ddd;
    background-color: #ddd;
  }	
  </style>	