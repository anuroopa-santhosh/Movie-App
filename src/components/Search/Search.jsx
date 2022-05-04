import { createMuiTheme, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { useState} from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { Button } from '@material-ui/core';

const Search = () => {
    const [searchText, setSearchText] = useState("");

    const darkTheme = createMuiTheme({
        palette:{
            type: "dark",
            primary : {
                main: "#fff",
            },
        },
    });



  return (
    <div>
        <ThemeProvider theme={darkTheme}>
        <div style={{display:"flex",margin:'15px 0' }} >
        <TextField
         style={{flex: 1}}
         className = "searchbox"
         label="Search"
         variant='filled'
         onChange={(e) => setSearchText(e.target.value)}
         />
         <Button variant='contained' style= {{marginLeft: 10}}>
             <SearchIcon/>
             </Button>
         </div>
         </ThemeProvider>
        </div>
  )
}

export default Search